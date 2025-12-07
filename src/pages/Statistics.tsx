import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Statistics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Статистика и аналитика</h1>
            <p className="text-muted-foreground">Консоль аналитики вашего бизнеса</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Icon name="Calendar" className="mr-2" size={18} />
              За месяц
            </Button>
            <Button variant="outline">
              <Icon name="Download" className="mr-2" size={18} />
              Экспорт
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Users" size={24} className="text-primary" />
                <span className="text-sm font-medium text-green-600">+18%</span>
              </div>
              <div className="text-3xl font-bold mb-1">12,847</div>
              <div className="text-sm text-muted-foreground">Посетители</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="ShoppingCart" size={24} className="text-secondary" />
                <span className="text-sm font-medium text-green-600">+23%</span>
              </div>
              <div className="text-3xl font-bold mb-1">524</div>
              <div className="text-sm text-muted-foreground">Заказы</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="DollarSign" size={24} className="text-green-500" />
                <span className="text-sm font-medium text-green-600">+31%</span>
              </div>
              <div className="text-3xl font-bold mb-1">₽245,680</div>
              <div className="text-sm text-muted-foreground">Выручка</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Percent" size={24} className="text-orange-500" />
                <span className="text-sm font-medium text-green-600">+2.1%</span>
              </div>
              <div className="text-3xl font-bold mb-1">4.8%</div>
              <div className="text-sm text-muted-foreground">Конверсия</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="traffic">
          <TabsList>
            <TabsTrigger value="traffic">Трафик</TabsTrigger>
            <TabsTrigger value="sales">Продажи</TabsTrigger>
            <TabsTrigger value="ads">Реклама</TabsTrigger>
            <TabsTrigger value="finance">Финансы</TabsTrigger>
          </TabsList>

          <TabsContent value="traffic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Посещаемость сайта</CardTitle>
                <CardDescription>Динамика посетителей за последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-end justify-between gap-2">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const height = Math.random() * 100;
                    return (
                      <div
                        key={i}
                        className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t transition-all cursor-pointer"
                        style={{ height: `${height}%` }}
                      />
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Источники трафика</CardTitle>
                  <CardDescription>Откуда приходят посетители</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span>Поиск (Яндекс)</span>
                    </div>
                    <span className="font-semibold">42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <span>Социальные сети</span>
                    </div>
                    <span className="font-semibold">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Прямые заходы</span>
                    </div>
                    <span className="font-semibold">18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span>Реклама</span>
                    </div>
                    <span className="font-semibold">12%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>География</CardTitle>
                  <CardDescription>Топ регионов по посещаемости</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Москва</span>
                    <span className="font-semibold">3,245</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Санкт-Петербург</span>
                    <span className="font-semibold">2,156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Казань</span>
                    <span className="font-semibold">892</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Новосибирск</span>
                    <span className="font-semibold">743</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Екатеринбург</span>
                    <span className="font-semibold">621</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sales" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Динамика продаж</CardTitle>
                <CardDescription>Выручка за последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-end justify-between gap-2">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const height = 20 + Math.random() * 80;
                    return (
                      <div
                        key={i}
                        className="flex-1 bg-green-500/20 hover:bg-green-500/40 rounded-t transition-all cursor-pointer"
                        style={{ height: `${height}%` }}
                      />
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Топ товаров</CardTitle>
                  <CardDescription>Самые продаваемые за месяц</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Крем для лица</span>
                    <span className="font-semibold">128 шт</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Маска для лица</span>
                    <span className="font-semibold">89 шт</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Сыворотка для волос</span>
                    <span className="font-semibold">67 шт</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Средний чек</CardTitle>
                  <CardDescription>Динамика по дням недели</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Понедельник</span>
                    <span className="font-semibold">₽1,245</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Вторник</span>
                    <span className="font-semibold">₽1,380</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Среда</span>
                    <span className="font-semibold">₽1,190</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Суббота</span>
                    <span className="font-semibold">₽2,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Воскресенье</span>
                    <span className="font-semibold">₽2,680</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ads" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Эффективность рекламы</CardTitle>
                <CardDescription>ROI рекламных кампаний</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Яндекс.Директ</span>
                      <span className="text-green-600 font-bold">+280%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Потрачено: ₽8,450</span>
                      <span>Доход: ₽32,100</span>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">VK Реклама</span>
                      <span className="text-green-600 font-bold">+195%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Потрачено: ₽10,000</span>
                      <span>Доход: ₽29,500</span>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Telegram Ads</span>
                      <span className="text-green-600 font-bold">+156%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Потрачено: ₽5,000</span>
                      <span>Доход: ₽12,800</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finance" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>AI-Бухгалтер</CardTitle>
                    <CardDescription>Рекомендации и уведомления</CardDescription>
                  </div>
                  <Icon name="Bot" size={24} className="text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-yellow-600 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Приближается налоговый период</div>
                      <p className="text-sm text-muted-foreground">
                        До сдачи декларации осталось 15 дней. Подготовьте документы.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Рекомендация по оптимизации</div>
                      <p className="text-sm text-muted-foreground">
                        Вы можете сэкономить ₽12,500 на налогах, если переведете рекламные расходы на УСН.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Доходы</CardTitle>
                  <CardDescription>За текущий месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4 text-green-600">₽245,680</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Прямые продажи</span>
                      <span className="font-semibold">₽182,400</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Маркетплейсы</span>
                      <span className="font-semibold">₽63,280</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Расходы</CardTitle>
                  <CardDescription>За текущий месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4 text-red-600">₽87,450</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Реклама</span>
                      <span className="font-semibold">₽23,450</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Закупка товара</span>
                      <span className="font-semibold">₽52,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Логистика</span>
                      <span className="font-semibold">₽12,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Интеграция с банками</CardTitle>
                <CardDescription>Автоматический импорт транзакций</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="Building" className="text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">Сбербанк</div>
                          <div className="text-sm text-green-600">Подключен</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Настроить</Button>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Icon name="Building" className="text-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold">Тинькофф</div>
                          <div className="text-sm text-muted-foreground">Не подключен</div>
                        </div>
                      </div>
                      <Button size="sm">Подключить</Button>
                    </div>
                  </Card>
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
