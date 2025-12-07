import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const University = () => {
  const courses = [
    {
      id: 1,
      title: 'Основы предпринимательства',
      description: 'Открытие ИП, выбор системы налогообложения, первые шаги',
      lessons: 12,
      duration: '3 часа',
      progress: 75,
      category: 'Бизнес',
      level: 'Начальный'
    },
    {
      id: 2,
      title: 'Контекстная реклама',
      description: 'Настройка Яндекс.Директ, оптимизация кампаний, аналитика',
      lessons: 15,
      duration: '4 часа',
      progress: 40,
      category: 'Маркетинг',
      level: 'Средний'
    },
    {
      id: 3,
      title: 'Бухгалтерия для начинающих',
      description: 'Налоги, декларации, учет доходов и расходов',
      lessons: 10,
      duration: '2.5 часа',
      progress: 0,
      category: 'Финансы',
      level: 'Начальный'
    },
    {
      id: 4,
      title: 'Маркетплейсы: WB и Ozon',
      description: 'Выход на маркетплейсы, карточки товаров, логистика',
      lessons: 18,
      duration: '5 часов',
      progress: 0,
      category: 'Продажи',
      level: 'Средний'
    }
  ];

  const currentLesson = {
    course: 'Контекстная реклама',
    lesson: 7,
    title: 'Стратегии назначения ставок',
    progress: 65
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Университет</h1>
            <p className="text-muted-foreground">Образовательный хаб для предпринимателей</p>
          </div>
          <Button>
            <Icon name="Search" className="mr-2" size={18} />
            Найти курс
          </Button>
        </div>

        {currentLesson.progress > 0 && (
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>Продолжить обучение</Badge>
                    <span className="text-sm text-muted-foreground">{currentLesson.course}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Урок {currentLesson.lesson}: {currentLesson.title}
                  </h3>
                  <Progress value={currentLesson.progress} className="mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Завершено {currentLesson.progress}% урока
                  </p>
                </div>
                <Button>
                  <Icon name="Play" className="mr-2" size={18} />
                  Продолжить
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{courses.length}</div>
              <div className="text-sm text-muted-foreground">Доступных курсов</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="GraduationCap" size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold mb-1">2</div>
              <div className="text-sm text-muted-foreground">Курсов в процессе</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Award" size={24} className="text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-1">0</div>
              <div className="text-sm text-muted-foreground">Сертификатов</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Все курсы</TabsTrigger>
            <TabsTrigger value="in-progress">В процессе</TabsTrigger>
            <TabsTrigger value="completed">Завершенные</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="GraduationCap" size={48} className="text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                          <p className="text-muted-foreground mb-3">{course.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Icon name="BookOpen" size={16} />
                              <span>{course.lessons} уроков</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Clock" size={16} />
                              <span>{course.duration}</span>
                            </div>
                            <Badge variant="outline">{course.level}</Badge>
                            <Badge variant="secondary">{course.category}</Badge>
                          </div>
                        </div>
                      </div>

                      {course.progress > 0 && (
                        <div className="mb-4">
                          <Progress value={course.progress} className="mb-2" />
                          <p className="text-sm text-muted-foreground">Прогресс: {course.progress}%</p>
                        </div>
                      )}

                      <Button variant={course.progress > 0 ? "default" : "outline"}>
                        <Icon name={course.progress > 0 ? "Play" : "BookOpen"} className="mr-2" size={16} />
                        {course.progress > 0 ? 'Продолжить' : 'Начать курс'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-4">
            {courses.filter(c => c.progress > 0).map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="GraduationCap" size={48} className="text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-muted-foreground mb-3">{course.description}</p>
                      
                      <div className="mb-4">
                        <Progress value={course.progress} className="mb-2" />
                        <p className="text-sm text-muted-foreground">Прогресс: {course.progress}%</p>
                      </div>

                      <Button>
                        <Icon name="Play" className="mr-2" size={16} />
                        Продолжить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {courses.filter(c => c.progress > 0).length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Нет курсов в процессе</h3>
                  <p className="text-muted-foreground">Начните обучение из списка доступных курсов</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="completed">
            <Card>
              <CardContent className="p-12 text-center">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Пока нет завершенных курсов</h3>
                <p className="text-muted-foreground mb-6">
                  Завершите курс, чтобы получить сертификат
                </p>
                <Button variant="outline">
                  Посмотреть все курсы
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>AI-Консультант</CardTitle>
                <CardDescription>Получите помощь по материалам курсов</CardDescription>
              </div>
              <Icon name="Bot" size={24} className="text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <Icon name="MessageSquare" className="text-primary mt-1" />
                  <div>
                    <p className="text-sm mb-3">
                      Здравствуйте! Я AI-помощник. Могу ответить на вопросы по материалам курсов или подсказать, с чего начать обучение.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Button variant="outline" size="sm">
                        Как выбрать налоговый режим?
                      </Button>
                      <Button variant="outline" size="sm">
                        Что такое CTR в рекламе?
                      </Button>
                      <Button variant="outline" size="sm">
                        С какого курса начать?
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Задайте вопрос AI-консультанту..."
                  className="flex-1 p-3 border border-border rounded-lg"
                />
                <Button>
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default University;
