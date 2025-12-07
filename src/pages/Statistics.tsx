import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Statistics = () => {
  const [period, setPeriod] = useState('month');

  const summaryMetrics = [
    {
      title: 'Реклама',
      data: [
        { label: 'Бюджет', value: '₽50,000' },
        { label: 'Клики', value: '1,234' },
        { label: 'Конверсии', value: '45' },
        { label: 'ROI', value: '85%', highlight: true }
      ],
      icon: 'Megaphone',
      color: 'text-orange-600'
    },
    {
      title: 'Заинтересованность',
      data: [
        { label: 'Просмотры', value: '5,678' },
        { label: 'Переходы', value: '234' },
        { label: 'Время', value: '2:34' }
      ],
      icon: 'Eye',
      color: 'text-blue-600'
    },
    {
      title: 'Покупки/Продажи',
      data: [
        { label: 'Количество', value: '123' },
        { label: 'Сумма', value: '₽450,000' },
        { label: 'Средний чек', value: '₽3,659' }
      ],
      icon: 'ShoppingCart',
      color: 'text-green-600'
    },
    {
      title: 'Чистый доход',
      data: [
        { label: 'Доходы', value: '₽450,000' },
        { label: 'Расходы', value: '₽100,000' },
        { label: 'Прибыль', value: '₽350,000', highlight: true }
      ],
      icon: 'Wallet',
      color: 'text-emerald-600'
    }
  ];

  const topProducts = [
    { name: 'Органический кофе Арабика', sales: 89, revenue: 79210 },
    { name: 'Набор чая премиум', sales: 67, revenue: 86430 },
    { name: 'Кофейные капсулы', sales: 124, revenue: 55800 }
  ];

  const bankConnections = [
    { name: 'Тинькофф Бизнес', connected: true, balance: 245000 },
    { name: 'Сбербанк', connected: true, balance: 128000 },
    { name: 'Альфа-Банк', connected: false, balance: 0 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Статистика</h1>
            <p className="text-muted-foreground">Единая панель аналитики бизнеса</p>
          </div>
          <div className="flex gap-2">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Сегодня</SelectItem>
                <SelectItem value="week">Неделя</SelectItem>
                <SelectItem value="month">Месяц</SelectItem>
                <SelectItem value="year">Год</SelectItem>
                <SelectItem value="custom">Свой период</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Icon name="Download" className="mr-2" size={16} />
              PDF
            </Button>
            <Button variant="outline">
              <Icon name="FileSpreadsheet" className="mr-2" size={16} />
              Excel
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <Icon name={metric.icon} size={20} className={metric.color} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {metric.data.map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                      <span className={`text-sm font-semibold ${item.highlight ? 'text-green-600' : ''}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="ads">Реклама</TabsTrigger>
            <TabsTrigger value="traffic">Заинтересованность</TabsTrigger>
            <TabsTrigger value="sales">Покупки</TabsTrigger>
            <TabsTrigger value="finance">Финансы</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Доходы и расходы</CardTitle>
                  <CardDescription>Динамика за последние 30 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <Icon name="TrendingUp" size={48} className="mx-auto mb-2 opacity-20" />
                      <p className="text-sm">Линейный график</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Конверсии</CardTitle>
                  <CardDescription>Сравнение по источникам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <Icon name="BarChart3" size={48} className="mx-auto mb-2 opacity-20" />
                      <p className="text-sm">Столбчатая диаграмма</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Источники трафика</CardTitle>
                  <CardDescription>Распределение посетителей</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <Icon name="PieChart" size={48} className="mx-auto mb-2 opacity-20" />
                      <p className="text-sm">Круговая диаграмма</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Тепловая карта активности</CardTitle>
                  <CardDescription>Пиковые часы посещений</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <Icon name="Grid3x3" size={48} className="mx-auto mb-2 opacity-20" />
                      <p className="text-sm">Тепловая карта</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ads" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Детальная статистика по кампаниям</CardTitle>
                <CardDescription>Сравнение эффективности рекламных платформ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { platform: 'VK Реклама', budget: 15000, roi: 245, conversions: 85 },
                    { platform: 'Яндекс.Директ', budget: 20000, roi: 180, conversions: 45 },
                    { platform: 'Google Ads', budget: 15000, roi: 315, conversions: 120 }
                  ].map((campaign, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{campaign.platform}</h4>
                        <div className="flex gap-4 text-sm">
                          <span className="text-muted-foreground">Бюджет: ₽{campaign.budget.toLocaleString()}</span>
                          <span className="text-muted-foreground">Конверсии: {campaign.conversions}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{campaign.roi}%</div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" className="text-blue-600" />
                  AI-рекомендации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-blue-600 mt-1" />
                    <span className="text-sm">Увеличьте бюджет Google Ads на 30% — прогноз роста ROI до 350%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-blue-600 mt-1" />
                    <span className="text-sm">Перенесите 5000₽ из VK в Яндекс.Директ для лучшей конверсии</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traffic" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>География посетителей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { city: 'Москва', visitors: 2340, percent: 45 },
                      { city: 'Санкт-Петербург', visitors: 1120, percent: 22 },
                      { city: 'Казань', visitors: 890, percent: 17 }
                    ].map((geo, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{geo.city}</span>
                          <span className="text-sm font-medium">{geo.visitors}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${geo.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Устройства</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { device: 'Desktop', icon: 'Monitor', percent: 45, color: 'bg-blue-500' },
                      { device: 'Mobile', icon: 'Smartphone', percent: 40, color: 'bg-green-500' },
                      { device: 'Tablet', icon: 'Tablet', percent: 15, color: 'bg-purple-500' }
                    ].map((dev, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Icon name={dev.icon} size={20} />
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">{dev.device}</span>
                            <span className="text-sm font-medium">{dev.percent}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className={`h-full ${dev.color}`} style={{ width: `${dev.percent}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Популярные страницы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { page: 'Главная', views: 3450 },
                      { page: 'Каталог', views: 2890 },
                      { page: 'О нас', views: 1230 },
                      { page: 'Контакты', views: 890 }
                    ].map((page, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm">{page.page}</span>
                        <Badge variant="outline">{page.views}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sales" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Топ продаваемых товаров</CardTitle>
                <CardDescription>За выбранный период</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{product.name}</h4>
                        <div className="text-sm text-muted-foreground">Продано: {product.sales} шт</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">₽{product.revenue.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Выручка</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Средний чек</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">₽3,659</div>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <Icon name="TrendingUp" size={14} />
                    +12% за период
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Конверсия</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">4.8%</div>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <Icon name="TrendingUp" size={14} />
                    +0.5% за период
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="finance" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Интеграция с банками</CardTitle>
                <CardDescription>Подключите счета для автоматического учета</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {bankConnections.map((bank, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              bank.connected ? 'bg-green-100' : 'bg-gray-100'
                            }`}>
                              <Icon name="Building" className={bank.connected ? 'text-green-600' : 'text-gray-400'} />
                            </div>
                            <div>
                              <div className="font-semibold">{bank.name}</div>
                              {bank.connected && (
                                <div className="text-sm text-muted-foreground">
                                  Баланс: ₽{bank.balance.toLocaleString()}
                                </div>
                              )}
                            </div>
                          </div>
                          <Button size="sm" variant={bank.connected ? 'outline' : 'default'}>
                            {bank.connected ? 'Настроить' : 'Подключить'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" className="text-yellow-600" />
                  AI-бухгалтер
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-yellow-200">
                    <Icon name="Bell" className="text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Напоминание о налогах</h4>
                      <p className="text-sm text-muted-foreground">
                        Через 5 дней срок уплаты налога УСН. Приготовьте 5,430₽
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-yellow-200">
                    <Icon name="Lightbulb" className="text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Рекомендация по оптимизации</h4>
                      <p className="text-sm text-muted-foreground">
                        Вы можете сэкономить 12,000₽ на налогах, учитывая расходы на рекламу
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Доходы и расходы</CardTitle>
                <CardDescription>Детальная разбивка по категориям</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-green-600">Доходы</span>
                      <span className="font-bold text-green-600">₽450,000</span>
                    </div>
                    <div className="space-y-2 pl-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Продажа товаров</span>
                        <span>₽420,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Услуги</span>
                        <span>₽30,000</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-red-600">Расходы</span>
                      <span className="font-bold text-red-600">₽100,000</span>
                    </div>
                    <div className="space-y-2 pl-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Реклама</span>
                        <span>₽50,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Закупка товаров</span>
                        <span>₽35,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Аренда</span>
                        <span>₽15,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-bold">Чистая прибыль</span>
                      <span className="font-bold text-2xl text-emerald-600">₽350,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;
