import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const University = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<string | null>('1');
  const [aiChatOpen, setAiChatOpen] = useState(false);

  const courses = [
    {
      id: '1',
      title: 'Открытие ИП',
      description: 'Пошаговая инструкция по регистрации ИП',
      lessons: 8,
      duration: '2 часа',
      progress: 100,
      completed: true,
      icon: 'Building'
    },
    {
      id: '2',
      title: 'Бухгалтерия для чайников',
      description: 'Налоги, декларации, учет доходов',
      lessons: 12,
      duration: '3 часа',
      progress: 60,
      inProgress: true,
      icon: 'Calculator'
    },
    {
      id: '3',
      title: 'Таргетированная реклама',
      description: 'VK, Facebook, настройка и оптимизация',
      lessons: 15,
      duration: '4 часа',
      progress: 0,
      locked: false,
      icon: 'Target'
    },
    {
      id: '4',
      title: 'Продажи на маркетплейсах',
      description: 'WB, Ozon, Яндекс.Маркет',
      lessons: 18,
      duration: '5 часов',
      progress: 0,
      locked: false,
      icon: 'ShoppingBag'
    },
    {
      id: '5',
      title: 'Маркетинг',
      description: 'Стратегии продвижения и роста',
      lessons: 14,
      duration: '3.5 часа',
      progress: 0,
      locked: false,
      icon: 'TrendingUp'
    },
    {
      id: '6',
      title: 'Продажи',
      description: 'Техники продаж и работа с возражениями',
      lessons: 16,
      duration: '4 часа',
      progress: 0,
      locked: false,
      icon: 'Handshake'
    }
  ];

  const courseLessons = [
    { id: '1', title: 'Введение в курс', duration: '10 мин', completed: true },
    { id: '2', title: 'Выбор ОКВЭД', duration: '15 мин', completed: true },
    { id: '3', title: 'Документы для регистрации', duration: '20 мин', completed: true },
    { id: '4', title: 'Системы налогообложения', duration: '25 мин', completed: true },
    { id: '5', title: 'Подача заявления', duration: '18 мин', completed: true },
    { id: '6', title: 'Открытие расчетного счета', duration: '12 мин', inProgress: true },
    { id: '7', title: 'Онлайн-касса', duration: '20 мин', locked: true },
    { id: '8', title: 'Итоговый тест', duration: '15 мин', locked: true }
  ];

  const dailyPlan = [
    { task: 'Пройти урок "Открытие расчетного счета"', completed: false },
    { task: 'Изучить материалы про онлайн-кассы', completed: false },
    { task: 'Пройти итоговый тест курса', completed: false }
  ];

  const aiMessages = [
    { sender: 'ai', text: 'Здравствуйте! Я AI-консультант университета. Чем могу помочь?', time: '10:00' },
    { sender: 'me', text: 'Какие ОКВЭДы выбрать для интернет-магазина?', time: '10:02' },
    { sender: 'ai', text: 'Для интернет-магазина рекомендую:\n- 47.91 "Торговля розничная по почте или по информационно-коммуникационной сети Интернет"\n- 47.19 "Торговля розничная прочая в неспециализированных магазинах"\n\nПервый — основной для онлайн-торговли.', time: '10:03' }
  ];

  return (
    <div className="h-screen flex bg-muted/30">
      <aside className="w-80 bg-white border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate('/dashboard')}>
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            На главную
          </Button>
          <h2 className="text-2xl font-bold mb-1">Университет</h2>
          <p className="text-sm text-muted-foreground">Обучение для предпринимателей</p>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  selectedCourse === course.id
                    ? 'bg-primary/10 border-2 border-primary'
                    : 'hover:bg-muted/50 border-2 border-transparent'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    course.completed
                      ? 'bg-green-100'
                      : course.inProgress
                      ? 'bg-blue-100'
                      : 'bg-gray-100'
                  }`}>
                    <Icon
                      name={course.icon}
                      size={20}
                      className={
                        course.completed
                          ? 'text-green-600'
                          : course.inProgress
                          ? 'text-blue-600'
                          : 'text-gray-400'
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm truncate">{course.title}</h4>
                      {course.completed && (
                        <Icon name="CheckCircle2" size={16} className="text-green-600 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{course.lessons} уроков • {course.duration}</p>
                    {course.progress > 0 && (
                      <div>
                        <Progress value={course.progress} className="h-1.5" />
                        <p className="text-xs text-muted-foreground mt-1">{course.progress}%</p>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-6 bg-white border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">Бухгалтерия для чайников</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="BookOpen" size={16} />
                  12 уроков
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  3 часа
                </span>
                <Badge className="bg-blue-100 text-blue-700">В процессе</Badge>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Прогресс курса</div>
              <div className="flex items-center gap-3">
                <Progress value={60} className="w-32" />
                <span className="text-lg font-bold">60%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex">
          <div className="flex-1 overflow-y-auto p-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>О курсе</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  В этом курсе вы изучите основы бухгалтерского учета для индивидуальных предпринимателей.
                  Научитесь правильно вести учет доходов и расходов, заполнять декларации и платить налоги.
                </p>
                <div className="flex gap-2">
                  <Button>
                    <Icon name="Play" className="mr-2" size={16} />
                    Продолжить обучение
                  </Button>
                  <Button variant="outline">
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать материалы
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Уроки курса</CardTitle>
                <CardDescription>8 уроков • Прогресс: 5/8</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {courseLessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                        lesson.locked
                          ? 'border-border bg-muted/30 cursor-not-allowed'
                          : lesson.inProgress
                          ? 'border-blue-500 bg-blue-50/50 hover:bg-blue-50'
                          : lesson.completed
                          ? 'border-green-500 bg-green-50/50 hover:bg-green-50'
                          : 'border-border hover:bg-muted/50'
                      }`}
                      disabled={lesson.locked}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          lesson.locked
                            ? 'bg-gray-200'
                            : lesson.inProgress
                            ? 'bg-blue-100'
                            : lesson.completed
                            ? 'bg-green-100'
                            : 'bg-gray-100'
                        }`}>
                          <Icon
                            name={lesson.locked ? 'Lock' : lesson.completed ? 'CheckCircle2' : lesson.inProgress ? 'Play' : 'Circle'}
                            size={20}
                            className={
                              lesson.locked
                                ? 'text-gray-400'
                                : lesson.inProgress
                                ? 'text-blue-600'
                                : lesson.completed
                                ? 'text-green-600'
                                : 'text-gray-400'
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{lesson.title}</h4>
                          <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                        </div>
                        {lesson.inProgress && (
                          <Badge className="bg-blue-100 text-blue-700">Текущий</Badge>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" />
                  Сертификат
                </CardTitle>
                <CardDescription>Получите сертификат после прохождения всех уроков</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-6 border-2 border-dashed border-border rounded-lg text-center bg-muted/30">
                  <Icon name="Award" size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Завершите все уроки и пройдите тест для получения сертификата
                  </p>
                  <Button disabled>
                    <Icon name="Lock" className="mr-2" size={16} />
                    Сертификат заблокирован
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="w-80 border-l border-border bg-white p-6 overflow-y-auto">
            <Card className="mb-6 border-primary/50">
              <CardHeader>
                <CardTitle className="text-lg">Дневной план</CardTitle>
                <CardDescription>День 2: Изучение бухгалтерии</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dailyPlan.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        checked={item.completed}
                        className="mt-1"
                        readOnly
                      />
                      <span className={`text-sm ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {item.task}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon name="Sparkles" />
                  AI-консультант
                </CardTitle>
                <CardDescription>Помощник по обучению</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => setAiChatOpen(!aiChatOpen)}>
                  <Icon name="MessageSquare" className="mr-2" size={16} />
                  Открыть чат
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      {aiChatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border-2 border-border flex flex-col z-50">
          <div className="p-4 border-b border-border flex items-center justify-between bg-primary text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={20} />
              <h3 className="font-semibold">AI-консультант</h3>
            </div>
            <button onClick={() => setAiChatOpen(false)}>
              <Icon name="X" size={20} />
            </button>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {aiMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'me' ? 'bg-primary text-white' : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                    <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input placeholder="Задайте вопрос..." />
              <Button size="icon">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default University;
