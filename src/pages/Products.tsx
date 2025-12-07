import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [addProductOpen, setAddProductOpen] = useState(false);

  const products = [
    {
      id: '1',
      name: 'Органический кофе Арабика',
      photo: '☕',
      price: 890,
      status: 'active',
      views: 1234,
      purchases: 45,
      reviews: { count: 12, rating: 4.5 },
      marketplaces: ['wb', 'ozon', 'yandex'],
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: '2',
      name: 'Набор чая премиум',
      photo: '🍵',
      price: 1290,
      status: 'moderation',
      views: 567,
      purchases: 18,
      reviews: { count: 5, rating: 4.8 },
      marketplaces: ['wb'],
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: '3',
      name: 'Кофейные капсулы',
      photo: '🧃',
      price: 450,
      status: 'hidden',
      views: 89,
      purchases: 3,
      reviews: { count: 2, rating: 4.0 },
      marketplaces: [],
      statusColor: 'bg-gray-100 text-gray-700'
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Базовый',
      price: 5000,
      features: [
        'Размещение на 1 маркетплейсе',
        'Оптимизация карточки товара',
        'Базовая аналитика',
        'Поддержка 14 дней'
      ]
    },
    {
      id: 'standard',
      name: 'Стандарт',
      price: 12000,
      features: [
        'Размещение на 2-3 маркетплейсах',
        'Создание контента (фото, описания)',
        'Продвинутая аналитика',
        'A/B тестирование',
        'Поддержка 30 дней'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: 25000,
      features: [
        'Размещение на всех маркетплейсах',
        'Профессиональная фотосессия',
        'SEO-оптимизация',
        'Управление отзывами',
        'Персональный менеджер',
        'Поддержка 90 дней'
      ]
    }
  ];

  const filteredProducts = products.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'marketplaces') return p.marketplaces.length > 0;
    if (filter === 'site') return p.marketplaces.length === 0;
    return true;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Мои товары</h1>
            <p className="text-muted-foreground">Управление каталогом товаров</p>
          </div>
          <Dialog open={addProductOpen} onOpenChange={setAddProductOpen}>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Plus" className="mr-2" size={18} />
                Добавить товар
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Добавить товар</DialogTitle>
                <DialogDescription>Заполните информацию о товаре</DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="main">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="main">Основное</TabsTrigger>
                  <TabsTrigger value="photos">Фото</TabsTrigger>
                  <TabsTrigger value="prices">Цены</TabsTrigger>
                  <TabsTrigger value="marketplaces">Маркетплейсы</TabsTrigger>
                </TabsList>

                <TabsContent value="main" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Название товара</Label>
                    <Input placeholder="Например: Органический кофе Арабика" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Описание</Label>
                    <textarea
                      className="w-full p-3 border border-border rounded-md resize-none"
                      rows={5}
                      placeholder="Подробное описание товара..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Категория</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="food">Продукты питания</SelectItem>
                        <SelectItem value="drinks">Напитки</SelectItem>
                        <SelectItem value="accessories">Аксессуары</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Теги</Label>
                    <Input placeholder="кофе, органический, премиум" />
                    <p className="text-xs text-muted-foreground">Разделяйте теги запятой</p>
                  </div>
                </TabsContent>

                <TabsContent value="photos" className="space-y-4 mt-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm font-medium mb-1">Перетащите изображения или нажмите для выбора</p>
                    <p className="text-xs text-muted-foreground">До 10 фотографий, JPG или PNG, до 5 МБ каждое</p>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center relative group">
                        <Icon name="Image" size={32} className="text-muted-foreground" />
                        <button className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Icon name="X" size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="prices" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Цена на сайте</Label>
                    <div className="flex gap-2">
                      <Input type="number" placeholder="1000" />
                      <Select defaultValue="rub">
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rub">₽</SelectItem>
                          <SelectItem value="usd">$</SelectItem>
                          <SelectItem value="eur">€</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Цена на Wildberries</Label>
                    <Input type="number" placeholder="890" />
                    <p className="text-xs text-muted-foreground">С учетом комиссии маркетплейса</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Цена на Ozon</Label>
                    <Input type="number" placeholder="920" />
                  </div>

                  <div className="space-y-2">
                    <Label>Себестоимость (опционально)</Label>
                    <Input type="number" placeholder="500" />
                    <p className="text-xs text-muted-foreground">Для расчета прибыли</p>
                  </div>
                </TabsContent>

                <TabsContent value="marketplaces" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center">
                              <Icon name="ShoppingBag" className="text-purple-600" />
                            </div>
                            <div>
                              <div className="font-semibold">Wildberries</div>
                              <div className="text-xs text-muted-foreground">Не подключен</div>
                            </div>
                          </div>
                          <Button size="sm">Добавить</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center">
                              <Icon name="ShoppingCart" className="text-blue-600" />
                            </div>
                            <div>
                              <div className="font-semibold">Ozon</div>
                              <div className="text-xs text-muted-foreground">Не подключен</div>
                            </div>
                          </div>
                          <Button size="sm">Добавить</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-red-100 flex items-center justify-center">
                              <Icon name="Store" className="text-red-600" />
                            </div>
                            <div>
                              <div className="font-semibold">Яндекс.Маркет</div>
                              <div className="text-xs text-muted-foreground">Не подключен</div>
                            </div>
                          </div>
                          <Button size="sm">Добавить</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Info" size={16} />
                      Автоматическое отслеживание
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      После подключения мы будем автоматически отслеживать продажи, отзывы и остатки на маркетплейсах
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex gap-2 pt-4">
                <Button className="flex-1">Сохранить</Button>
                <Button variant="outline" onClick={() => setAddProductOpen(false)}>Отмена</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            Все
          </Button>
          <Button
            variant={filter === 'marketplaces' ? 'default' : 'outline'}
            onClick={() => setFilter('marketplaces')}
          >
            На маркетплейсах
          </Button>
          <Button
            variant={filter === 'site' ? 'default' : 'outline'}
            onClick={() => setFilter('site')}
          >
            Только на сайте
          </Button>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl flex-shrink-0">
                      {product.photo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1 truncate">{product.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">₽{product.price}</div>
                      <Badge className={product.statusColor}>
                        {product.status === 'active' && 'Активен'}
                        {product.status === 'moderation' && 'На модерации'}
                        {product.status === 'hidden' && 'Скрыт'}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Просмотры</div>
                      <div className="font-semibold">{product.views}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Покупки</div>
                      <div className="font-semibold">{product.purchases}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Отзывы</div>
                      <div className="font-semibold flex items-center gap-1">
                        {product.reviews.count}
                        <Icon name="Star" size={12} className="text-yellow-500 fill-yellow-500" />
                        {product.reviews.rating}
                      </div>
                    </div>
                  </div>

                  {product.marketplaces.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {product.marketplaces.includes('wb') && (
                        <Badge variant="outline" className="text-xs">WB</Badge>
                      )}
                      {product.marketplaces.includes('ozon') && (
                        <Badge variant="outline" className="text-xs">Ozon</Badge>
                      )}
                      {product.marketplaces.includes('yandex') && (
                        <Badge variant="outline" className="text-xs">Я.Маркет</Badge>
                      )}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Edit" className="mr-2" size={14} />
                      Редактировать
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="BarChart3" size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Icon name="Trash2" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Icon name="Package" size={48} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">У вас пока нет товаров</h3>
              <p className="text-muted-foreground mb-6">Добавьте первый товар и начните продавать</p>
              <Button onClick={() => setAddProductOpen(true)}>
                <Icon name="Plus" className="mr-2" size={18} />
                Добавить первый товар
              </Button>
            </div>
          </Card>
        )}

        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle>Услуги под ключ</CardTitle>
            <CardDescription>
              Профессиональные товароведы разместят и оптимизируют ваши товары на маркетплейсах
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative ${pkg.popular ? 'border-2 border-primary shadow-lg' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </div>
              )}
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <div className="text-3xl font-bold mt-2">₽{pkg.price.toLocaleString()}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Products;
