import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('users');

  const users = [
    { id: '1', name: 'Иван Петров', email: 'ivan@example.com', role: 'entrepreneur', status: 'active', tariff: 'Pro', registered: '2025-11-15' },
    { id: '2', name: 'Мария Волкова', email: 'maria@example.com', role: 'freelancer', status: 'active', tariff: 'Premium', registered: '2025-11-20' },
    { id: '3', name: 'Алексей Смирнов', email: 'alex@example.com', role: 'entrepreneur', status: 'inactive', tariff: 'Free', registered: '2025-12-01' }
  ];

  const financialStats = [
    { label: 'Общий доход', value: '₽1,250,000', change: '+15%', icon: 'TrendingUp', color: 'text-green-600' },
    { label: 'Расходы', value: '₽320,000', change: '+8%', icon: 'TrendingDown', color: 'text-orange-600' },
    { label: 'Чистая прибыль', value: '₽930,000', change: '+18%', icon: 'DollarSign', color: 'text-emerald-600' },
    { label: 'Средний чек', value: '₽15,400', change: '+5%', icon: 'CreditCard', color: 'text-blue-600' }
  ];

  const paymentSystems = [
    { id: 'yukassa', name: 'ЮKassa', status: 'active', commission: '2.8%' },
    { id: 'tbank', name: 'ТБанк', status: 'active', commission: '3.0%' },
    { id: 'crypto', name: 'Криптовалюты', status: 'inactive', commission: '1.5%' }
  ];

  const aiProviders = [
    { id: 'openai', name: 'OpenAI GPT-4', status: 'active', cost: '₽0.03/1K токенов', usage: '1.2М токенов' },
    { id: 'anthropic', name: 'Claude 3', status: 'active', cost: '₽0.025/1K токенов', usage: '850K токенов' },
    { id: 'google', name: 'Gemini Pro', status: 'inactive', cost: '₽0.02/1K токенов', usage: '0' }
  ];

  const menuItems = [
    { id: 'users', name: 'Пользователи', icon: 'Users' },
    { id: 'content', name: 'Контент', icon: 'FileText' },
    { id: 'finance', name: 'Финансы', icon: 'DollarSign' },
    { id: 'system', name: 'Система', icon: 'Settings' },
    { id: 'analytics', name: 'Аналитика', icon: 'BarChart3' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <Icon name="Shield" size={24} className="text-primary" />
            <span className="text-lg font-bold text-white">Админ-панель</span>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedMenu(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                selectedMenu === item.id
                  ? 'bg-primary text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon name={item.icon} size={18} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <Button variant="outline" className="w-full" onClick={() => navigate('/dashboard')}>
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            Вернуться
          </Button>
        </div>
      </aside>

      <main className="ml-64 flex-1 p-8">
        {selectedMenu === 'users' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-white">Управление пользователями</h1>
              <p className="text-gray-400">Список всех пользователей платформы</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1 text-white">1,234</div>
                  <div className="text-sm text-gray-400">Всего пользователей</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name="UserCheck" size={24} className="text-green-500" />
                  </div>
                  <div className="text-3xl font-bold mb-1 text-white">892</div>
                  <div className="text-sm text-gray-400">Активных</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name="Crown" size={24} className="text-yellow-500" />
                  </div>
                  <div className="text-3xl font-bold mb-1 text-white">456</div>
                  <div className="text-sm text-gray-400">Платных</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name="UserPlus" size={24} className="text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold mb-1 text-white">+89</div>
                  <div className="text-sm text-gray-400">За последний месяц</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Все пользователи</CardTitle>
                    <CardDescription className="text-gray-400">Управление аккаунтами</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Поиск..." className="w-64 bg-gray-900 border-gray-700 text-white" />
                    <Select>
                      <SelectTrigger className="w-40 bg-gray-900 border-gray-700 text-white">
                        <SelectValue placeholder="Роль" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все роли</SelectItem>
                        <SelectItem value="entrepreneur">Предприниматель</SelectItem>
                        <SelectItem value="freelancer">Фрилансер</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{user.name}</p>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                          {user.status === 'active' ? 'Активен' : 'Неактивен'}
                        </Badge>
                        <Badge>{user.tariff}</Badge>
                        <p className="text-sm text-gray-400">{user.registered}</p>
                        <Select>
                          <SelectTrigger className="w-40 bg-gray-900 border-gray-700 text-white">
                            <SelectValue placeholder="Действия" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="edit">Редактировать</SelectItem>
                            <SelectItem value="block">Заблокировать</SelectItem>
                            <SelectItem value="delete">Удалить</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedMenu === 'finance' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-white">Финансы</h1>
              <p className="text-gray-400">Финансовая отчетность платформы</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {financialStats.map((stat, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Icon name={stat.icon} size={24} className={stat.color} />
                      <Badge className="bg-green-100 text-green-700">{stat.change}</Badge>
                    </div>
                    <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Транзакции</CardTitle>
                <CardDescription className="text-gray-400">История всех операций</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Таблица транзакций...</p>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedMenu === 'system' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-white">Настройка системы</h1>
              <p className="text-gray-400">Управление платежами, AI и доступами</p>
            </div>

            <Tabs defaultValue="payments" className="space-y-6">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="payments">Платежи</TabsTrigger>
                <TabsTrigger value="ai">AI-модели</TabsTrigger>
                <TabsTrigger value="access">Доступы</TabsTrigger>
                <TabsTrigger value="tariffs">Тарифы</TabsTrigger>
              </TabsList>

              <TabsContent value="payments" className="space-y-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Платежные системы</CardTitle>
                    <CardDescription className="text-gray-400">Управление интеграциями</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {paymentSystems.map((system) => (
                      <div key={system.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon name="CreditCard" size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{system.name}</p>
                            <p className="text-sm text-gray-400">Комиссия: {system.commission}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={system.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                            {system.status === 'active' ? 'Активна' : 'Неактивна'}
                          </Badge>
                          <Button size="sm" variant="outline">Настроить</Button>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full">
                      <Icon name="Plus" className="mr-2" size={16} />
                      Добавить платежную систему
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai" className="space-y-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">AI-провайдеры</CardTitle>
                    <CardDescription className="text-gray-400">Управление API-ключами и моделями</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {aiProviders.map((provider) => (
                      <div key={provider.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon name="Sparkles" size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{provider.name}</p>
                            <p className="text-sm text-gray-400">{provider.cost} • Использовано: {provider.usage}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={provider.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                            {provider.status === 'active' ? 'Активна' : 'Неактивна'}
                          </Badge>
                          <Button size="sm" variant="outline">Настроить</Button>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full">
                      <Icon name="Plus" className="mr-2" size={16} />
                      Добавить AI-провайдера
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="access" className="space-y-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Ролевой доступ</CardTitle>
                    <CardDescription className="text-gray-400">Управление правами для разных ролей</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                        <Label className="text-white">AI-генерация сайтов</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                        <Label className="text-white">Создание ботов</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                        <Label className="text-white">Биржа фриланса</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                        <Label className="text-white">Маркетплейс</Label>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {selectedMenu === 'analytics' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-white">Аналитика</h1>
              <p className="text-gray-400">Ключевые метрики платформы</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Выручка (MRR)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-white">₽450,000</div>
                  <Badge className="bg-green-100 text-green-700">+15% к прошлому месяцу</Badge>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Конверсия</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-white">12.5%</div>
                  <Badge className="bg-green-100 text-green-700">+2% к прошлому месяцу</Badge>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Популярные функции</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Создание сайтов', usage: 1234 },
                    { name: 'AI-чат', usage: 892 },
                    { name: 'Редактор ботов', usage: 567 },
                    { name: 'Статистика', usage: 445 }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-white">{feature.name}</span>
                      <Badge>{feature.usage} использований</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
