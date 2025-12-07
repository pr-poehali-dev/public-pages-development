import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';

const AIChat = () => {
  const [activeMode, setActiveMode] = useState<string>('universal');
  const [message, setMessage] = useState('');

  const modes = [
    { id: 'universal', name: 'Универсальный', icon: 'Bot', color: 'bg-primary' },
    { id: 'site', name: 'Помощь с сайтом', icon: 'Globe', color: 'bg-secondary' },
    { id: 'ads', name: 'Консультант по рекламе', icon: 'Megaphone', color: 'bg-orange-500' },
    { id: 'accountant', name: 'Бухгалтер', icon: 'Calculator', color: 'bg-green-500' }
  ];

  const chatHistory = [
    {
      role: 'assistant',
      content: 'Здравствуйте! Я ваш AI-помощник. Могу помочь с созданием сайтов, настройкой рекламы, бухгалтерией и другими вопросами бизнеса. Чем могу быть полезен?',
      time: '10:30'
    },
    {
      role: 'user',
      content: 'Как мне настроить рекламную кампанию в Яндекс.Директ для моего интернет-магазина?',
      time: '10:32'
    },
    {
      role: 'assistant',
      content: 'Отличный вопрос! Для настройки эффективной кампании в Яндекс.Директ для интернет-магазина рекомендую следующие шаги:\n\n1. **Определите целевую аудиторию**: возраст, интересы, регион\n2. **Соберите семантику**: используйте Wordstat для подбора ключевых слов\n3. **Создайте привлекательные объявления**: УТП + призыв к действию\n4. **Настройте отслеживание конверсий**: установите Метрику\n5. **Начните с умеренного бюджета**: ₽500-1000/день для тестирования\n\nХотите, чтобы я помог настроить конкретную кампанию?',
      time: '10:33'
    }
  ];

  const quickActions = [
    'Создать сайт по описанию',
    'Проанализировать мои расходы',
    'Идеи для рекламы',
    'Подсказать по налогам',
    'Оптимизировать конверсию',
    'Составить контент-план'
  ];

  return (
    <DashboardLayout>
      <div className="flex gap-6 h-[calc(100vh-4rem)]">
        <Card className="w-80 flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="Bot" size={20} />
              Режимы работы
            </h2>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-3">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`w-full p-4 border rounded-lg transition-all text-left ${
                    activeMode === mode.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${mode.color} flex items-center justify-center`}>
                      <Icon name={mode.icon} size={20} className="text-white" />
                    </div>
                    <span className="font-medium">{mode.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Icon name="Download" className="mr-2" size={18} />
              Экспорт беседы
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Icon name="Trash2" className="mr-2" size={18} />
              Очистить историю
            </Button>
          </div>
        </Card>

        <Card className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${modes.find(m => m.id === activeMode)?.color} flex items-center justify-center`}>
                  <Icon name={modes.find(m => m.id === activeMode)?.icon || 'Bot'} size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-semibold">{modes.find(m => m.id === activeMode)?.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Онлайн</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Plus" className="mr-2" size={16} />
                Новый чат
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6 max-w-3xl mx-auto">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' 
                      ? 'bg-primary' 
                      : 'bg-gradient-to-br from-primary to-secondary'
                  }`}>
                    <Icon 
                      name={msg.role === 'user' ? 'User' : 'Bot'} 
                      size={20} 
                      className="text-white" 
                    />
                  </div>
                  <div className={`flex-1 ${msg.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-4 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-muted'
                    }`}>
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border space-y-3">
            <div className="flex gap-2 flex-wrap">
              {quickActions.map((action, index) => (
                <Button key={index} variant="outline" size="sm">
                  {action}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Icon name="Paperclip" size={18} />
              </Button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Напишите сообщение..."
                className="flex-1 p-3 border border-border rounded-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setMessage('');
                  }
                }}
              />
              <Button>
                <Icon name="Send" size={18} />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              AI может ошибаться. Проверяйте важную информацию.
            </p>
          </div>
        </Card>

        <Card className="w-80 flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="Clock" size={20} />
              История чатов
            </h2>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-3">
              <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">Настройка рекламы</h4>
                  <Badge variant="secondary">Сегодня</Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Как настроить рекламную кампанию в Яндекс.Директ...
                </p>
              </Card>

              <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">Создание лендинга</h4>
                  <Badge variant="secondary">Вчера</Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Помоги создать лендинг для продажи курсов...
                </p>
              </Card>

              <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">Вопросы по налогам</h4>
                  <Badge variant="secondary">3 дня назад</Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Какую систему налогообложения выбрать...
                </p>
              </Card>

              <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">SEO оптимизация</h4>
                  <Badge variant="secondary">Неделю назад</Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Как улучшить позиции сайта в поиске...
                </p>
              </Card>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AIChat;
