import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const BotEditor = () => {
  const navigate = useNavigate();
  const [botName, setBotName] = useState('Новый бот');
  const [isEditingName, setIsEditingName] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>('msg-1');

  const nodeLibrary = [
    {
      category: 'Сообщения',
      nodes: [
        { id: 'message', name: 'Сообщение', icon: 'MessageSquare', color: 'bg-blue-500' },
        { id: 'buttons', name: 'Кнопки', icon: 'Square', color: 'bg-blue-600' },
        { id: 'media', name: 'Медиа', icon: 'Image', color: 'bg-purple-500' }
      ]
    },
    {
      category: 'Логика',
      nodes: [
        { id: 'condition', name: 'Условие', icon: 'GitBranch', color: 'bg-orange-500' },
        { id: 'delay', name: 'Задержка', icon: 'Clock', color: 'bg-yellow-500' },
        { id: 'menu', name: 'Меню', icon: 'List', color: 'bg-green-500' }
      ]
    },
    {
      category: 'Данные',
      nodes: [
        { id: 'api', name: 'API-вызов', icon: 'Webhook', color: 'bg-indigo-500' },
        { id: 'payment', name: 'Платеж', icon: 'CreditCard', color: 'bg-emerald-500' },
        { id: 'products', name: 'Товары', icon: 'ShoppingBag', color: 'bg-pink-500' }
      ]
    },
    {
      category: 'Контент',
      nodes: [
        { id: 'gallery', name: 'Галерея', icon: 'Images', color: 'bg-purple-600' },
        { id: 'video', name: 'Видео/Аудио', icon: 'Video', color: 'bg-red-500' },
        { id: 'file', name: 'Файл', icon: 'FileText', color: 'bg-gray-500' },
        { id: 'note', name: 'Заметка', icon: 'StickyNote', color: 'bg-yellow-400' }
      ]
    }
  ];

  const canvasNodes = [
    { id: 'msg-1', type: 'message', label: 'Приветствие', x: 100, y: 100, color: 'bg-blue-500' },
    { id: 'btn-1', type: 'buttons', label: 'Выбор действия', x: 300, y: 100, color: 'bg-blue-600' },
    { id: 'cond-1', type: 'condition', label: 'Проверка', x: 500, y: 100, color: 'bg-orange-500' }
  ];

  const actions = [
    { category: 'Метки и поля', items: ['Добавить метку', 'Удалить метку', 'Изменить переменную'] },
    { category: 'Системные', items: ['Остановить бота', 'Запустить сценарий', 'Отправить email'] },
    { category: 'AI', items: ['Запрос к ChatGPT', 'Генерация текста', 'Анализ сообщения'] },
    { category: 'Интеграции', items: ['GetCourse', 'Google Sheets', 'AmoCRM', 'Платежи'] }
  ];

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="h-16 border-b border-border bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
            <Icon name="ArrowLeft" size={20} />
          </Button>

          {isEditingName ? (
            <Input
              value={botName}
              onChange={(e) => setBotName(e.target.value)}
              onBlur={() => setIsEditingName(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsEditingName(false)}
              className="w-64"
              autoFocus
            />
          ) : (
            <button
              onClick={() => setIsEditingName(true)}
              className="text-lg font-semibold hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="Bot" size={20} />
              {botName}
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Icon name="Play" className="mr-2" size={16} />
            Тестировать
          </Button>
          <Button size="sm">
            <Icon name="Save" className="mr-2" size={16} />
            Сохранить
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Icon name="Rocket" className="mr-2" size={16} />
            Запустить
          </Button>

          <Button variant="ghost" size="icon">
            <Icon name="Settings" size={20} />
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-64 border-r border-border bg-white flex flex-col">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-sm mb-2">Библиотека узлов</h3>
            <Input placeholder="Поиск..." className="h-8 text-sm" />
          </div>

          <ScrollArea className="flex-1">
            <div className="p-3 space-y-4">
              {nodeLibrary.map((category) => (
                <div key={category.category}>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-2 px-2">
                    {category.category}
                  </h4>
                  <div className="space-y-1">
                    {category.nodes.map((node) => (
                      <button
                        key={node.id}
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData('nodeType', node.id)}
                        className="w-full p-2 rounded-lg hover:bg-muted/50 transition-colors text-left flex items-center gap-2 group cursor-move"
                      >
                        <div className={`w-8 h-8 rounded ${node.color} flex items-center justify-center text-white`}>
                          <Icon name={node.icon} size={14} />
                        </div>
                        <span className="text-sm">{node.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col bg-muted/30">
          <div className="p-3 border-b border-border bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Icon name="ZoomIn" size={16} />
              </Button>
              <span className="text-sm text-muted-foreground">100%</span>
              <Button variant="ghost" size="sm">
                <Icon name="ZoomOut" size={16} />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Icon name="Undo" size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Redo" size={16} />
              </Button>
            </div>

            <Button variant="ghost" size="sm">
              <Icon name="Grid3x3" size={16} className="mr-2" />
              Сетка
            </Button>
          </div>

          <div className="flex-1 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const nodeType = e.dataTransfer.getData('nodeType');
                console.log('Dropped node type:', nodeType);
              }}
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
                  </marker>
                </defs>
                
                <line
                  x1="220"
                  y1="150"
                  x2="300"
                  y2="150"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <line
                  x1="420"
                  y1="150"
                  x2="500"
                  y2="150"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              </svg>

              {canvasNodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`absolute w-32 p-3 rounded-lg bg-white border-2 transition-all hover:shadow-lg ${
                    selectedNode === node.id ? 'border-primary shadow-lg' : 'border-border'
                  }`}
                  style={{ left: node.x, top: node.y }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded ${node.color} flex items-center justify-center text-white`}>
                      <Icon name="MessageSquare" size={12} />
                    </div>
                    <span className="text-xs font-semibold truncate">{node.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                  </div>
                </button>
              ))}
            </div>

            <div className="absolute bottom-4 right-4 w-48 h-32 bg-white border-2 border-border rounded-lg overflow-hidden">
              <div className="text-xs font-semibold p-2 bg-muted border-b border-border">Мини-карта</div>
              <div className="p-2 bg-muted/30">
                <div className="w-2 h-2 bg-primary rounded-sm" style={{ marginLeft: '10px', marginTop: '10px' }} />
                <div className="w-2 h-2 bg-primary rounded-sm" style={{ marginLeft: '30px', marginTop: '-8px' }} />
                <div className="w-2 h-2 bg-primary rounded-sm" style={{ marginLeft: '50px', marginTop: '-8px' }} />
              </div>
            </div>
          </div>
        </main>

        <aside className="w-80 border-l border-border bg-white flex flex-col">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold">Свойства узла</h3>
            {selectedNode && <p className="text-xs text-muted-foreground mt-1">{selectedNode}</p>}
          </div>

          {selectedNode ? (
            <Tabs defaultValue="content" className="flex-1 flex flex-col">
              <div className="px-3 pt-3">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="content">Контент</TabsTrigger>
                  <TabsTrigger value="actions">Действия</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="content" className="flex-1 m-0">
                <ScrollArea className="h-full">
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label>Текст сообщения</Label>
                      <textarea
                        className="w-full p-2 border border-border rounded-md resize-none"
                        rows={4}
                        placeholder="Привет! 👋 Как я могу помочь?"
                        defaultValue="Добро пожаловать! Выберите действие:"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Кнопки</Label>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Input placeholder="Текст кнопки" defaultValue="Заказать" />
                          <Button variant="outline" size="icon">
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="Текст кнопки" defaultValue="Поддержка" />
                          <Button variant="outline" size="icon">
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          <Icon name="Plus" className="mr-2" size={14} />
                          Добавить кнопку
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Медиа</Label>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Icon name="Upload" className="mr-2" size={14} />
                        Загрузить изображение
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="actions" className="flex-1 m-0">
                <ScrollArea className="h-full">
                  <div className="p-4">
                    <div className="space-y-3 mb-4">
                      <h4 className="text-sm font-semibold">Action Picker</h4>
                      <p className="text-xs text-muted-foreground">
                        Добавьте действия, которые выполнятся при срабатывании узла
                      </p>
                    </div>

                    {actions.map((category) => (
                      <div key={category.category} className="mb-4">
                        <h5 className="text-xs font-semibold text-muted-foreground mb-2">
                          {category.category}
                        </h5>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <button
                              key={item}
                              className="w-full p-2 text-left text-sm rounded hover:bg-muted/50 transition-colors"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}

                    <Button variant="outline" size="sm" className="w-full mt-4">
                      <Icon name="Plus" className="mr-2" size={14} />
                      Добавить действие
                    </Button>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-center text-muted-foreground">
              <div>
                <Icon name="MousePointerClick" size={48} className="mx-auto mb-4 opacity-20" />
                <p>Выберите узел для редактирования</p>
              </div>
            </div>
          )}
        </aside>
      </div>

      <footer className="h-12 border-t border-border bg-white">
        <Tabs defaultValue="triggers" className="h-full">
          <div className="flex items-center h-full px-4">
            <TabsList>
              <TabsTrigger value="triggers">Триггеры</TabsTrigger>
              <TabsTrigger value="variables">Переменные</TabsTrigger>
              <TabsTrigger value="integrations">Интеграции</TabsTrigger>
              <TabsTrigger value="logs">Логи</TabsTrigger>
            </TabsList>

            <div className="ml-auto flex items-center gap-3">
              <Badge className="bg-green-100 text-green-700">
                <Icon name="Send" size={12} className="mr-1" />
                Telegram подключен
              </Badge>
              <Badge className="bg-gray-100 text-gray-700">
                <Icon name="MessageCircle" size={12} className="mr-1" />
                WhatsApp
              </Badge>
            </div>
          </div>
        </Tabs>
      </footer>
    </div>
  );
};

export default BotEditor;
