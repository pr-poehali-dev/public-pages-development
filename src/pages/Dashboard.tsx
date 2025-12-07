import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userType] = useState<'entrepreneur' | 'freelancer'>('entrepreneur');
  const balance = 2450;

  const statsEntrepreneur = [
    { label: 'Посетители сайта', value: '1,234', icon: 'Users', color: 'text-blue-600' },
    { label: 'Новые заказы', value: '12', icon: 'ShoppingCart', color: 'text-green-600' },
    { label: 'Продажи', value: '₽45,000', icon: 'DollarSign', color: 'text-emerald-600' },
    { label: 'Расходы на рекламу', value: '₽5,000', icon: 'TrendingUp', color: 'text-orange-600' }
  ];

  const statsFreelancer = [
    { label: 'Заработок', value: '₽150,000', icon: 'Wallet', color: 'text-green-600' },
    { label: 'Активные заказы', value: '5', icon: 'Briefcase', color: 'text-blue-600' },
    { label: 'Рейтинг', value: '4.8/5', icon: 'Star', color: 'text-yellow-600' },
    { label: 'Завершенных', value: '24', icon: 'CheckCircle', color: 'text-emerald-600' }
  ];

  const stats = userType === 'entrepreneur' ? statsEntrepreneur : statsFreelancer;

  const onboardingSteps = [
    { title: 'Выбрать нишу', completed: true },
    { title: 'Создать сайт', completed: false, inProgress: true },
    { title: 'Добавить товары', completed: false },
    { title: 'Запустить рекламу', completed: false }
  ];

  const activeProjects = [
    {
      id: 1,
      name: 'Кофейня у реки',
      type: 'site',
      status: 'published',
      icon: 'Globe',
      statusText: 'Опубликован',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 2,
      name: 'Бот для заказов',
      type: 'bot',
      status: 'active',
      icon: 'Bot',
      statusText: 'Активен',
      statusColor: 'bg-blue-100 text-blue-700'
    }
  ];

  const notifications = [
    { text: 'Агент Марк отправил отчет', time: '5 мин назад', icon: 'FileText' },
    { text: 'Новый заказ в боте (2)', time: '15 мин назад', icon: 'ShoppingCart' },
    { text: 'Курс "Налоги" ждет вас', time: '1 час назад', icon: 'GraduationCap' },
    { text: 'Пополнен баланс на 5000₽', time: '3 часа назад', icon: 'Wallet' },
    { text: 'Ваша реклама достигла 1000 показов', time: '5 часов назад', icon: 'TrendingUp' }
  ];

  const completedSteps = onboardingSteps.filter(s => s.completed).length;
  const progressPercent = (completedSteps / onboardingSteps.length) * 100;

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <Icon name="Rocket" size={24} className="text-primary" />
            <span className="text-lg font-bold">BizForge</span>
          </button>

          <button onClick={() => navigate('/dashboard/settings')} className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
              ИП
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold">Иван Петров</div>
              <div className="text-xs text-muted-foreground">Предприниматель</div>
            </div>
          </button>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Баланс</div>
            <div className="text-2xl font-bold mb-2">₽{balance.toLocaleString()}</div>
            <Button size="sm" className="w-full" onClick={() => navigate('/dashboard/settings?tab=balance')}>
              <Icon name="Plus" size={14} className="mr-1" />
              Пополнить
            </Button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">ОСНОВНОЕ</div>
          <Button variant="ghost" className="w-full justify-start bg-primary/10 text-primary hover:bg-primary/20">
            <Icon name="LayoutDashboard" className="mr-3" size={18} />
            Главная
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-muted/50" onClick={() => navigate('/editor/site/new')}>
            <Icon name="Globe" className="mr-3" size={18} />
            Мои проекты
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-muted/50" onClick={() => navigate('/dashboard/ads')}>
            <Icon name="Megaphone" className="mr-3" size={18} />
            Реклама и продвижение
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-muted/50" onClick={() => navigate('/dashboard/products')}>
            <Icon name="ShoppingBag" className="mr-3" size={18} />
            Мои товары
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-muted/50" onClick={() => navigate('/dashboard/statistics')}>
            <Icon name="BarChart3" className="mr-3" size={18} />
            Статистика
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-muted/50" onClick={() => navigate('/university')}>
            <Icon name="GraduationCap" className="mr-3" size={18} />
            Университет
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-muted/50" onClick={() => navigate('/dashboard/ai-chat')}>
            <Icon name="MessageSquare" className="mr-3" size={18} />
            Чат с ИИ
          </Button>

          {userType === 'freelancer' && (
            <>
              <div className="text-xs font-semibold text-muted-foreground mb-2 px-2 pt-4">МОНЕТИЗАЦИЯ</div>
              <Button variant="ghost" className="w-full justify-start hover:bg-muted/50">
                <Icon name="Briefcase" className="mr-3" size={18} />
                Мои услуги
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-muted/50" onClick={() => navigate('/exchange')}>
                <Icon name="ListOrdered" className="mr-3" size={18} />
                Биржа заказов
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-muted/50" onClick={() => navigate('/marketplace')}>
                <Icon name="Store" className="mr-3" size={18} />
                Маркетплейс
              </Button>
            </>
          )}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/dashboard/settings')}>
            <Icon name="Settings" className="mr-3" size={18} />
            Настройки
          </Button>
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => navigate('/login')}>
            <Icon name="LogOut" className="mr-3" size={18} />
            Выход
          </Button>
        </div>
      </aside>

      <main className="ml-64 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Добро пожаловать, Иван! 👋</h1>
          <p className="text-muted-foreground">Вот что происходит с вашим бизнесом сегодня</p>
        </div>

        {progressPercent < 100 && (
          <Card className="mb-8 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Rocket" className="text-primary" />
                Шаги к запуску
              </CardTitle>
              <CardDescription>
                Завершите настройку для максимальной эффективности
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progressPercent} className="mb-6" />
              <div className="space-y-3">
                {onboardingSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      step.inProgress ? 'bg-primary/5 border border-primary/20' : ''
                    }`}
                  >
                    <Icon
                      name={step.completed ? 'CheckCircle2' : step.inProgress ? 'Clock' : 'Circle'}
                      size={20}
                      className={
                        step.completed
                          ? 'text-green-600'
                          : step.inProgress
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }
                    />
                    <span
                      className={
                        step.completed
                          ? 'text-muted-foreground line-through'
                          : step.inProgress
                          ? 'font-semibold text-primary'
                          : ''
                      }
                    >
                      {step.title}
                    </span>
                    {step.inProgress && (
                      <Badge className="ml-auto bg-primary/10 text-primary">В процессе</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${stat.color.split('-')[1]}-100 flex items-center justify-center`}>
                    <Icon name={stat.icon} size={24} className={stat.color} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Быстрые действия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              size="lg"
              className="h-24 flex flex-col gap-2 bg-primary hover:bg-primary/90"
              onClick={() => navigate('/editor/site/new')}
            >
              <Icon name="Globe" size={28} />
              <span>Создать сайт</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => navigate('/dashboard/ads')}
            >
              <Icon name="Megaphone" size={28} />
              <span>Запустить рекламу</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => navigate('/dashboard/products')}
            >
              <Icon name="Plus" size={28} />
              <span>Добавить товар</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => navigate('/dashboard/ai-chat')}
            >
              <Icon name="MessageSquare" size={28} />
              <span>Задать вопрос ИИ</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Активные проекты</CardTitle>
              <CardDescription>Ваши сайты и боты</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/editor/${project.type}/${project.id}`)}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={project.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{project.name}</h4>
                      <Badge className={project.statusColor}>{project.statusText}</Badge>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                  </div>
                ))}
                <Button variant="outline" className="w-full" onClick={() => navigate('/editor/site/new')}>
                  <Icon name="Plus" className="mr-2" size={18} />
                  Создать новый проект
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Уведомления</CardTitle>
              <CardDescription>Последние события</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notif, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Icon name={notif.icon} size={16} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{notif.text}</p>
                      <p className="text-xs text-muted-foreground">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;