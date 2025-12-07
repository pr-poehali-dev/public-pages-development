import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Settings = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [autoImport, setAutoImport] = useState(true);
  const balance = 10000;
  const currentTariff = 'Pro';
  const userType = 'entrepreneur';

  const transactions = [
    { id: '1', date: '2025-12-05', type: 'Пополнение', amount: '+5,000', status: 'completed' },
    { id: '2', date: '2025-12-03', type: 'Оплата тарифа Pro', amount: '-990', status: 'completed' },
    { id: '3', date: '2025-12-01', type: 'Пополнение', amount: '+10,000', status: 'completed' },
    { id: '4', date: '2025-11-28', type: 'Списание за AI', amount: '-150', status: 'completed' }
  ];

  const banks = [
    { id: 'tinkoff', name: 'Тинькофф-Бизнес', connected: true, balance: '₽125,430' },
    { id: 'sber', name: 'СберБизнес', connected: false, balance: null },
    { id: 'alfa', name: 'Альфа-Банк', connected: false, balance: null }
  ];

  const sessions = [
    { id: '1', device: 'MacBook Pro', location: 'Москва, Россия', lastActive: '5 мин назад', current: true },
    { id: '2', device: 'iPhone 14', location: 'Москва, Россия', lastActive: '2 часа назад', current: false },
    { id: '3', device: 'Windows PC', location: 'Санкт-Петербург, Россия', lastActive: '1 день назад', current: false }
  ];

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
            {userType === 'freelancer' && <TabsTrigger value="withdrawal">Вывод средств</TabsTrigger>}
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Профиль</CardTitle>
                <CardDescription>Управление личной информацией</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
                    ИП
                  </div>
                  <div className="space-y-2">
                    <Button size="sm">
                      <Icon name="Upload" className="mr-2" size={14} />
                      Загрузить фото
                    </Button>
                    <p className="text-xs text-muted-foreground">JPG, PNG до 5 МБ</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>ФИО</Label>
                    <Input defaultValue="Иван Петров" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" defaultValue="ivan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Телефон</Label>
                    <Input defaultValue="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label>Компания</Label>
                    <Input defaultValue="ИП Петров И.И." />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>О себе</Label>
                  <textarea
                    className="w-full p-3 border border-border rounded-md resize-none"
                    rows={4}
                    placeholder="Расскажите о себе и своем бизнесе..."
                  />
                </div>

                <Button>Сохранить изменения</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="balance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name="Wallet" size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{balance.toLocaleString()} ₽</div>
                  <div className="text-sm text-muted-foreground">Текущий баланс</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name="TrendingUp" size={24} className="text-green-500" />
                  </div>
                  <div className="text-3xl font-bold mb-1">+15,000 ₽</div>
                  <div className="text-sm text-muted-foreground">Пополнено за месяц</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name="TrendingDown" size={24} className="text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold mb-1">-1,140 ₽</div>
                  <div className="text-sm text-muted-foreground">Расходы за месяц</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>История транзакций</CardTitle>
                    <CardDescription>Последние операции с балансом</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Icon name="Plus" className="mr-2" size={16} />
                        Пополнить баланс
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Пополнить баланс</DialogTitle>
                        <DialogDescription>Выберите способ оплаты и введите сумму</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Сумма пополнения</Label>
                          <Input type="number" placeholder="5000" />
                        </div>
                        <div className="space-y-2">
                          <Label>Способ оплаты</Label>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="p-4 border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors">
                              <Icon name="CreditCard" size={24} className="mx-auto mb-2 text-primary" />
                              <p className="text-sm font-medium">Банковская карта</p>
                            </button>
                            <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                              <Icon name="Building" size={24} className="mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm font-medium">ТБанк</p>
                            </button>
                            <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors col-span-2">
                              <Icon name="Bitcoin" size={24} className="mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm font-medium">Криптовалюта (USDT, BTC, ETH)</p>
                            </button>
                          </div>
                        </div>
                        <Button className="w-full">Пополнить</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.amount.startsWith('+') ? 'bg-green-100' : 'bg-orange-100'
                        }`}>
                          <Icon
                            name={tx.amount.startsWith('+') ? 'ArrowDownLeft' : 'ArrowUpRight'}
                            size={18}
                            className={tx.amount.startsWith('+') ? 'text-green-600' : 'text-orange-600'}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{tx.type}</p>
                          <p className="text-sm text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          tx.amount.startsWith('+') ? 'text-green-600' : 'text-orange-600'
                        }`}>{tx.amount} ₽</p>
                        <Badge className="bg-green-100 text-green-700">Завершено</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tariff" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Текущий тариф</CardTitle>
                <CardDescription>Вы используете тариф {currentTariff}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-2 border-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Free</h3>
                      <div className="text-3xl font-bold mb-4">₽0<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>1 сайт</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Базовая аналитика</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>AI-консультант</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full">Текущий</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary shadow-lg">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Текущий
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Pro</h3>
                      <div className="text-3xl font-bold mb-4">₽990<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>10 сайтов</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Безлимит ботов</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Расширенная аналитика</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Все интеграции</span>
                        </li>
                      </ul>
                      <Button className="w-full">Управление</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Premium</h3>
                      <div className="text-3xl font-bold mb-4">₽2,990<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Безлимит сайтов</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Белый лейбл</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>API доступ</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Приоритетная поддержка</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full">Перейти</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-доступ</CardTitle>
                <CardDescription>Настройка использования AI-моделей</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Предпочитаемая модель</Label>
                  <Select defaultValue="gpt4">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt4">GPT-4 (OpenAI) - ₽0.03/1K токенов</SelectItem>
                      <SelectItem value="claude">Claude 3 (Anthropic) - ₽0.025/1K токенов</SelectItem>
                      <SelectItem value="gemini">Gemini Pro (Google) - ₽0.02/1K токенов</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Использование за месяц</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Израсходовано токенов:</span>
                    <span className="font-semibold">5,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Стоимость:</span>
                    <span className="font-semibold">₽150</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Банковские интеграции</CardTitle>
                <CardDescription>Подключите банковские счета для автоматического учета</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {banks.map((bank) => (
                  <div key={bank.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Building" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{bank.name}</p>
                        {bank.connected && <p className="text-sm text-muted-foreground">Баланс: {bank.balance}</p>}
                      </div>
                    </div>
                    {bank.connected ? (
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-700">Подключен</Badge>
                        <Button variant="outline" size="sm">Настроить</Button>
                      </div>
                    ) : (
                      <Button size="sm">Подключить</Button>
                    )}
                  </div>
                ))}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Download" size={18} className="text-primary" />
                    <div>
                      <p className="font-medium">Автоматический импорт выписок</p>
                      <p className="text-sm text-muted-foreground">Ежедневное обновление транзакций</p>
                    </div>
                  </div>
                  <Switch checked={autoImport} onCheckedChange={setAutoImport} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Смена пароля</CardTitle>
                <CardDescription>Обновите пароль для повышения безопасности</CardDescription>
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
                  <Label>Подтвердите новый пароль</Label>
                  <Input type="password" />
                </div>
                <Button>Сменить пароль</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Двухфакторная аутентификация (2FA)</CardTitle>
                <CardDescription>Дополнительная защита вашего аккаунта</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Authenticator App</p>
                    <p className="text-sm text-muted-foreground">Google Authenticator, Authy</p>
                  </div>
                  <Switch checked={is2FAEnabled} onCheckedChange={setIs2FAEnabled} />
                </div>
                {is2FAEnabled && (
                  <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                    <p className="text-sm font-medium">Отсканируйте QR-код в приложении:</p>
                    <div className="w-48 h-48 bg-white rounded-lg mx-auto flex items-center justify-center">
                      <Icon name="QrCode" size={180} className="text-muted-foreground" />
                    </div>
                    <Input placeholder="Введите код из приложения" />
                    <Button className="w-full">Подтвердить</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Активные сессии</CardTitle>
                <CardDescription>Устройства, на которых выполнен вход</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {sessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon
                          name={session.device.includes('Mac') || session.device.includes('Windows') ? 'Monitor' : 'Smartphone'}
                          size={20}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{session.device}</p>
                          {session.current && <Badge className="bg-green-100 text-green-700">Текущая</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{session.location}</p>
                        <p className="text-xs text-muted-foreground">Активна: {session.lastActive}</p>
                      </div>
                    </div>
                    {!session.current && (
                      <Button variant="outline" size="sm">
                        Завершить
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="destructive" className="w-full">
                  Выйти со всех устройств
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {userType === 'freelancer' && (
            <TabsContent value="withdrawal" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Вывод средств</CardTitle>
                  <CardDescription>Вывести заработанные деньги</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Icon name="Wallet" size={24} className="text-green-500" />
                        </div>
                        <div className="text-3xl font-bold mb-1">₽50,000</div>
                        <div className="text-sm text-muted-foreground">Доступно к выводу</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Icon name="Clock" size={24} className="text-orange-500" />
                        </div>
                        <div className="text-3xl font-bold mb-1">₽8,000</div>
                        <div className="text-sm text-muted-foreground">В обработке</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Icon name="CheckCircle" size={24} className="text-primary" />
                        </div>
                        <div className="text-3xl font-bold mb-1">₽120,000</div>
                        <div className="text-sm text-muted-foreground">Выведено за все время</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Сумма вывода</Label>
                      <Input type="number" placeholder="10000" />
                    </div>
                    <div className="space-y-2">
                      <Label>Способ вывода</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="p-4 border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors">
                          <Icon name="Bitcoin" size={24} className="mx-auto mb-2 text-primary" />
                          <p className="text-sm font-medium">Крипто-кошелек</p>
                          <p className="text-xs text-muted-foreground">USDT, BTC</p>
                        </button>
                        <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <Icon name="CreditCard" size={24} className="mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm font-medium">Банковская карта</p>
                          <p className="text-xs text-muted-foreground">Visa, MasterCard</p>
                        </button>
                      </div>
                    </div>
                    <Button className="w-full">Заказать вывод</Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">История выводов</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">Вывод на карту</p>
                          <p className="text-sm text-muted-foreground">05.12.2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">₽30,000</p>
                          <Badge className="bg-green-100 text-green-700">Завершено</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;