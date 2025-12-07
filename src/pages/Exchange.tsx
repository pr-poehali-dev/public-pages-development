import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Exchange = () => {
  const orders = [
    {
      id: 1,
      title: 'Разработка лендинга для онлайн-школы',
      budget: '25000-35000',
      category: 'Сайты',
      deadline: '7 дней',
      responses: 12,
      description: 'Нужен современный лендинг для продажи онлайн-курсов. Дизайн в стиле минимализм.',
      skills: ['React', 'Tailwind', 'Figma']
    },
    {
      id: 2,
      title: 'Telegram-бот для приема заказов',
      budget: '15000-20000',
      category: 'Боты',
      deadline: '5 дней',
      responses: 8,
      description: 'Бот для ресторана с меню, корзиной и оплатой. Интеграция с ЮKassa.',
      skills: ['Python', 'Telegram API', 'Payment']
    },
    {
      id: 3,
      title: 'Настройка рекламы в Яндекс.Директ',
      budget: '10000-15000',
      category: 'Реклама',
      deadline: '3 дня',
      responses: 15,
      description: 'Настроить 3 рекламные кампании для интернет-магазина косметики.',
      skills: ['Яндекс.Директ', 'Аналитика', 'Маркетинг']
    },
    {
      id: 4,
      title: 'Наполнение каталога товарами',
      budget: '5000-8000',
      category: 'Контент',
      deadline: '10 дней',
      responses: 5,
      description: 'Добавить 100 товаров с описаниями и фото на сайт.',
      skills: ['Excel', 'Копирайтинг', 'SEO']
    }
  ];

  const myOrders = [
    {
      id: 1,
      title: 'Telegram-бот для приема заказов',
      budget: 18000,
      status: 'in_progress',
      executor: 'Алексей Смирнов',
      progress: 60
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Биржа фриланса</h1>
            <p className="text-muted-foreground">Найдите исполнителя или возьмите заказ</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Plus" className="mr-2" size={18} />
                Разместить заказ
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Разместить заказ</DialogTitle>
                <DialogDescription>Опишите задачу и получите отклики от исполнителей</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Название задачи</Label>
                  <Input placeholder="Например: Создать лендинг для услуг" />
                </div>

                <div className="space-y-2">
                  <Label>Категория</Label>
                  <select className="w-full p-2 border border-border rounded-md">
                    <option>Сайты</option>
                    <option>Боты</option>
                    <option>Реклама</option>
                    <option>Дизайн</option>
                    <option>Контент</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Описание задачи</Label>
                  <textarea
                    className="w-full p-2 border border-border rounded-md resize-none"
                    rows={5}
                    placeholder="Подробно опишите, что нужно сделать"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Бюджет (₽)</Label>
                    <div className="flex gap-2">
                      <Input type="number" placeholder="От" />
                      <Input type="number" placeholder="До" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Срок выполнения (дней)</Label>
                    <Input type="number" placeholder="7" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Требуемые навыки</Label>
                  <Input placeholder="React, Tailwind, Figma" />
                  <p className="text-xs text-muted-foreground">Укажите через запятую</p>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Отмена</Button>
                  <Button>Опубликовать заказ</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Briefcase" size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{orders.length}</div>
              <div className="text-sm text-muted-foreground">Активных заказов</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {orders.reduce((sum, o) => sum + o.responses, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Откликов</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Clock" size={24} className="text-orange-500" />
              </div>
              <div className="text-3xl font-bold mb-1">{myOrders.length}</div>
              <div className="text-sm text-muted-foreground">Мои заказы</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="DollarSign" size={24} className="text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-1">₽18,000</div>
              <div className="text-sm text-muted-foreground">В работе</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Все заказы</TabsTrigger>
            <TabsTrigger value="my-orders">Мои заказы</TabsTrigger>
            <TabsTrigger value="my-responses">Мои отклики</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Доступные заказы</CardTitle>
                  <div className="flex gap-2">
                    <Input placeholder="Поиск..." className="w-64" />
                    <Button variant="outline">
                      <Icon name="Filter" size={18} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">{order.title}</h3>
                              <Badge variant="secondary">{order.category}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-4">{order.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {order.skills.map((skill, index) => (
                                <Badge key={index} variant="outline">{skill}</Badge>
                              ))}
                            </div>

                            <div className="flex items-center gap-6 text-sm">
                              <div className="flex items-center gap-2">
                                <Icon name="DollarSign" size={16} className="text-green-600" />
                                <span className="font-semibold">₽{order.budget}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Icon name="Clock" size={16} className="text-orange-600" />
                                <span>{order.deadline}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Icon name="Users" size={16} className="text-blue-600" />
                                <span>{order.responses} откликов</span>
                              </div>
                            </div>
                          </div>

                          <Button>
                            <Icon name="Send" className="mr-2" size={16} />
                            Откликнуться
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-orders" className="space-y-4">
            {myOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{order.title}</h3>
                        <Badge>{order.status === 'in_progress' ? 'В работе' : 'Завершен'}</Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">
                            Исполнитель: <span className="font-semibold text-foreground">{order.executor}</span>
                          </span>
                          <span className="text-sm font-semibold">{order.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all" 
                            style={{ width: `${order.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="DollarSign" size={16} className="text-green-600" />
                          <span className="font-semibold">₽{order.budget.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Shield" size={16} className="text-blue-600" />
                          <span>Escrow защита</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Icon name="MessageSquare" size={16} />
                      </Button>
                      <Button variant="outline">
                        <Icon name="MoreVertical" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {myOrders.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Icon name="Briefcase" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">У вас пока нет заказов</h3>
                  <p className="text-muted-foreground mb-6">
                    Разместите первый заказ, чтобы найти исполнителя
                  </p>
                  <Button>Разместить заказ</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="my-responses">
            <Card>
              <CardContent className="p-12 text-center">
                <Icon name="Send" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Пока нет откликов</h3>
                <p className="text-muted-foreground mb-6">
                  Откликайтесь на заказы, чтобы зарабатывать на своих навыках
                </p>
                <Button variant="outline">Смотреть все заказы</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Escrow-система</CardTitle>
            <CardDescription>Безопасные сделки с гарантией оплаты</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="Lock" className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Защита средств</h4>
                <p className="text-sm text-muted-foreground">
                  Деньги хранятся на платформе до завершения работы
                </p>
              </div>

              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" className="text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Арбитраж</h4>
                <p className="text-sm text-muted-foreground">
                  Решаем споры справедливо с помощью экспертов
                </p>
              </div>

              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <Icon name="Star" className="text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Рейтинг</h4>
                <p className="text-sm text-muted-foreground">
                  Отзывы и оценки помогают выбрать исполнителя
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Exchange;
