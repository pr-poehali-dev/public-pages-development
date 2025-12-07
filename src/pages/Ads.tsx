import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Ads = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);

  const campaigns = [
    {
      id: 1,
      name: 'Лендинг услуг - Контекст',
      status: 'active',
      budget: 15000,
      spent: 8450,
      clicks: 1234,
      conversions: 52,
      ctr: 3.8
    },
    {
      id: 2,
      name: 'Товары - Таргет VK',
      status: 'active',
      budget: 10000,
      spent: 10000,
      clicks: 890,
      conversions: 38,
      ctr: 4.2
    },
    {
      id: 3,
      name: 'Блог - Продвижение',
      status: 'paused',
      budget: 5000,
      spent: 2100,
      clicks: 456,
      conversions: 12,
      ctr: 2.9
    }
  ];

  const packages = [
    {
      name: 'Базовый',
      price: 15000,
      features: [
        'Настройка 1 рекламной кампании',
        'Яндекс.Директ или VK Реклама',
        'Базовая аналитика',
        'Консультация 1 час'
      ]
    },
    {
      name: 'Стандарт',
      price: 35000,
      popular: true,
      features: [
        'Настройка 3 кампаний',
        'Все площадки',
        'A/B тестирование',
        'Еженедельные отчеты',
        'Консультации 3 часа'
      ]
    },
    {
      name: 'Премиум',
      price: 75000,
      features: [
        'Безлимит кампаний',
        'Стратегия продвижения',
        'Ежедневная оптимизация',
        'Персональный менеджер',
        'Полное сопровождение'
      ]
    }
  ];

  const agents = [
    {
      id: 1,
      name: 'Анна Смирнова',
      role: 'Специалист по контекстной рекламе',
      campaigns: 3,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Дмитрий Козлов',
      role: 'Таргетолог VK/Telegram',
      campaigns: 2,
      rating: 4.8
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Реклама и продвижение</h1>
            <p className="text-muted-foreground">Управляйте рекламными кампаниями</p>
          </div>
          <Button>
            <Icon name="Plus" className="mr-2" size={18} />
            Создать кампанию
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <span className="text-sm font-medium text-green-600">+15%</span>
              </div>
              <div className="text-3xl font-bold mb-1">₽18,550</div>
              <div className="text-sm text-muted-foreground">Бюджет потрачено</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="MousePointerClick" size={24} className="text-secondary" />
                <span className="text-sm font-medium text-green-600">+8%</span>
              </div>
              <div className="text-3xl font-bold mb-1">2,580</div>
              <div className="text-sm text-muted-foreground">Кликов</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Target" size={24} className="text-green-500" />
                <span className="text-sm font-medium text-green-600">+12%</span>
              </div>
              <div className="text-3xl font-bold mb-1">102</div>
              <div className="text-sm text-muted-foreground">Конверсий</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Percent" size={24} className="text-orange-500" />
                <span className="text-sm font-medium text-green-600">+0.5%</span>
              </div>
              <div className="text-3xl font-bold mb-1">3.8%</div>
              <div className="text-sm text-muted-foreground">CTR</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="campaigns">
          <TabsList>
            <TabsTrigger value="campaigns">Мои кампании</TabsTrigger>
            <TabsTrigger value="orders">Заказать под ключ</TabsTrigger>
            <TabsTrigger value="agents">Агенты</TabsTrigger>
            <TabsTrigger value="guides">Гайды</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{campaign.name}</h3>
                        <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                          {campaign.status === 'active' ? 'Активна' : 'На паузе'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>Бюджет: ₽{campaign.budget.toLocaleString()}</span>
                        <span>Потрачено: ₽{campaign.spent.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="BarChart" size={16} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Settings" size={16} />
                      </Button>
                      <Button variant="outline" size="sm">
                        {campaign.status === 'active' ? (
                          <Icon name="Pause" size={16} />
                        ) : (
                          <Icon name="Play" size={16} />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Progress value={(campaign.spent / campaign.budget) * 100} className="mb-4" />

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold">{campaign.clicks}</div>
                      <div className="text-sm text-muted-foreground">Кликов</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{campaign.conversions}</div>
                      <div className="text-sm text-muted-foreground">Конверсий</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{campaign.ctr}%</div>
                      <div className="text-sm text-muted-foreground">CTR</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card key={index} className={pkg.popular ? 'border-2 border-primary' : ''}>
                  {pkg.popular && (
                    <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                      Популярный
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>
                      <div className="text-3xl font-bold text-foreground mt-2">
                        ₽{pkg.price.toLocaleString()}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
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

            <Card>
              <CardHeader>
                <CardTitle>Нужна индивидуальная стратегия?</CardTitle>
                <CardDescription>Оставьте заявку и наш специалист свяжется с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Имя</Label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label>Телефон</Label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Описание задачи</Label>
                    <textarea
                      className="w-full p-2 border border-border rounded-md resize-none"
                      rows={3}
                      placeholder="Расскажите о вашем проекте"
                    />
                  </div>
                  <Button className="col-span-2">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agents" className="space-y-4">
            {agents.map((agent) => (
              <Card key={agent.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name="User" size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{agent.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{agent.role}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Briefcase" size={14} className="text-primary" />
                            <span>{agent.campaigns} кампаний</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={14} className="text-yellow-500" />
                            <span>{agent.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Icon name="MessageSquare" className="mr-2" size={16} />
                      Написать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="guides" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="BookOpen" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Основы контекстной рекламы</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Научитесь настраивать эффективные кампании в Яндекс.Директ
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">15 мин чтения</span>
                    <Icon name="ArrowRight" size={18} className="text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name="Target" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Таргетированная реклама ВКонтакте</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Как настроить таргет и получить первых клиентов
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">20 мин чтения</span>
                    <Icon name="ArrowRight" size={18} className="text-secondary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Оптимизация конверсий</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Повысьте эффективность рекламы в 2 раза
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">25 мин чтения</span>
                    <Icon name="ArrowRight" size={18} className="text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    <Icon name="BarChart" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Аналитика рекламы</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Читайте метрики правильно и принимайте решения
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">18 мин чтения</span>
                    <Icon name="ArrowRight" size={18} className="text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Ads;
