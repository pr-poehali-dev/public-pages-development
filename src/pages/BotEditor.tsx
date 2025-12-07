import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const BotEditor = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodeTypes = [
    {
      category: 'Сообщения',
      nodes: [
        { id: 'message', name: 'Текстовое сообщение', icon: 'MessageSquare', color: 'bg-blue-100 text-blue-600' },
        { id: 'image', name: 'Изображение', icon: 'Image', color: 'bg-purple-100 text-purple-600' },
        { id: 'buttons', name: 'Кнопки', icon: 'Square', color: 'bg-green-100 text-green-600' }
      ]
    },
    {
      category: 'Логика',
      nodes: [
        { id: 'condition', name: 'Условие', icon: 'GitBranch', color: 'bg-orange-100 text-orange-600' },
        { id: 'delay', name: 'Задержка', icon: 'Clock', color: 'bg-yellow-100 text-yellow-600' },
        { id: 'variable', name: 'Переменная', icon: 'Database', color: 'bg-pink-100 text-pink-600' }
      ]
    },
    {
      category: 'Интеграции',
      nodes: [
        { id: 'api', name: 'API запрос', icon: 'Webhook', color: 'bg-indigo-100 text-indigo-600' },
        { id: 'payment', name: 'Оплата', icon: 'CreditCard', color: 'bg-emerald-100 text-emerald-600' },
        { id: 'crm', name: 'CRM', icon: 'Users', color: 'bg-teal-100 text-teal-600' }
      ]
    }
  ];

  const messengers = [
    { id: 'telegram', name: 'Telegram', icon: 'Send', connected: true },
    { id: 'whatsapp', name: 'WhatsApp', icon: 'MessageCircle', connected: false },
    { id: 'vk', name: 'VK', icon: 'MessageSquare', connected: false }
  ];

  return (
    <DashboardLayout>
      <div className="flex gap-6 h-[calc(100vh-4rem)]">
        <Card className="w-80 flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="Box" size={20} />
              Узлы
            </h2>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-6">
              {nodeTypes.map((category) => (
                <div key={category.category}>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.nodes.map((node) => (
                      <button
                        key={node.id}
                        onClick={() => setSelectedNode(node.id)}
                        className="w-full p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left flex items-center gap-3 group"
                      >
                        <div className={`w-10 h-10 rounded ${node.color} flex items-center justify-center`}>
                          <Icon name={node.icon} size={20} />
                        </div>
                        <span className="text-sm font-medium">{node.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>

        <Card className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Input
                placeholder="Название бота"
                defaultValue="Новый бот"
                className="w-64"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Play" className="mr-2" size={16} />
                Тестировать
              </Button>
              <Button size="sm">
                <Icon name="Save" className="mr-2" size={16} />
                Сохранить
              </Button>
              <Button size="sm">
                <Icon name="Rocket" className="mr-2" size={16} />
                Запустить
              </Button>
            </div>
          </div>

          <div className="flex-1 bg-muted/20 p-8 overflow-auto relative">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            
            <div className="relative">
              <Card className="w-80 mx-auto p-6 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                    <Icon name="Bot" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Начальный узел</h3>
                  <p className="text-sm text-muted-foreground">
                    Перетащите узлы из панели слева, чтобы построить логику бота
                  </p>
                  <div className="flex justify-center gap-2 pt-4">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </Card>

              <div className="flex justify-center my-8">
                <div className="w-0.5 h-16 bg-border"></div>
              </div>

              <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <Icon name="MessageSquare" className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">Отправить сообщение</h4>
                  <p className="text-xs text-muted-foreground">
                    Отправка текста пользователю
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                    <Icon name="GitBranch" className="text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">Проверить условие</h4>
                  <p className="text-xs text-muted-foreground">
                    Разветвление логики
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                    <Icon name="CreditCard" className="text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">Принять оплату</h4>
                  <p className="text-xs text-muted-foreground">
                    Интеграция платежей
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-80 flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="Settings" size={20} />
              Настройки
            </h2>
          </div>

          <Tabs defaultValue="node" className="flex-1 flex flex-col">
            <TabsList className="mx-4 mt-4">
              <TabsTrigger value="node" className="flex-1">Узел</TabsTrigger>
              <TabsTrigger value="integrations" className="flex-1">Каналы</TabsTrigger>
            </TabsList>

            <ScrollArea className="flex-1">
              <TabsContent value="node" className="p-4 space-y-4">
                {selectedNode ? (
                  <>
                    <div className="space-y-2">
                      <Label>Тип узла</Label>
                      <Input value={selectedNode} disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>Текст сообщения</Label>
                      <textarea
                        className="w-full p-2 border border-border rounded-md resize-none"
                        rows={4}
                        placeholder="Введите текст для отправки"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Действие при ответе</Label>
                      <select className="w-full p-2 border border-border rounded-md">
                        <option>Перейти к следующему узлу</option>
                        <option>Сохранить в переменную</option>
                        <option>Отправить в CRM</option>
                      </select>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Icon name="Plus" className="mr-2" size={16} />
                      Добавить кнопку
                    </Button>
                  </>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <Icon name="MousePointerClick" size={32} className="mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Выберите узел для настройки</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="integrations" className="p-4 space-y-4">
                <div className="space-y-3">
                  {messengers.map((messenger) => (
                    <Card key={messenger.id} className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon name={messenger.icon} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{messenger.name}</div>
                            <div className={`text-xs ${messenger.connected ? 'text-green-600' : 'text-muted-foreground'}`}>
                              {messenger.connected ? 'Подключен' : 'Не подключен'}
                            </div>
                          </div>
                        </div>
                        {messenger.connected && (
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        )}
                      </div>
                      <Button 
                        variant={messenger.connected ? "outline" : "default"} 
                        size="sm" 
                        className="w-full"
                      >
                        {messenger.connected ? 'Настроить' : 'Подключить'}
                      </Button>
                    </Card>
                  ))}
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-semibold mb-3">Интеграции</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Database" className="mr-2" size={16} />
                      AmoCRM
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="CreditCard" className="mr-2" size={16} />
                      ЮKassa
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Webhook" className="mr-2" size={16} />
                      Webhook
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BotEditor;
