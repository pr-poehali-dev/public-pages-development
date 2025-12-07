import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const capabilities = [
    { icon: 'Globe', title: 'Сайты', desc: 'Создавайте сайты за минуты' },
    { icon: 'Bot', title: 'Чат-боты', desc: 'Автоматизация общения' },
    { icon: 'Megaphone', title: 'Реклама', desc: 'Управление кампаниями' },
    { icon: 'ShoppingBag', title: 'Товары', desc: 'Каталог и интеграции' },
    { icon: 'GraduationCap', title: 'Обучение', desc: 'Курсы и сертификация' },
    { icon: 'TrendingUp', title: 'Статистика', desc: 'Аналитика бизнеса' },
    { icon: 'Briefcase', title: 'Биржа', desc: 'Фриланс-задачи' },
    { icon: 'Store', title: 'Маркетплейс', desc: 'Шаблоны и скрипты' },
    { icon: 'Wallet', title: 'Финансы', desc: 'Учет и платежи' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Rocket" size={28} className="text-primary" />
            <span className="text-2xl font-bold">BizPlatform</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate('/login')}>Вход</Button>
            <Button onClick={() => navigate('/register')}>Регистрация</Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-6 py-24 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Запусти бизнес за один день
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Все инструменты для создания сайтов, ботов, продвижения и продаж в одной платформе
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/dashboard')}>
              <Icon name="Rocket" className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up">
              <Icon name="User" size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Для предпринимателя</h3>
              <p className="text-muted-foreground mb-4">
                Создавайте сайты, запускайте рекламу, продавайте товары — без программистов и дизайнеров
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Визуальные конструкторы</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>AI-помощник для бизнеса</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Автоматизация маркетинга</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Icon name="Code" size={48} className="text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Для разработчика</h3>
              <p className="text-muted-foreground mb-4">
                Находите заказы, продавайте шаблоны, зарабатывайте на своих навыках
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span>Биржа фриланса</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span>Маркетплейс шаблонов</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span>Escrow-платежи</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section id="features" className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Все возможности в одном месте</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Полный набор инструментов для запуска и роста бизнеса
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Icon 
                    name={item.icon} 
                    size={40} 
                    className="text-primary mb-3 group-hover:scale-110 transition-transform" 
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Тарифы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выберите подходящий план для вашего бизнеса
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-6">₽0<span className="text-lg text-muted-foreground">/мес</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>1 сайт</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Базовая аналитика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>AI-консультант</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Начать</Button>
              </Card>

              <Card className="p-8 border-2 border-primary shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-6">₽990<span className="text-lg text-muted-foreground">/мес</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>10 сайтов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Расширенная аналитика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Чат-боты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Интеграции</span>
                  </li>
                </ul>
                <Button className="w-full">Попробовать Pro</Button>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-6">₽2990<span className="text-lg text-muted-foreground">/мес</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Безлимит сайтов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Белый лейбл</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>API доступ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Связаться</Button>
              </Card>
            </div>
          </div>
        </section>

        <section id="cases" className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Кейсы наших клиентов</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Store" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Магазин косметики</h4>
                    <p className="text-sm text-muted-foreground">Ecommerce</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  За 2 недели запустили интернет-магазин с интеграцией в маркетплейсы. Продажи выросли на 300%
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <div className="font-bold text-primary">+300%</div>
                    <div className="text-muted-foreground">Продажи</div>
                  </div>
                  <div>
                    <div className="font-bold text-primary">2 нед</div>
                    <div className="text-muted-foreground">Запуск</div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Bot" className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Онлайн-школа</h4>
                    <p className="text-sm text-muted-foreground">Образование</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Автоматизировали запись на курсы через чат-бота. Конверсия увеличилась в 2 раза
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <div className="font-bold text-secondary">2x</div>
                    <div className="text-muted-foreground">Конверсия</div>
                  </div>
                  <div>
                    <div className="font-bold text-secondary">5 дней</div>
                    <div className="text-muted-foreground">Внедрение</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам предпринимателей, которые уже запустили свой бизнес
            </p>
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/dashboard')}>
              Создать аккаунт бесплатно
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Rocket" size={24} className="text-primary" />
                <span className="text-xl font-bold">BizPlatform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для запуска бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Интеграции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Университет</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 BizPlatform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
