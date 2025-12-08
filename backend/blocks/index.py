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
    Универсальная функция: блоки, боты, маркетплейс, биржа
    '''
    method: str = event.get('httpMethod', 'GET')
    path: str = event.get('path', '')
    
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
        
        # ========== BOTS ROUTES ==========
        if '/bots' in path:
            if '/nodes' in path:
                if method == 'POST':
                    body_data = json.loads(event.get('body', '{}'))
                    cur.execute(
                        """INSERT INTO bot_nodes (bot_id, node_type, title, content, position_x, position_y)
                           VALUES (%s, %s, %s, %s, %s, %s) RETURNING *""",
                        (body_data['bot_id'], body_data['node_type'], body_data.get('title'), 
                         json.dumps(body_data.get('content', {})), body_data.get('position_x', 0), body_data.get('position_y', 0))
                    )
                    result = cur.fetchone()
                    conn.commit()
                    cur.close()
                    conn.close()
                    return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
                
                if method == 'GET':
                    bot_id = (event.get('queryStringParameters') or {}).get('bot_id')
                    cur.execute("SELECT * FROM bot_nodes WHERE bot_id = %s", (bot_id,))
                    nodes = cur.fetchall()
                    cur.close()
                    conn.close()
                    return {'statusCode': 200, 'headers': headers, 'body': json.dumps([dict(n) for n in nodes], default=str), 'isBase64Encoded': False}
            
            if '/connections' in path:
                if method == 'POST':
                    body_data = json.loads(event.get('body', '{}'))
                    cur.execute(
                        """INSERT INTO bot_connections (bot_id, source_node_id, target_node_id, condition_type, condition_value)
                           VALUES (%s, %s, %s, %s, %s) RETURNING *""",
                        (body_data['bot_id'], body_data['source_node_id'], body_data['target_node_id'], 
                         body_data.get('condition_type'), body_data.get('condition_value'))
                    )
                    result = cur.fetchone()
                    conn.commit()
                    cur.close()
                    conn.close()
                    return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
                
                if method == 'GET':
                    bot_id = (event.get('queryStringParameters') or {}).get('bot_id')
                    cur.execute("SELECT * FROM bot_connections WHERE bot_id = %s", (bot_id,))
                    connections = cur.fetchall()
                    cur.close()
                    conn.close()
                    return {'statusCode': 200, 'headers': headers, 'body': json.dumps([dict(c) for c in connections], default=str), 'isBase64Encoded': False}
            
            if method == 'POST':
                body_data = json.loads(event.get('body', '{}'))
                cur.execute(
                    """INSERT INTO bots (user_id, name, description, platform, settings)
                       VALUES (%s, %s, %s, %s, '{}') RETURNING *""",
                    (body_data['user_id'], body_data['name'], body_data.get('description'), body_data['platform'])
                )
                result = cur.fetchone()
                conn.commit()
                cur.close()
                conn.close()
                return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
            
            if method == 'GET':
                params = event.get('queryStringParameters') or {}
                user_id = params.get('user_id')
                bot_id = params.get('bot_id')
                if bot_id:
                    cur.execute("SELECT * FROM bots WHERE id = %s", (bot_id,))
                    bot = cur.fetchone()
                    cur.close()
                    conn.close()
                    return {'statusCode': 200 if bot else 404, 'headers': headers, 
                           'body': json.dumps(dict(bot) if bot else {'error': 'Not found'}, default=str), 'isBase64Encoded': False}
                cur.execute("SELECT * FROM bots WHERE user_id = %s ORDER BY created_at DESC", (user_id,))
                bots = cur.fetchall()
                cur.close()
                conn.close()
                return {'statusCode': 200, 'headers': headers, 'body': json.dumps([dict(b) for b in bots], default=str), 'isBase64Encoded': False}
        
        # ========== MARKETPLACE ROUTES ==========
        if '/marketplace' in path:
            if '/purchase' in path and method == 'POST':
                body_data = json.loads(event.get('body', '{}'))
                cur.execute("SELECT price FROM marketplace_items WHERE id = %s AND is_active = TRUE", (body_data['item_id'],))
                item = cur.fetchone()
                if not item:
                    cur.close()
                    conn.close()
                    return {'statusCode': 404, 'headers': headers, 'body': json.dumps({'error': 'Item not found'}), 'isBase64Encoded': False}
                cur.execute(
                    """INSERT INTO marketplace_purchases (buyer_id, item_id, price, payment_status)
                       VALUES (%s, %s, %s, 'completed') RETURNING *""",
                    (body_data['buyer_id'], body_data['item_id'], item['price'])
                )
                result = cur.fetchone()
                cur.execute("UPDATE marketplace_items SET sales_count = sales_count + 1 WHERE id = %s", (body_data['item_id'],))
                conn.commit()
                cur.close()
                conn.close()
                return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
            
            if '/review' in path:
                if method == 'POST':
                    body_data = json.loads(event.get('body', '{}'))
                    cur.execute(
                        """INSERT INTO marketplace_reviews (item_id, user_id, rating, comment)
                           VALUES (%s, %s, %s, %s) RETURNING *""",
                        (body_data['item_id'], body_data['user_id'], body_data['rating'], body_data.get('comment'))
                    )
                    result = cur.fetchone()
                    cur.execute("SELECT AVG(rating)::DECIMAL(3,2) as avg FROM marketplace_reviews WHERE item_id = %s", (body_data['item_id'],))
                    avg = cur.fetchone()
                    cur.execute("UPDATE marketplace_items SET rating = %s WHERE id = %s", (avg['avg'], body_data['item_id']))
                    conn.commit()
                    cur.close()
                    conn.close()
                    return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
                
                if method == 'GET':
                    item_id = (event.get('queryStringParameters') or {}).get('item_id')
                    cur.execute("SELECT * FROM marketplace_reviews WHERE item_id = %s ORDER BY created_at DESC", (item_id,))
                    reviews = cur.fetchall()
                    cur.close()
                    conn.close()
                    return {'statusCode': 200, 'headers': headers, 'body': json.dumps([dict(r) for r in reviews], default=str), 'isBase64Encoded': False}
            
            if method == 'POST':
                body_data = json.loads(event.get('body', '{}'))
                cur.execute(
                    """INSERT INTO marketplace_items (seller_id, title, description, category, item_type, price)
                       VALUES (%s, %s, %s, %s, %s, %s) RETURNING *""",
                    (body_data['seller_id'], body_data['title'], body_data.get('description'), 
                     body_data['category'], body_data['item_type'], body_data['price'])
                )
                result = cur.fetchone()
                conn.commit()
                cur.close()
                conn.close()
                return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
            
            if method == 'GET':
                params = event.get('queryStringParameters') or {}
                item_id = params.get('item_id')
                category = params.get('category')
                search = params.get('search', '')
                limit = int(params.get('limit', 50))
                
                if item_id:
                    cur.execute("SELECT * FROM marketplace_items WHERE id = %s", (item_id,))
                    item = cur.fetchone()
                    if item:
                        cur.execute("UPDATE marketplace_items SET views_count = views_count + 1 WHERE id = %s", (item_id,))
                        conn.commit()
                    cur.close()
                    conn.close()
                    return {'statusCode': 200 if item else 404, 'headers': headers, 
                           'body': json.dumps(dict(item) if item else {'error': 'Not found'}, default=str), 'isBase64Encoded': False}
                
                query = "SELECT * FROM marketplace_items WHERE is_active = TRUE"
                query_params = []
                if category:
                    query += " AND category = %s"
                    query_params.append(category)
                if search:
                    query += " AND (title ILIKE %s OR description ILIKE %s)"
                    query_params.extend([f'%{search}%', f'%{search}%'])
                query += " ORDER BY created_at DESC LIMIT %s"
                query_params.append(limit)
                
                cur.execute(query, query_params)
                items = cur.fetchall()
                cur.close()
                conn.close()
                return {'statusCode': 200, 'headers': headers, 'body': json.dumps([dict(i) for i in items], default=str), 'isBase64Encoded': False}
        
        # ========== EXCHANGE ROUTES ==========
        if '/exchange' in path:
            if '/services' in path:
                if method == 'POST':
                    body_data = json.loads(event.get('body', '{}'))
                    cur.execute(
                        """INSERT INTO exchange_services (freelancer_id, title, description, category, price)
                           VALUES (%s, %s, %s, %s, %s) RETURNING *""",
                        (body_data['freelancer_id'], body_data['title'], body_data['description'], 
                         body_data['category'], body_data['price'])
                    )
                    result = cur.fetchone()
                    conn.commit()
                    cur.close()
                    conn.close()
                    return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
                
                if method == 'GET':
                    params = event.get('queryStringParameters') or {}
                    freelancer_id = params.get('freelancer_id')
                    category = params.get('category')
                    query = "SELECT * FROM exchange_services WHERE is_active = TRUE"
                    query_params = []
                    if freelancer_id:
                        query += " AND freelancer_id = %s"
                        query_params.append(freelancer_id)
                    if category:
                        query += " AND category = %s"
                        query_params.append(category)
                    query += " ORDER BY created_at DESC LIMIT 50"
                    cur.execute(query, query_params)
                    services = cur.fetchall()
                    cur.close()
                    conn.close()
                    return {'statusCode': 200, 'headers': headers, 'body': json.dumps([dict(s) for s in services], default=str), 'isBase64Encoded': False}
            
            if '/proposals' in path:
                if method == 'POST':
                    body_data = json.loads(event.get('body', '{}'))
                    cur.execute(
                        """INSERT INTO exchange_proposals (order_id, freelancer_id, price, message)
                           VALUES (%s, %s, %s, %s) RETURNING *""",
                        (body_data['order_id'], body_data['freelancer_id'], body_data['price'], body_data['message'])
                    )
                    result = cur.fetchone()
                    conn.commit()
                    cur.close()
                    conn.close()
                    return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
                
                if method == 'GET':
                    params = event.get('queryStringParameters') or {}
                    order_id = params.get('order_id')
                    if order_id:
                        cur.execute("SELECT * FROM exchange_proposals WHERE order_id = %s", (order_id,))
                        proposals = cur.fetchall()
                        cur.close()
                        conn.close()
                        return {'statusCode': 200, 'headers': headers, 'body': json.dumps([dict(p) for p in proposals], default=str), 'isBase64Encoded': False}
            
            if method == 'POST':
                body_data = json.loads(event.get('body', '{}'))
                cur.execute(
                    """INSERT INTO exchange_orders (client_id, title, description, category, budget_min, budget_max)
                       VALUES (%s, %s, %s, %s, %s, %s) RETURNING *""",
                    (body_data['client_id'], body_data['title'], body_data['description'], 
                     body_data['category'], body_data.get('budget_min'), body_data.get('budget_max'))
                )
                result = cur.fetchone()
                conn.commit()
                cur.close()
                conn.close()
                return {'statusCode': 201, 'headers': headers, 'body': json.dumps(dict(result), default=str), 'isBase64Encoded': False}
            
            if method == 'GET':
                params = event.get('queryStringParameters') or {}
                order_id = params.get('order_id')
                status = params.get('status', 'open')
                
                if order_id:
                    cur.execute("SELECT * FROM exchange_orders WHERE id = %s", (order_id,))
                    order = cur.fetchone()
                    cur.close()
                    conn.close()
                    return {'statusCode': 200 if order else 404, 'headers': headers, 
                           'body': json.dumps(dict(order) if order else {'error': 'Not found'}, default=str), 'isBase64Encoded': False}
                
                cur.execute("SELECT * FROM exchange_orders WHERE status = %s ORDER BY created_at DESC LIMIT 50", (status,))
                orders = cur.fetchall()
                cur.close()
                conn.close()
                return {'statusCode': 200, 'headers': headers, 'body': json.dumps([dict(o) for o in orders], default=str), 'isBase64Encoded': False}
        
        # ========== BLOCKS ROUTES (ORIGINAL) ==========
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