import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Крем для лица увлажняющий',
      price: 1290,
      stock: 45,
      sold: 128,
      status: 'active',
      marketplaces: ['wb', 'ozon']
    },
    {
      id: 2,
      name: 'Сыворотка для волос',
      price: 890,
      stock: 0,
      sold: 67,
      status: 'out_of_stock',
      marketplaces: ['wb']
    },
    {
      id: 3,
      name: 'Маска для лица',
      price: 1590,
      stock: 23,
      sold: 89,
      status: 'active',
      marketplaces: ['ozon']
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Мои товары</h1>
            <p className="text-muted-foreground">Управляйте каталогом товаров</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Plus" className="mr-2" size={18} />
                Добавить товар
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Добавить новый товар</DialogTitle>
                <DialogDescription>Заполните информацию о товаре</DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="basic" className="mt-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic">Основное</TabsTrigger>
                  <TabsTrigger value="photos">Фото</TabsTrigger>
                  <TabsTrigger value="pricing">Цены</TabsTrigger>
                  <TabsTrigger value="marketplaces">Маркетплейсы</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Название товара</Label>
                    <Input placeholder="Введите название" />
                  </div>
                  <div className="space-y-2">
                    <Label>Описание</Label>
                    <textarea
                      className="w-full p-2 border border-border rounded-md resize-none"
                      rows={4}
                      placeholder="Опишите товар"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Категория</Label>
                      <select className="w-full p-2 border border-border rounded-md">
                        <option>Косметика</option>
                        <option>Одежда</option>
                        <option>Электроника</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Артикул</Label>
                      <Input placeholder="SKU-12345" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="photos" className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Перетащите фото сюда или нажмите для выбора
                    </p>
                    <Button variant="outline">
                      Выбрать файлы
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Рекомендуемый размер: 1000x1000px. Форматы: JPG, PNG
                  </p>
                </TabsContent>

                <TabsContent value="pricing" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Цена</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label>Старая цена</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Количество на складе</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label>Себестоимость</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                </TabsContent>

                <TabsContent value="marketplaces" className="space-y-4">
                  <div className="space-y-3">
                    <Card className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center">
                            <Icon name="ShoppingBag" className="text-purple-600" />
                          </div>
                          <div>
                            <div className="font-semibold">Wildberries</div>
                            <div className="text-xs text-muted-foreground">Подключить товар</div>
                          </div>
                        </div>
                        <input type="checkbox" className="w-5 h-5" />
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center">
                            <Icon name="Package" className="text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold">Ozon</div>
                            <div className="text-xs text-muted-foreground">Подключить товар</div>
                          </div>
                        </div>
                        <input type="checkbox" className="w-5 h-5" />
                      </div>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline">Отмена</Button>
                <Button>Сохранить товар</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Package" size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{products.length}</div>
              <div className="text-sm text-muted-foreground">Всего товаров</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="CheckCircle" size={24} className="text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {products.filter(p => p.status === 'active').length}
              </div>
              <div className="text-sm text-muted-foreground">В наличии</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="AlertCircle" size={24} className="text-orange-500" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {products.filter(p => p.status === 'out_of_stock').length}
              </div>
              <div className="text-sm text-muted-foreground">Нет в наличии</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon name="ShoppingCart" size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {products.reduce((sum, p) => sum + p.sold, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Продано</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Каталог товаров</CardTitle>
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
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                          <Icon name="Image" size={32} className="text-primary/40" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                              <div className="flex items-center gap-3">
                                <Badge variant={product.status === 'active' ? 'default' : 'secondary'}>
                                  {product.status === 'active' ? 'В наличии' : 'Нет в наличии'}
                                </Badge>
                                <div className="flex gap-2">
                                  {product.marketplaces.includes('wb') && (
                                    <div className="w-6 h-6 rounded bg-purple-100 flex items-center justify-center">
                                      <span className="text-xs font-bold text-purple-600">WB</span>
                                    </div>
                                  )}
                                  {product.marketplaces.includes('ozon') && (
                                    <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
                                      <span className="text-xs font-bold text-blue-600">OZ</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold mb-1">₽{product.price}</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">На складе</div>
                              <div className="font-semibold">{product.stock} шт</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">Продано</div>
                              <div className="font-semibold">{product.sold} шт</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">Выручка</div>
                              <div className="font-semibold">₽{(product.price * product.sold).toLocaleString()}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Copy" size={16} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Интеграция с маркетплейсами</CardTitle>
            <CardDescription>Подключите маркетплейсы для автоматической синхронизации</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-purple-100 flex items-center justify-center">
                      <Icon name="ShoppingBag" className="text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Wildberries</div>
                      <div className="text-sm text-green-600">Подключен</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Синхронизировано 2 товара
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Настроить
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-blue-100 flex items-center justify-center">
                      <Icon name="Package" className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Ozon</div>
                      <div className="text-sm text-green-600">Подключен</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Синхронизировано 2 товара
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Настроить
                </Button>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Products;
