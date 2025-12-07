import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const Marketplace = () => {
  const products = [
    {
      id: 1,
      title: 'Лендинг для онлайн-школы',
      type: 'Шаблон сайта',
      price: 2990,
      author: 'Мария Иванова',
      rating: 4.9,
      sales: 234,
      preview: 'landing'
    },
    {
      id: 2,
      title: 'Telegram-бот для ресторана',
      type: 'Шаблон бота',
      price: 1990,
      author: 'Алексей Смирнов',
      rating: 4.8,
      sales: 156,
      preview: 'bot'
    },
    {
      id: 3,
      title: 'Скрипт парсинга цен конкурентов',
      type: 'Скрипт',
      price: 4990,
      author: 'Дмитрий Козлов',
      rating: 5.0,
      sales: 89,
      preview: 'script'
    },
    {
      id: 4,
      title: 'Курс: SEO-продвижение с нуля',
      type: 'Курс',
      price: 7990,
      author: 'Елена Петрова',
      rating: 4.7,
      sales: 456,
      preview: 'course'
    },
    {
      id: 5,
      title: 'Интернет-магазин косметики',
      type: 'Шаблон сайта',
      price: 3990,
      author: 'Анна Соколова',
      rating: 4.9,
      sales: 312,
      preview: 'shop'
    },
    {
      id: 6,
      title: 'Чат-бот для записи к врачу',
      type: 'Шаблон бота',
      price: 2490,
      author: 'Игорь Волков',
      rating: 4.6,
      sales: 178,
      preview: 'medical'
    }
  ];

  const categories = [
    { name: 'Все', count: products.length },
    { name: 'Шаблоны сайтов', count: 2 },
    { name: 'Шаблоны ботов', count: 2 },
    { name: 'Скрипты', count: 1 },
    { name: 'Курсы', count: 1 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Маркетплейс</h1>
            <p className="text-muted-foreground">Готовые решения для вашего бизнеса</p>
          </div>
          <Button>
            <Icon name="Upload" className="mr-2" size={18} />
            Загрузить свой товар
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Package" size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{products.length}</div>
              <div className="text-sm text-muted-foreground">Товаров в каталоге</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="ShoppingCart" size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold mb-1">0</div>
              <div className="text-sm text-muted-foreground">Моих покупок</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Upload" size={24} className="text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-1">0</div>
              <div className="text-sm text-muted-foreground">Моих товаров</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="DollarSign" size={24} className="text-orange-500" />
              </div>
              <div className="text-3xl font-bold mb-1">₽0</div>
              <div className="text-sm text-muted-foreground">Заработано</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="catalog">
          <TabsList>
            <TabsTrigger value="catalog">Каталог</TabsTrigger>
            <TabsTrigger value="my-purchases">Мои покупки</TabsTrigger>
            <TabsTrigger value="my-products">Мои товары</TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Все товары</CardTitle>
                  <div className="flex gap-2">
                    <Input placeholder="Поиск..." className="w-64" />
                    <Button variant="outline">
                      <Icon name="Filter" size={18} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  <div className="w-48 flex-shrink-0 space-y-2">
                    <h3 className="font-semibold mb-4">Категории</h3>
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-2 rounded hover:bg-muted transition-colors flex items-center justify-between"
                      >
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs text-muted-foreground">{category.count}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <Card key={product.id} className="hover:shadow-xl transition-all cursor-pointer group">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg flex items-center justify-center">
                          <Icon name="Layout" size={48} className="text-primary/40 group-hover:scale-110 transition-transform" />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2">{product.type}</Badge>
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {product.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                            <Icon name="User" size={14} />
                            <span>{product.author}</span>
                          </div>

                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Icon name="Star" size={14} className="text-yellow-500" />
                                <span className="text-sm font-semibold">{product.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                ({product.sales} продаж)
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-border">
                            <div className="text-2xl font-bold">₽{product.price.toLocaleString()}</div>
                            <Button size="sm">
                              <Icon name="ShoppingCart" size={14} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-purchases">
            <Card>
              <CardContent className="p-12 text-center">
                <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Пока нет покупок</h3>
                <p className="text-muted-foreground mb-6">
                  Приобретите готовые решения, чтобы ускорить развитие бизнеса
                </p>
                <Button variant="outline">Смотреть каталог</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-products">
            <Card>
              <CardContent className="p-12 text-center">
                <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Загрузите свой товар</h3>
                <p className="text-muted-foreground mb-6">
                  Продавайте готовые шаблоны, скрипты и курсы
                </p>
                <Button>
                  <Icon name="Plus" className="mr-2" size={18} />
                  Добавить товар
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Как продавать на маркетплейсе</CardTitle>
            <CardDescription>Зарабатывайте на своих навыках и наработках</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-2">Создайте товар</h4>
                <p className="text-sm text-muted-foreground">
                  Шаблон, скрипт или курс
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <h4 className="font-semibold mb-2">Загрузите на платформу</h4>
                <p className="text-sm text-muted-foreground">
                  С описанием и примерами
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">Продавайте</h4>
                <p className="text-sm text-muted-foreground">
                  Получайте заказы
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-orange-600">4</span>
                </div>
                <h4 className="font-semibold mb-2">Зарабатывайте</h4>
                <p className="text-sm text-muted-foreground">
                  70% с каждой продажи
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Marketplace;
