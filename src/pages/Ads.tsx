import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Ads = () => {
  const navigate = useNavigate();
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const campaigns = [
    {
      id: '1',
      name: 'Летняя распродажа',
      platform: 'VK Реклама',
      platformIcon: 'MessageSquare',
      status: 'active',
      budget: { spent: 3500, total: 10000 },
      metrics: { impressions: 125000, clicks: 3200, conversions: 85, roi: 245 },
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: '2',
      name: 'Таргет на Москву',
      platform: 'Яндекс.Директ',
      platformIcon: 'Search',
      status: 'paused',
      budget: { spent: 5000, total: 15000 },
      metrics: { impressions: 89000, clicks: 2100, conversions: 45, roi: 180 },
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: '3',
      name: 'Ретаргетинг',
      platform: 'Google Ads',
      platformIcon: 'Globe',
      status: 'completed',
      budget: { spent: 20000, total: 20000 },
      metrics: { impressions: 350000, clicks: 8900, conversions: 210, roi: 315 },
      statusColor: 'bg-gray-100 text-gray-700'
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Базовый',
      price: 10000,
      features: [
        'Настройка 1 рекламной платформы',
        'Создание 3 объявлений',
        'Базовая аналитика',
        'Поддержка 7 дней'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Стандарт',
      price: 25000,
      features: [
        'Настройка 2-3 платформ',
        'Создание 10 объявлений',
        'Расширенная аналитика',
        'A/B тестирование',
        'Поддержка 30 дней'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: 50000,
      features: [
        'Полное продвижение',
        'Безлимит объявлений',
        'AI-оптимизация',
        'Создание контента',
        'Персональный менеджер',
        'Поддержка 90 дней'
      ],
      popular: false
    }
  ];

  const agents = [
    {
      id: '1',
      name: 'Марк Соколов',
      photo: '👨‍💼',
      rating: 4.9,
      reviews: 127,
      specialty: 'Контекстная реклама',
      activeTasks: 3,
      status: 'online'
    },
    {
      id: '2',
      name: 'Анна Петрова',
      photo: '👩‍💻',
      rating: 4.8,
      reviews: 98,
      specialty: 'SMM и таргет',
      activeTasks: 2,
      status: 'online'
    },
    {
      id: '3',
      name: 'Дмитрий Волков',
      photo: '👨‍🎨',
      rating: 4.7,
      reviews: 85,
      specialty: 'Креативы и баннеры',
      activeTasks: 1,
      status: 'offline'
    }
  ];

  const guides = [
    {
      id: '1',
      title: 'Как настроить рекламу в ВК',
      type: 'article',
      duration: '10 мин',
      views: 1234,
      icon: 'FileText'
    },
    {
      id: '2',
      title: 'Настройка Google Ads с нуля',
      type: 'video',
      duration: '25 мин',
      views: 3421,
      icon: 'Video'
    },
    {
      id: '3',
      title: 'Таргетинг для начинающих',
      type: 'article',
      duration: '15 мин',
      views: 2156,
      icon: 'FileText'
    },
    {
      id: '4',
      title: 'Чек-лист запуска рекламы',
      type: 'checklist',
      duration: '5 мин',
      views: 987,
      icon: 'CheckSquare'
    }
  ];

  const chatMessages = [
    { id: '1', sender: 'agent', text: 'Добрый день! Я изучил ваш проект. Предлагаю начать с VK рекламы.', time: '10:30' },
    { id: '2', sender: 'me', text: 'Здравствуйте! Какой бюджет потребуется?', time: '10:32' },
    { id: '3', sender: 'agent', text: 'Для старта рекомендую 15-20 тысяч рублей. Это позволит протестировать аудиторию.', time: '10:35' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Реклама и продвижение</h1>
            <p className="text-muted-foreground">Управление рекламными кампаниями</p>
          </div>
          <Button onClick={() => {}}>
            <Icon name="Plus" className="mr-2" size={18} />
            Создать кампанию
          </Button>
        </div>

        <Tabs defaultValue="campaigns">
          <TabsList>
            <TabsTrigger value="campaigns">Мои кампании</TabsTrigger>
            <TabsTrigger value="packages">Заказы под ключ</TabsTrigger>
            <TabsTrigger value="agents">Агенты</TabsTrigger>
            <TabsTrigger value="guides">Гайды</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Всего потрачено</span>
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold">₽28,500</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Общий ROI</span>
                    <Icon name="Target" size={20} className="text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600">247%</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Конверсии</span>
                    <Icon name="MousePointerClick" size={20} className="text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold">340</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name={campaign.platformIcon} size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{campaign.name}</CardTitle>
                          <CardDescription>{campaign.platform}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={campaign.statusColor}>
                          {campaign.status === 'active' && 'Активна'}
                          {campaign.status === 'paused' && 'На паузе'}
                          {campaign.status === 'completed' && 'Завершена'}
                        </Badge>
                        <Button variant="ghost" size="icon">
                          <Icon name="MoreVertical" size={18} />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Бюджет</span>
                          <span className="font-medium">
                            ₽{campaign.budget.spent.toLocaleString()} / ₽{campaign.budget.total.toLocaleString()}
                          </span>
                        </div>
                        <Progress value={(campaign.budget.spent / campaign.budget.total) * 100} />
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Показы</div>
                          <div className="text-lg font-semibold">{campaign.metrics.impressions.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Клики</div>
                          <div className="text-lg font-semibold">{campaign.metrics.clicks.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Конверсии</div>
                          <div className="text-lg font-semibold">{campaign.metrics.conversions}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">ROI</div>
                          <div className="text-lg font-semibold text-green-600">{campaign.metrics.roi}%</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" className="mr-2" size={14} />
                          Редактировать
                        </Button>
                        {campaign.status === 'active' ? (
                          <Button variant="outline" size="sm">
                            <Icon name="Pause" className="mr-2" size={14} />
                            Остановить
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm">
                            <Icon name="Play" className="mr-2" size={14} />
                            Запустить
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Icon name="Trash2" className="mr-2" size={14} />
                          Удалить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packages" className="space-y-6 mt-6">
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle>Заказать продвижение под ключ</CardTitle>
                <CardDescription>
                  Профессиональные маркетологи настроят и запустят рекламу за вас
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative ${pkg.popular ? 'border-2 border-primary shadow-lg' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold mt-2">
                      ₽{pkg.price.toLocaleString()}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Ваши агенты</CardTitle>
                <CardDescription>Профессиональные маркетологи, работающие над вашими проектами</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {agents.map((agent) => (
                  <Card
                    key={agent.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedAgent === agent.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedAgent(agent.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl">
                            {agent.photo}
                          </div>
                          {agent.status === 'online' && (
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{agent.name}</h4>
                          <p className="text-sm text-muted-foreground">{agent.specialty}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-medium">{agent.rating}</span>
                              <span className="text-xs text-muted-foreground">({agent.reviews})</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {agent.activeTasks} активных задач
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm">
                          <Icon name="MessageSquare" className="mr-2" size={14} />
                          Чат
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedAgent && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageSquare" size={20} />
                      Чат с агентом
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-4 h-96 overflow-y-auto">
                      {chatMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              msg.sender === 'me'
                                ? 'bg-primary text-white'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">{msg.text}</p>
                            <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Введите сообщение..." />
                      <Button size="icon">
                        <Icon name="Send" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Обучающие материалы</CardTitle>
                <CardDescription>Пошаговые инструкции и видео-уроки по настройке рекламы</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide) => (
                <Card key={guide.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        guide.type === 'video' ? 'bg-red-100' : guide.type === 'checklist' ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        <Icon
                          name={guide.icon}
                          size={24}
                          className={
                            guide.type === 'video' ? 'text-red-600' : guide.type === 'checklist' ? 'text-green-600' : 'text-blue-600'
                          }
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{guide.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {guide.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {guide.views} просмотров
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          Открыть
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Ads;
