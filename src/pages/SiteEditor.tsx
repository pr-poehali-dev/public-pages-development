import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const SiteEditor = () => {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  const blockCategories = [
    {
      name: 'Заголовки',
      blocks: [
        { id: 'hero-1', name: 'Hero с фоном', icon: 'Sparkles' },
        { id: 'hero-2', name: 'Hero с изображением', icon: 'Image' },
        { id: 'header-1', name: 'Простой заголовок', icon: 'Type' }
      ]
    },
    {
      name: 'Контент',
      blocks: [
        { id: 'text-1', name: 'Текстовый блок', icon: 'FileText' },
        { id: 'features-1', name: 'Сетка возможностей', icon: 'Grid3x3' },
        { id: 'cta-1', name: 'Призыв к действию', icon: 'MousePointerClick' }
      ]
    },
    {
      name: 'Формы',
      blocks: [
        { id: 'form-1', name: 'Контактная форма', icon: 'Mail' },
        { id: 'form-2', name: 'Форма подписки', icon: 'BellRing' },
        { id: 'form-3', name: 'Форма заказа', icon: 'ShoppingCart' }
      ]
    }
  ];

  const templates = [
    { id: 1, name: 'Лендинг услуг', preview: 'landing', category: 'Бизнес' },
    { id: 2, name: 'Интернет-магазин', preview: 'shop', category: 'Ecommerce' },
    { id: 3, name: 'Блог', preview: 'blog', category: 'Контент' },
    { id: 4, name: 'Портфолио', preview: 'portfolio', category: 'Креатив' }
  ];

  return (
    <DashboardLayout>
      <div className="flex gap-6 h-[calc(100vh-4rem)]">
        <Card className="w-80 flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="Layers" size={20} />
              Библиотека
            </h2>
          </div>

          <Tabs defaultValue="blocks" className="flex-1 flex flex-col">
            <TabsList className="mx-4 mt-4">
              <TabsTrigger value="blocks" className="flex-1">Блоки</TabsTrigger>
              <TabsTrigger value="templates" className="flex-1">Шаблоны</TabsTrigger>
            </TabsList>

            <TabsContent value="blocks" className="flex-1 mt-0">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-6">
                  {blockCategories.map((category) => (
                    <div key={category.name}>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                        {category.name}
                      </h3>
                      <div className="space-y-2">
                        {category.blocks.map((block) => (
                          <button
                            key={block.id}
                            onClick={() => setSelectedBlock(block.id)}
                            className="w-full p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left flex items-center gap-3 group"
                          >
                            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Icon name={block.icon} size={20} className="text-primary" />
                            </div>
                            <span className="text-sm font-medium">{block.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="templates" className="flex-1 mt-0">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-3">
                  {templates.map((template) => (
                    <Card key={template.id} className="p-4 hover:shadow-md transition-all cursor-pointer group">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-3 flex items-center justify-center">
                        <Icon name="Layout" size={32} className="text-primary/40" />
                      </div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {template.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{template.category}</p>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Input
                placeholder="Название сайта"
                defaultValue="Новый сайт"
                className="w-64"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Eye" className="mr-2" size={16} />
                Предпросмотр
              </Button>
              <Button size="sm">
                <Icon name="Save" className="mr-2" size={16} />
                Сохранить
              </Button>
              <Button size="sm">
                <Icon name="Rocket" className="mr-2" size={16} />
                Опубликовать
              </Button>
            </div>
          </div>

          <div className="flex-1 bg-muted/20 p-8 overflow-auto">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg min-h-[800px] p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Перетащите блоки сюда
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Выберите блоки из библиотеки слева или начните с готового шаблона
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-12">
                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name="MousePointerClick" className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Drag & Drop</h3>
                    <p className="text-sm text-muted-foreground">
                      Перетаскивайте блоки на страницу
                    </p>
                  </Card>

                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name="Palette" className="text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">Настройка стилей</h3>
                    <p className="text-sm text-muted-foreground">
                      Изменяйте цвета и шрифты
                    </p>
                  </Card>

                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                      <Icon name="Smartphone" className="text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Адаптивность</h3>
                    <p className="text-sm text-muted-foreground">
                      Автоматическая адаптация под экраны
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-80 flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="Settings" size={20} />
              Настройки
            </h2>
          </div>

          <Tabs defaultValue="content" className="flex-1 flex flex-col">
            <TabsList className="mx-4 mt-4">
              <TabsTrigger value="content" className="flex-1">Контент</TabsTrigger>
              <TabsTrigger value="style" className="flex-1">Стили</TabsTrigger>
              <TabsTrigger value="seo" className="flex-1">SEO</TabsTrigger>
            </TabsList>

            <ScrollArea className="flex-1">
              <TabsContent value="content" className="p-4 space-y-4">
                {selectedBlock ? (
                  <>
                    <div className="space-y-2">
                      <Label>Заголовок</Label>
                      <Input placeholder="Введите заголовок" />
                    </div>
                    <div className="space-y-2">
                      <Label>Текст</Label>
                      <textarea
                        className="w-full p-2 border border-border rounded-md resize-none"
                        rows={4}
                        placeholder="Введите текст"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Изображение</Label>
                      <Button variant="outline" className="w-full">
                        <Icon name="Upload" className="mr-2" size={16} />
                        Загрузить
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <Icon name="MousePointerClick" size={32} className="mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Выберите элемент для настройки</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="style" className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label>Цвет фона</Label>
                  <div className="flex gap-2">
                    <Input type="color" defaultValue="#0EA5E9" className="w-16 h-10" />
                    <Input defaultValue="#0EA5E9" className="flex-1" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Шрифт</Label>
                  <select className="w-full p-2 border border-border rounded-md">
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Montserrat</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Размер текста</Label>
                  <Input type="number" defaultValue="16" />
                </div>
              </TabsContent>

              <TabsContent value="seo" className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label>Мета-заголовок</Label>
                  <Input placeholder="Заголовок для поисковиков" />
                </div>
                <div className="space-y-2">
                  <Label>Мета-описание</Label>
                  <textarea
                    className="w-full p-2 border border-border rounded-md resize-none"
                    rows={3}
                    placeholder="Описание для поисковиков"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Ключевые слова</Label>
                  <Input placeholder="keyword1, keyword2, keyword3" />
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SiteEditor;
