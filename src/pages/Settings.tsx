import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Настройки</h1>
          <p className="text-muted-foreground">Управление профилем и параметрами аккаунта</p>
        </div>

        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="balance">Баланс</TabsTrigger>
            <TabsTrigger value="tariff">Тарифы</TabsTrigger>
            <TabsTrigger value="integrations">Интеграции</TabsTrigger>
            <TabsTrigger value="security">Безопасность</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Основная информация</CardTitle>
                <CardDescription>Обновите данные вашего профиля</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="mr-2">
                      <Icon name="Upload" className="mr-2" size={16} />
                      Загрузить фото
                    </Button>
                    <Button variant="ghost" size="sm">
                      Удалить
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Имя</Label>
                    <Input defaultValue="Иван" />
                  </div>
                  <div className="space-y-2">
                    <Label>Фамилия</Label>
                    <Input defaultValue="Петров" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" defaultValue="ivan@example.com" />
                </div>

                <div className="space-y-2">
                  <Label>Телефон</Label>
                  <Input type="tel" defaultValue="+7 (999) 123-45-67" />
                </div>

                <div className="space-y-2">
                  <Label>О себе</Label>
                  <textarea
                    className="w-full p-2 border border-border rounded-md resize-none"
                    rows={3}
                    defaultValue="Предприниматель в сфере ecommerce"
                  />
                </div>

                <Button>
                  <Icon name="Save" className="mr-2" size={16} />
                  Сохранить изменения
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Настройки уведомлений</CardTitle>
                <CardDescription>Управление email и push-уведомлениями</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Email-уведомления</div>
                    <div className="text-sm text-muted-foreground">Получать письма о важных событиях</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Новые заказы</div>
                    <div className="text-sm text-muted-foreground">Уведомления о новых заказах</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Маркетинговые рассылки</div>
                    <div className="text-sm text-muted-foreground">Новости и специальные предложения</div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Отчеты по статистике</div>
                    <div className="text-sm text-muted-foreground">Еженедельные отчеты о показателях</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="balance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Баланс аккаунта</CardTitle>
                <CardDescription>Управление средствами на платформе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 mb-6">
                  <div className="text-5xl font-bold mb-2">₽2,450</div>
                  <p className="text-muted-foreground">Доступно для использования</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button>
                    <Icon name="Plus" className="mr-2" size={18} />
                    Пополнить
                  </Button>
                  <Button variant="outline">
                    <Icon name="ArrowDownToLine" className="mr-2" size={18} />
                    Вывести
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">История операций</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Icon name="Plus" className="text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">Пополнение</div>
                          <div className="text-sm text-muted-foreground">15 дек 2024, 14:30</div>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-green-600">+₽5,000</div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                          <Icon name="Minus" className="text-red-600" />
                        </div>
                        <div>
                          <div className="font-medium">Оплата тарифа Pro</div>
                          <div className="text-sm text-muted-foreground">12 дек 2024, 10:15</div>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-red-600">-₽990</div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Icon name="ShoppingCart" className="text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Покупка шаблона</div>
                          <div className="text-sm text-muted-foreground">10 дек 2024, 16:45</div>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-red-600">-₽2,990</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Способы пополнения</CardTitle>
                <CardDescription>Выберите удобный способ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Банковская карта</div>
                      <div className="text-sm text-muted-foreground">Visa, MasterCard, МИР</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Icon name="Wallet" size={24} className="text-secondary" />
                    <div>
                      <div className="font-semibold">Криптовалюта</div>
                      <div className="text-sm text-muted-foreground">BTC, ETH, USDT</div>
                    </div>
                  </div>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tariff" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Текущий тариф</CardTitle>
                <CardDescription>Вы используете тариф Pro</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Zap" size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Pro</h3>
                      <p className="text-muted-foreground">₽990/месяц</p>
                    </div>
                  </div>
                  <Badge>Активен</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold mb-1">10</div>
                    <div className="text-sm text-muted-foreground">Сайтов</div>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold mb-1">Безлимит</div>
                    <div className="text-sm text-muted-foreground">Чат-ботов</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Следующее списание: 12 января 2025
                </p>

                <div className="flex gap-2">
                  <Button variant="outline">Изменить тариф</Button>
                  <Button variant="outline">Отменить подписку</Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>
                    <div className="text-3xl font-bold mt-2">₽0</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">1 сайт</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Базовая аналитика</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">AI-консультант</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" disabled>Текущий тариф</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-lg">
                  Текущий
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>
                    <div className="text-3xl font-bold mt-2">₽990/мес</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">10 сайтов</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Расширенная аналитика</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Чат-боты</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Интеграции</span>
                    </li>
                  </ul>
                  <Button className="w-full" disabled>Активен</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>
                    <div className="text-3xl font-bold mt-2">₽2,990/мес</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Безлимит сайтов</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Белый лейбл</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">API доступ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Приоритетная поддержка</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Перейти</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Банковские интеграции</CardTitle>
                <CardDescription>Подключите банк для автоматического учета</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
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
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Платежные системы</CardTitle>
                <CardDescription>Для приема платежей на сайте</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Icon name="CreditCard" className="text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold">ЮKassa</div>
                        <div className="text-sm text-muted-foreground">Не подключена</div>
                      </div>
                    </div>
                    <Button size="sm">Подключить</Button>
                  </div>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CRM-системы</CardTitle>
                <CardDescription>Синхронизация с системами учета</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Icon name="Users" className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">AmoCRM</div>
                        <div className="text-sm text-muted-foreground">Не подключена</div>
                      </div>
                    </div>
                    <Button size="sm">Подключить</Button>
                  </div>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Смена пароля</CardTitle>
                <CardDescription>Обновите пароль для входа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Текущий пароль</Label>
                  <Input type="password" />
                </div>

                <div className="space-y-2">
                  <Label>Новый пароль</Label>
                  <Input type="password" />
                </div>

                <div className="space-y-2">
                  <Label>Подтверждение пароля</Label>
                  <Input type="password" />
                </div>

                <Button>
                  <Icon name="Lock" className="mr-2" size={16} />
                  Изменить пароль
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Двухфакторная аутентификация</CardTitle>
                <CardDescription>Дополнительная защита аккаунта</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-medium">2FA через SMS</div>
                    <div className="text-sm text-muted-foreground">Получать коды подтверждения по SMS</div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">2FA через приложение</div>
                    <div className="text-sm text-muted-foreground">Использовать Google Authenticator</div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Активные сеансы</CardTitle>
                <CardDescription>Устройства с доступом к аккаунту</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Monitor" size={24} className="text-primary" />
                    <div>
                      <div className="font-medium">Chrome на Windows</div>
                      <div className="text-sm text-muted-foreground">Москва • Сейчас</div>
                    </div>
                  </div>
                  <Badge>Текущий</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Smartphone" size={24} className="text-secondary" />
                    <div>
                      <div className="font-medium">Safari на iPhone</div>
                      <div className="text-sm text-muted-foreground">Москва • 2 часа назад</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Завершить</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
