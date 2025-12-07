import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userType] = useState<'entrepreneur' | 'developer'>('entrepreneur');

  const stats = [
    { label: 'Посетители', value: '2,847', change: '+12%', icon: 'Users', color: 'text-primary' },
    { label: 'Заказы', value: '124', change: '+8%', icon: 'ShoppingCart', color: 'text-secondary' },
    { label: 'Продажи', value: '₽45,230', change: '+23%', icon: 'TrendingUp', color: 'text-green-500' },
    { label: 'Конверсия', value: '4.2%', change: '+1.2%', icon: 'Target', color: 'text-orange-500' }
  ];

  const onboardingSteps = [
    { title: 'Создать первый сайт', completed: true },
    { title: 'Настроить домен', completed: true },
    { title: 'Подключить платежи', completed: false },
    { title: 'Запустить рекламу', completed: false },
    { title: 'Добавить товары', completed: false }
  ];

  const quickActions = [
    { icon: 'Globe', label: 'Создать сайт', path: '/editor/site/new', color: 'bg-primary' },
    { icon: 'Bot', label: 'Создать бота', path: '/editor/bot/new', color: 'bg-secondary' },
    { icon: 'Megaphone', label: 'Запустить рекламу', path: '/dashboard/ads', color: 'bg-orange-500' },
    { icon: 'ShoppingBag', label: 'Добавить товар', path: '/dashboard/products', color: 'bg-green-500' }
  ];

  const activeProjects = [
    { id: 1, name: 'Интернет-магазин', type: 'site', status: 'active', visitors: '1,234' },
    { id: 2, name: 'Telegram бот поддержки', type: 'bot', status: 'active', messages: '567' },
    { id: 3, "name": 'Лендинг услуг', type: 'site', status: 'draft', visitors: '0' }
  ];

  const completedSteps = onboardingSteps.filter(s => s.completed).length;
  const progressPercent = (completedSteps / onboardingSteps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Icon name="Rocket" size={28} className="text-sidebar-primary" />
            <span className="text-xl font-bold text-sidebar-foreground">BizPlatform</span>
          </div>
          
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground bg-sidebar-accent" onClick={() => navigate('/dashboard')}>
              <Icon name="LayoutDashboard" className="mr-3" size={20} />
              Дашборд
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/editor/site/new')}>
              <Icon name="Globe" className="mr-3" size={20} />
              Конструктор сайтов
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/editor/bot/new')}>
              <Icon name="Bot" className="mr-3" size={20} />
              Конструктор ботов
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/dashboard/ads')}>
              <Icon name="Megaphone" className="mr-3" size={20} />
              Реклама
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/dashboard/products')}>
              <Icon name="ShoppingBag" className="mr-3" size={20} />
              Товары
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/dashboard/statistics')}>
              <Icon name="TrendingUp" className="mr-3" size={20} />
              Статистика
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/university')}>
              <Icon name="GraduationCap" className="mr-3" size={20} />
              Университет
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/exchange')}>
              <Icon name="Briefcase" className="mr-3" size={20} />
              Биржа
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/marketplace')}>
              <Icon name="Store" className="mr-3" size={20} />
              Маркетплейс
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => navigate('/dashboard/settings')}>
              <Icon name="Settings" className="mr-3" size={20} />
              Настройки
            </Button>
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name="User" size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-sidebar-foreground">Иван Петров</div>
              <div className="text-xs text-sidebar-foreground/60">Pro Plan</div>
            </div>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground">
              <Icon name="LogOut" size={18} />
            </Button>
          </div>
        </div>
      </aside>

      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">С возвращением, Иван! 👋</h1>
          <p className="text-muted-foreground">Вот что происходит с вашим бизнесом сегодня</p>
        </div>

        {progressPercent < 100 && (
          <Card className="mb-8 border-l-4 border-l-primary animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-primary" />
                Настройка аккаунта
              </CardTitle>
              <CardDescription>
                Завершите {onboardingSteps.length - completedSteps} шагов для полного запуска
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progressPercent} className="mb-4" />
              <div className="space-y-2">
                {onboardingSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon 
                      name={step.completed ? "CheckCircle2" : "Circle"} 
                      size={18}
                      className={step.completed ? "text-primary" : "text-muted-foreground"}
                    />
                    <span className={step.completed ? "text-muted-foreground line-through" : ""}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Icon name={stat.icon} size={24} className={stat.color} />
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Активные проекты</CardTitle>
              <CardDescription>Управляйте своими сайтами и ботами</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg ${project.type === 'site' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center`}>
                        <Icon name={project.type === 'site' ? 'Globe' : 'Bot'} className={project.type === 'site' ? 'text-primary' : 'text-secondary'} />
                      </div>
                      <div>
                        <div className="font-semibold">{project.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {project.type === 'site' ? `${project.visitors} посетителей` : `${project.messages} сообщений`}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {project.status === 'active' ? 'Активен' : 'Черновик'}
                      </span>
                      <Button variant="ghost" size="icon">
                        <Icon name="MoreVertical" size={18} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Быстрые действия</CardTitle>
              <CardDescription>Создавайте новый контент</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="w-full justify-start h-auto py-4"
                    onClick={() => navigate(action.path)}
                  >
                    <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mr-3`}>
                      <Icon name={action.icon} className="text-white" size={20} />
                    </div>
                    <span className="font-medium">{action.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageSquare" className="text-primary" />
                AI-Помощник
              </CardTitle>
              <CardDescription>Получите рекомендации для роста бизнеса</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Icon name="Lightbulb" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Увеличьте конверсию на 15%</div>
                      <p className="text-sm text-muted-foreground">
                        Добавьте форму захвата email на главную страницу
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <div className="flex items-start gap-3">
                    <Icon name="TrendingUp" className="text-secondary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Пора масштабировать рекламу</div>
                      <p className="text-sm text-muted-foreground">
                        Ваша конверсия стабильна, увеличьте бюджет на 30%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline" onClick={() => navigate('/dashboard/ai-chat')}>
                <Icon name="MessageSquare" className="mr-2" size={18} />
                Открыть чат с AI
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BookOpen" className="text-secondary" />
                Университет
              </CardTitle>
              <CardDescription>Продолжите обучение</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="Play" className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium mb-1">Основы контекстной рекламы</div>
                    <Progress value={65} className="mb-1" />
                    <div className="text-xs text-muted-foreground">Урок 7 из 12</div>
                  </div>
                </div>
                <Button className="w-full" variant="outline" onClick={() => navigate('/university')}>
                  Продолжить обучение
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
