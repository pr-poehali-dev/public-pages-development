import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const capabilities = [
    { icon: 'Globe', title: 'Сайты', desc: 'AI-генерация, конструктор' },
    { icon: 'Bot', title: 'Чат-боты', desc: 'Визуальный редактор' },
    { icon: 'Megaphone', title: 'Реклама', desc: 'Гайды, под ключ' },
    { icon: 'ShoppingBag', title: 'Товары', desc: 'Каталог, маркетплейсы' },
    { icon: 'GraduationCap', title: 'Обучение', desc: 'Курсы, сертификаты' },
    { icon: 'TrendingUp', title: 'Статистика', desc: 'Аналитика, AI-рекомендации' },
    { icon: 'Briefcase', title: 'Биржа', desc: 'Фриланс, услуги' },
    { icon: 'Store', title: 'Маркетплейс', desc: 'Шаблоны, скрипты' },
    { icon: 'Wallet', title: 'Финансы', desc: 'Баланс, банки, бухгалтер' }
  ];

  const testimonials: { name: string; role: string; photo: string; text: string; rating: number; }[] = [];

  const faqs = [
    {
      q: 'Нужны ли технические знания?',
      a: 'Нет, платформа полностью визуальная. AI-помощник подскажет на каждом шаге.'
    },
    {
      q: 'Сколько стоит использование?',
      a: 'Есть бесплатный тариф Free. Платные тарифы Pro (₽990/мес) и Premium (₽2990/мес).'
    },
    {
      q: 'Можно ли продавать на маркетплейсе?',
      a: 'Да, интегрируем с Wildberries, Ozon, Яндекс.Маркет автоматически.'
    },
    {
      q: 'Как быстро запущу бизнес?',
      a: 'Минимальное время — несколько часов. Большинство пользователей запускаются за 1-2 дня.'
    },
    {
      q: 'Есть ли поддержка?',
      a: 'Да, круглосуточный AI-консультант + чат с живыми специалистами на платных тарифах.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="Rocket" size={28} className="text-primary" />
            <span className="text-2xl font-bold">BizForge</span>
          </button>
          
          <nav className="hidden md:flex gap-8">
            <a href="#capabilities" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#marketplace" className="text-sm font-medium hover:text-primary transition-colors">Маркетплейс</a>
            <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">Сообщество</a>
            <a href="#support" className="text-sm font-medium hover:text-primary transition-colors">Поддержка</a>
          </nav>
          
          <div className="flex gap-3 items-center">
            <Button variant="ghost" onClick={() => navigate('/login')}>Войти</Button>
            <Button onClick={() => navigate('/register')}>Начать бесплатно</Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Запусти и автоматизируй<br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              свой бизнес за один день
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Все инструменты для создания сайтов, ботов, продвижения и обучения в одной платформе
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700" onClick={() => navigate('/register')}>
              <Icon name="Rocket" className="mr-2" />
              Запустить бизнес
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700" onClick={() => navigate('/register')}>
              <Icon name="Code" className="mr-2" />
              Создать цифровой продукт
            </Button>
          </div>

          <div className="flex justify-center gap-12 flex-wrap text-center">
            <div className="flex flex-col items-center gap-2">
              <Icon name="Sparkles" size={32} className="text-primary" />
              <div className="font-semibold">AI-помощники</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="Layers" size={32} className="text-primary" />
              <div className="font-semibold">Все в одном</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="Award" size={32} className="text-primary" />
              <div className="font-semibold">Профессионализм</div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Для кого</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Хочу запустить бизнес</h3>
              <p className="text-muted-foreground mb-6">
                Создавайте сайты, запускайте рекламу, продавайте товары — без программистов и дизайнеров
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span>Визуальные конструкторы</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span>AI-помощник для бизнеса</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span>Автоматизация маркетинга</span>
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => navigate('/register')}>
                Начать бесплатно
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                <Icon name="Code" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Создаю и продаю</h3>
              <p className="text-muted-foreground mb-6">
                Находите заказы, продавайте шаблоны и скрипты, зарабатывайте на своих навыках
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-purple-600" />
                  <span>Биржа фриланса с escrow</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-purple-600" />
                  <span>Маркетплейс шаблонов</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-purple-600" />
                  <span>Автоматические выплаты</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => navigate('/register')}>
                Начать зарабатывать
              </Button>
            </Card>
          </div>
        </section>

        <section id="capabilities" className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Возможности</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Полный набор инструментов для запуска и роста бизнеса
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {capabilities.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
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

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Как это работает</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">Для предпринимателя</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Создайте сайт</h4>
                      <p className="text-sm text-muted-foreground">AI-генератор создаст готовый сайт по вашему описанию за 5 минут</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Добавьте товары</h4>
                      <p className="text-sm text-muted-foreground">Загрузите каталог или синхронизируйте с WB/Ozon</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Настройте рекламу</h4>
                      <p className="text-sm text-muted-foreground">Готовые гайды или настройка под ключ от специалистов</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Получайте заказы</h4>
                      <p className="text-sm text-muted-foreground">Автоматизация обработки заказов и аналитика продаж</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-600">Для разработчика</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-purple-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Создайте портфолио</h4>
                      <p className="text-sm text-muted-foreground">Загрузите работы и настройте профиль разработчика</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-purple-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Получайте заказы</h4>
                      <p className="text-sm text-muted-foreground">AI подбирает заказчиков по вашим компетенциям автоматически</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Продавайте шаблоны</h4>
                      <p className="text-sm text-muted-foreground">Выкладывайте готовые решения на маркетплейс</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-purple-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Зарабатывайте</h4>
                      <p className="text-sm text-muted-foreground">Безопасные сделки через escrow, мгновенные выплаты</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Тарифы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выберите подходящий план для вашего бизнеса
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <Card className="p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-6">₽0<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
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
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Доступ к университету</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={() => navigate('/register')}>Начать</Button>
              </Card>

              <Card className="p-8 border-2 border-primary shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-6">₽990<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>10 сайтов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Безлимит чат-ботов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Расширенная аналитика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Все интеграции</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Биржа заказов</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => navigate('/register')}>Выбрать тариф</Button>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-6">₽2,990<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
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
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Персональный менеджер</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={() => navigate('/register')}>Выбрать тариф</Button>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6">Сравнение функций</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Функция</th>
                      <th className="text-center py-3 px-4">Free</th>
                      <th className="text-center py-3 px-4">Pro</th>
                      <th className="text-center py-3 px-4">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="py-3 px-4">Количество сайтов</td>
                      <td className="text-center py-3 px-4">1</td>
                      <td className="text-center py-3 px-4">10</td>
                      <td className="text-center py-3 px-4">∞</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Чат-боты</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4"><Icon name="Check" className="inline text-primary" size={18} /></td>
                      <td className="text-center py-3 px-4"><Icon name="Check" className="inline text-primary" size={18} /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Интеграции (WB/Ozon)</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4"><Icon name="Check" className="inline text-primary" size={18} /></td>
                      <td className="text-center py-3 px-4"><Icon name="Check" className="inline text-primary" size={18} /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">API доступ</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4"><Icon name="Check" className="inline text-primary" size={18} /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Белый лейбл</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4"><Icon name="Check" className="inline text-primary" size={18} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Кейсы успеха</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Истории наших пользователей
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl">
                    👨‍💼
                  </div>
                  <div>
                    <h4 className="font-bold">Алексей Иванов</h4>
                    <p className="text-sm text-muted-foreground">Онлайн-магазин обуви</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Запустил интернет-магазин за 3 дня. Первый заказ получил в первый же день работы. За месяц вышел на оборот 500 000 ₽.
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700">+250% продажи</Badge>
                  <Badge className="bg-blue-100 text-blue-700">3 дня на запуск</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                    👩‍🎨
                  </div>
                  <div>
                    <h4 className="font-bold">Мария Сидорова</h4>
                    <p className="text-sm text-muted-foreground">Дизайнер-фрилансер</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Нашла 20+ постоянных клиентов через биржу. Продала 15 шаблонов на маркетплейсе. Доход вырос в 4 раза.
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-100 text-purple-700">+400% доход</Badge>
                  <Badge className="bg-orange-100 text-orange-700">20 клиентов</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                    👨‍🏫
                  </div>
                  <div>
                    <h4 className="font-bold">Сергей Петров</h4>
                    <p className="text-sm text-muted-foreground">Эксперт по маркетингу</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Создал 5 онлайн-курсов. Автоматизировал продажи через чат-ботов. Заработал 2 млн рублей за 4 месяца.
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-yellow-100 text-yellow-700">2 млн ₽</Badge>
                  <Badge className="bg-teal-100 text-teal-700">5 курсов</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Отзывы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Что говорят наши пользователи
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{item.photo}</div>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" id="support">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl font-bold text-center mb-4">Частые вопросы</h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Ответы на популярные вопросы
            </p>
            
            <div className="mb-8">
              <Input
                placeholder="Поиск по вопросам..."
                className="max-w-md mx-auto"
              />
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к тысячам успешных предпринимателей
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6" onClick={() => navigate('/register')}>
              <Icon name="Rocket" className="mr-2" />
              Начать бесплатно
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 border-t border-border py-12" id="community">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Rocket" size={24} className="text-primary" />
                <span className="text-xl font-bold">BizForge</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для запуска и автоматизации бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">О компании</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнерам</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Документы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Оферта</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:hello@bizforge.ru" className="hover:text-primary transition-colors">hello@bizforge.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="hover:text-primary transition-colors">8 (800) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 BizForge. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;