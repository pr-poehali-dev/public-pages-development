import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const SiteEditor = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('Новый сайт');
  const [isEditingName, setIsEditingName] = useState(false);
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const pages = [
    { id: '1', name: 'Главная', path: '/', active: true },
    { id: '2', name: 'О нас', path: '/about', active: false },
    { id: '3', name: 'Контакты', path: '/contact', active: false }
  ];

  const blocks = [
    { id: 'hero', name: 'Заголовок', icon: 'Heading1' },
    { id: 'text', name: 'Текст', icon: 'Type' },
    { id: 'image', name: 'Изображение', icon: 'Image' },
    { id: 'gallery', name: 'Галерея', icon: 'Images' },
    { id: 'form', name: 'Форма', icon: 'Mail' },
    { id: 'button', name: 'Кнопка', icon: 'MousePointerClick' },
    { id: 'video', name: 'Видео', icon: 'Video' },
    { id: 'map', name: 'Карта', icon: 'Map' },
    { id: 'reviews', name: 'Отзывы', icon: 'MessageSquare' },
    { id: 'pricing', name: 'Цены', icon: 'DollarSign' },
    { id: 'faq', name: 'FAQ', icon: 'HelpCircle' }
  ];

  const templates = [
    { id: '1', name: 'Лендинг бизнеса', preview: '🏢' },
    { id: '2', name: 'Интернет-магазин', preview: '🛒' },
    { id: '3', name: 'Портфолио', preview: '🎨' },
    { id: '4', name: 'Блог', preview: '📝' }
  ];

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="h-16 border-b border-border bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
            <Icon name="ArrowLeft" size={20} />
          </Button>
          
          {isEditingName ? (
            <Input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              onBlur={() => setIsEditingName(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsEditingName(false)}
              className="w-64"
              autoFocus
            />
          ) : (
            <button
              onClick={() => setIsEditingName(true)}
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              {projectName}
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-border rounded-lg p-1">
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('desktop')}
            >
              <Icon name="Monitor" size={16} />
            </Button>
            <Button
              variant={viewMode === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('tablet')}
            >
              <Icon name="Tablet" size={16} />
            </Button>
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('mobile')}
            >
              <Icon name="Smartphone" size={16} />
            </Button>
          </div>

          <Button variant="outline" size="sm">
            <Icon name="Eye" className="mr-2" size={16} />
            Предпросмотр
          </Button>
          <Button size="sm">
            <Icon name="Save" className="mr-2" size={16} />
            Сохранить
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Icon name="Rocket" className="mr-2" size={16} />
            Публиковать
          </Button>

          <Button variant="ghost" size="icon">
            <Icon name="Settings" size={20} />
          </Button>

          <button onClick={() => navigate('/dashboard/settings')} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
            ИП
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {leftPanelOpen && (
          <aside className="w-64 border-r border-border bg-white flex flex-col">
            <Tabs defaultValue="pages" className="flex-1 flex flex-col">
              <div className="p-3 border-b border-border">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="pages" className="text-xs">Страницы</TabsTrigger>
                  <TabsTrigger value="blocks" className="text-xs">Блоки</TabsTrigger>
                  <TabsTrigger value="templates" className="text-xs">Шаблоны</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="pages" className="flex-1 m-0">
                <ScrollArea className="h-full">
                  <div className="p-3 space-y-2">
                    {pages.map((page) => (
                      <button
                        key={page.id}
                        className={`w-full p-3 text-left rounded-lg transition-colors ${
                          page.active
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'hover:bg-muted/50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon name="FileText" size={16} />
                          <span className="font-medium text-sm">{page.name}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{page.path}</div>
                      </button>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="Plus" className="mr-2" size={14} />
                      Добавить страницу
                    </Button>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="blocks" className="flex-1 m-0">
                <ScrollArea className="h-full">
                  <div className="p-3">
                    <div className="space-y-2">
                      {blocks.map((block) => (
                        <button
                          key={block.id}
                          draggable
                          onDragStart={(e) => e.dataTransfer.setData('blockId', block.id)}
                          className="w-full p-3 border border-border rounded-lg hover:bg-muted/50 hover:border-primary/50 transition-all text-left flex items-center gap-3 group cursor-move"
                        >
                          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon name={block.icon} size={18} className="text-primary" />
                          </div>
                          <span className="text-sm font-medium">{block.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="templates" className="flex-1 m-0">
                <ScrollArea className="h-full">
                  <div className="p-3 space-y-3">
                    {templates.map((template) => (
                      <Card key={template.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-3 flex items-center justify-center text-4xl">
                          {template.preview}
                        </div>
                        <h4 className="font-medium text-sm">{template.name}</h4>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>

            <div className="p-3 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-primary"
                onClick={() => {}}
              >
                <Icon name="Sparkles" className="mr-2" size={16} />
                Сгенерировать через AI
              </Button>
            </div>
          </aside>
        )}

        <main className="flex-1 bg-muted/30 flex flex-col">
          <div className="p-4 border-b border-border bg-white flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLeftPanelOpen(!leftPanelOpen)}
            >
              <Icon name={leftPanelOpen ? 'PanelLeftClose' : 'PanelLeftOpen'} size={18} />
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Масштаб:</span>
              <Button variant="ghost" size="sm">50%</Button>
              <Button variant="ghost" size="sm">75%</Button>
              <Button variant="ghost" size="sm" className="font-semibold">100%</Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setRightPanelOpen(!rightPanelOpen)}
            >
              <Icon name={rightPanelOpen ? 'PanelRightClose' : 'PanelRightOpen'} size={18} />
            </Button>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-8 flex justify-center">
              <div
                className={`bg-white shadow-xl transition-all ${
                  viewMode === 'desktop'
                    ? 'w-full max-w-6xl'
                    : viewMode === 'tablet'
                    ? 'w-[768px]'
                    : 'w-[375px]'
                }`}
                style={{ minHeight: '800px' }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const blockId = e.dataTransfer.getData('blockId');
                  console.log('Dropped block:', blockId);
                }}
              >
                <div className="p-8 text-center text-muted-foreground">
                  <Icon name="MousePointer2" size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Перетащите блоки сюда или используйте AI-генерацию</p>
                  <Button className="mt-4" onClick={() => {}}>
                    <Icon name="Sparkles" className="mr-2" size={16} />
                    Создать страницу через AI
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </main>

        {rightPanelOpen && (
          <aside className="w-80 border-l border-border bg-white flex flex-col">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold">Свойства элемента</h3>
            </div>

            {selectedElement ? (
              <Tabs defaultValue="content" className="flex-1 flex flex-col">
                <div className="px-3 pt-3">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="content" className="text-xs">Контент</TabsTrigger>
                    <TabsTrigger value="style" className="text-xs">Стили</TabsTrigger>
                    <TabsTrigger value="advanced" className="text-xs">Доп.</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="content" className="flex-1 m-0">
                  <ScrollArea className="h-full">
                    <div className="p-4 space-y-4">
                      <div className="space-y-2">
                        <Label>Текст заголовка</Label>
                        <Input placeholder="Введите текст" />
                      </div>
                      <div className="space-y-2">
                        <Label>Описание</Label>
                        <textarea
                          className="w-full p-2 border border-border rounded-md resize-none"
                          rows={3}
                          placeholder="Введите описание"
                        />
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="style" className="flex-1 m-0">
                  <ScrollArea className="h-full">
                    <div className="p-4 space-y-4">
                      <div className="space-y-2">
                        <Label>Цвет фона</Label>
                        <div className="flex gap-2">
                          <Input type="color" defaultValue="#0EA5E9" className="w-16 h-10" />
                          <Input defaultValue="#0EA5E9" className="flex-1" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Шрифт</Label>
                        <Select defaultValue="inter">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inter">Inter</SelectItem>
                            <SelectItem value="roboto">Roboto</SelectItem>
                            <SelectItem value="opensans">Open Sans</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Размер текста</Label>
                        <Slider defaultValue={[16]} min={12} max={72} step={1} />
                      </div>

                      <div className="space-y-2">
                        <Label>Отступы (padding)</Label>
                        <Slider defaultValue={[20]} min={0} max={100} step={4} />
                      </div>

                      <div className="space-y-2">
                        <Label>Тень</Label>
                        <Select defaultValue="none">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Без тени</SelectItem>
                            <SelectItem value="sm">Маленькая</SelectItem>
                            <SelectItem value="md">Средняя</SelectItem>
                            <SelectItem value="lg">Большая</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="advanced" className="flex-1 m-0">
                  <ScrollArea className="h-full">
                    <div className="p-4">
                      <Tabs defaultValue="animation" orientation="vertical">
                        <TabsList className="flex flex-col h-auto space-y-1">
                          <TabsTrigger value="animation" className="w-full justify-start">
                            <Icon name="Zap" className="mr-2" size={14} />
                            Анимация
                          </TabsTrigger>
                          <TabsTrigger value="responsive" className="w-full justify-start">
                            <Icon name="Smartphone" className="mr-2" size={14} />
                            Адаптивность
                          </TabsTrigger>
                          <TabsTrigger value="seo" className="w-full justify-start">
                            <Icon name="Search" className="mr-2" size={14} />
                            SEO
                          </TabsTrigger>
                          <TabsTrigger value="conditions" className="w-full justify-start">
                            <Icon name="Filter" className="mr-2" size={14} />
                            Условия
                          </TabsTrigger>
                          <TabsTrigger value="integrations" className="w-full justify-start">
                            <Icon name="Plug" className="mr-2" size={14} />
                            Интеграции
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="animation" className="mt-0 ml-4">
                          <div className="space-y-3">
                            <Label>Эффект появления</Label>
                            <Select defaultValue="fade">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="fade">Плавное появление</SelectItem>
                                <SelectItem value="slide">Слайд</SelectItem>
                                <SelectItem value="zoom">Увеличение</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TabsContent>

                        <TabsContent value="integrations" className="mt-0 ml-4">
                          <div className="space-y-3">
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <Icon name="Mail" className="mr-2" size={14} />
                              Email уведомления
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <Icon name="MessageSquare" className="mr-2" size={14} />
                              Telegram
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <Icon name="CreditCard" className="mr-2" size={14} />
                              ЮKassa
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="flex-1 flex items-center justify-center p-8 text-center text-muted-foreground">
                <div>
                  <Icon name="MousePointerClick" size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Выберите элемент на странице для редактирования</p>
                </div>
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
};

export default SiteEditor;
