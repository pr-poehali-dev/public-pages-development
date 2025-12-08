import json
import os
from typing import Dict, Any, List, Optional
from pydantic import BaseModel, Field
import psycopg2
from psycopg2.extras import RealDictCursor

class BlockCreate(BaseModel):
    page_id: int
    type: str
    content: Dict
    styles: Dict = {}
    position: int
    parent_id: Optional[int] = None

class BlockUpdate(BaseModel):
    content: Optional[Dict] = None
    styles: Optional[Dict] = None
    position: Optional[int] = None

def get_db_connection():
    dsn = os.environ['DATABASE_URL']
    return psycopg2.connect(dsn, cursor_factory=RealDictCursor)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Управление блоками: создание, загрузка, обновление, удаление
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        if method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            block_data = BlockCreate(**body_data)
            
            cur.execute(
                """INSERT INTO blocks (page_id, type, content, styles, position, parent_id) 
                   VALUES (%s, %s, %s, %s, %s, %s) 
                   RETURNING id, page_id, type, content, styles, position, parent_id""",
                (
                    block_data.page_id,
                    block_data.type,
                    json.dumps(block_data.content),
                    json.dumps(block_data.styles),
                    block_data.position,
                    block_data.parent_id
                )
            )
            result = cur.fetchone()
            conn.commit()
            
            cur.close()
            conn.close()
            
            result_dict = {
                'id': result['id'],
                'page_id': result['page_id'],
                'type': result['type'],
                'content': result['content'],
                'styles': result['styles'],
                'position': result['position'],
                'parent_id': result['parent_id']
            }
            
            return {
                'statusCode': 201,
                'headers': headers,
                'body': json.dumps(result_dict),
                'isBase64Encoded': False
            }
        
        if method == 'GET':
            params = event.get('queryStringParameters') or {}
            page_id = params.get('page_id')
            
            if not page_id:
                cur.close()
                conn.close()
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'page_id required'}),
                    'isBase64Encoded': False
                }
            
            cur.execute(
                "SELECT * FROM blocks WHERE page_id = %s ORDER BY position ASC",
                (page_id,)
            )
            blocks = cur.fetchall()
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps([dict(b) for b in blocks], default=str),
                'isBase64Encoded': False
            }
        
        if method == 'PUT':
            body_data = json.loads(event.get('body', '{}'))
            block_id = body_data.get('block_id')
            
            if not block_id:
                cur.close()
                conn.close()
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'block_id required'}),
                    'isBase64Encoded': False
                }
            
            update_data = BlockUpdate(**body_data)
            
            set_clauses = []
            values = []
            
            if update_data.content is not None:
                set_clauses.append("content = %s")
                values.append(json.dumps(update_data.content))
            if update_data.styles is not None:
                set_clauses.append("styles = %s")
                values.append(json.dumps(update_data.styles))
            if update_data.position is not None:
                set_clauses.append("position = %s")
                values.append(update_data.position)
            
            set_clauses.append("updated_at = CURRENT_TIMESTAMP")
            values.append(block_id)
            
            cur.execute(
                f"UPDATE blocks SET {', '.join(set_clauses)} WHERE id = %s RETURNING *",
                values
            )
            result = cur.fetchone()
            conn.commit()
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps(dict(result), default=str),
                'isBase64Encoded': False
            }
        
        cur.close()
        conn.close()
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }