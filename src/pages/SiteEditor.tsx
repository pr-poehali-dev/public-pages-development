import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

const SiteEditor = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('Новый сайт');
  const [isEditingName, setIsEditingName] = useState(false);
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const pages = [
    { id: '1', name: 'Главная', path: '/', active: true, icon: 'Home' },
    { id: '2', name: 'О нас', path: '/about', active: false, icon: 'Info' },
    { id: '3', name: 'Контакты', path: '/contact', active: false, icon: 'Mail' }
  ];

  const blocks = [
    { id: 'hero', name: 'Заголовок', icon: 'Heading1', category: 'Контент', color: 'blue' },
    { id: 'text', name: 'Текст', icon: 'Type', category: 'Контент', color: 'blue' },
    { id: 'image', name: 'Изображение', icon: 'Image', category: 'Медиа', color: 'purple' },
    { id: 'gallery', name: 'Галерея', icon: 'Images', category: 'Медиа', color: 'purple' },
    { id: 'video', name: 'Видео', icon: 'Video', category: 'Медиа', color: 'purple' },
    { id: 'form', name: 'Форма', icon: 'Mail', category: 'Формы', color: 'green' },
    { id: 'button', name: 'Кнопка', icon: 'MousePointerClick', category: 'Действия', color: 'orange' },
    { id: 'map', name: 'Карта', icon: 'Map', category: 'Интеграции', color: 'red' },
    { id: 'reviews', name: 'Отзывы', icon: 'MessageSquare', category: 'Контент', color: 'blue' },
    { id: 'pricing', name: 'Цены', icon: 'DollarSign', category: 'Коммерция', color: 'yellow' },
    { id: 'faq', name: 'FAQ', icon: 'HelpCircle', category: 'Контент', color: 'blue' }
  ];

  const templates = [
    { id: '1', name: 'Бизнес лендинг', preview: '🏢', desc: 'Корпоративный сайт' },
    { id: '2', name: 'Интернет-магазин', preview: '🛒', desc: 'E-commerce решение' },
    { id: '3', name: 'Портфолио', preview: '🎨', desc: 'Для творческих людей' },
    { id: '4', name: 'Блог', preview: '📝', desc: 'Личный или корпоративный' }
  ];

  const getViewModeWidth = () => {
    switch (viewMode) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      default: return 'w-full';
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')} className="hover:bg-primary/10">
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
              className="text-lg font-semibold hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="Globe" size={20} className="text-primary" />
              {projectName}
            </button>
          )}
          <Badge variant="outline" className="ml-2">Черновик</Badge>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-border rounded-lg p-1 bg-muted/50">
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('desktop')}
              className="gap-2"
            >
              <Icon name="Monitor" size={16} />
              <span className="hidden md:inline">Десктоп</span>
            </Button>
            <Button
              variant={viewMode === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('tablet')}
              className="gap-2"
            >
              <Icon name="Tablet" size={16} />
              <span className="hidden md:inline">Планшет</span>
            </Button>
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('mobile')}
              className="gap-2"
            >
              <Icon name="Smartphone" size={16} />
              <span className="hidden md:inline">Телефон</span>
            </Button>
          </div>

          <div className="h-8 w-px bg-border" />

          <Button variant="outline" size="sm" className="gap-2">
            <Icon name="Eye" size={16} />
            Предпросмотр
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Icon name="Save" size={16} />
            Сохранить
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 gap-2">
            <Icon name="Rocket" size={16} />
            Публиковать
          </Button>

          <div className="h-8 w-px bg-border" />
          
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <Icon name="Settings" size={20} />
          </Button>

          <button 
            onClick={() => navigate('/dashboard/settings')} 
            className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm hover:scale-110 transition-transform"
          >
            ИП
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        {leftPanelOpen && (
          <aside className="w-72 border-r border-border bg-card flex flex-col shadow-sm">
            <Tabs defaultValue="blocks" className="flex-1 flex flex-col">
              <div className="p-4 border-b border-border">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="pages" className="text-xs gap-1">
                    <Icon name="FileText" size={14} />
                    Страницы
                  </TabsTrigger>
                  <TabsTrigger value="blocks" className="text-xs gap-1">
                    <Icon name="Layout" size={14} />
                    Блоки
                  </TabsTrigger>
                  <TabsTrigger value="templates" className="text-xs gap-1">
                    <Icon name="Sparkles" size={14} />
                    Шаблоны
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="pages" className="flex-1 m-0 p-4 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-muted-foreground">Список страниц</h3>
                  <Badge variant="secondary">{pages.length}</Badge>
                </div>
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-2">
                    {pages.map((page) => (
                      <Card
                        key={page.id}
                        className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                          page.active
                            ? 'bg-primary/5 border-primary/30 shadow-sm'
                            : 'hover:border-primary/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            page.active ? 'bg-primary/10' : 'bg-muted'
                          }`}>
                            <Icon name={page.icon} size={18} className={page.active ? 'text-primary' : 'text-muted-foreground'} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{page.name}</div>
                            <div className="text-xs text-muted-foreground">{page.path}</div>
                          </div>
                          {page.active && <Badge variant="default" className="text-xs">Активна</Badge>}
                        </div>
                      </Card>
                    ))}
                    <Button variant="outline" className="w-full gap-2" size="sm">
                      <Icon name="Plus" size={14} />
                      Добавить страницу
                    </Button>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="blocks" className="flex-1 m-0 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Библиотека блоков</h3>
                  <Badge variant="secondary">{blocks.length}+</Badge>
                </div>
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-2">
                    {blocks.map((block) => (
                      <Card
                        key={block.id}
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData('blockId', block.id)}
                        className="p-3 hover:shadow-md hover:border-primary/50 transition-all cursor-move group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-${block.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Icon name={block.icon} size={20} className={`text-${block.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{block.name}</div>
                            <div className="text-xs text-muted-foreground">{block.category}</div>
                          </div>
                          <Icon name="GripVertical" size={16} className="text-muted-foreground" />
                        </div>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="templates" className="flex-1 m-0 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Готовые шаблоны</h3>
                  <Badge variant="secondary">{templates.length}+</Badge>
                </div>
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-3">
                    {templates.map((template) => (
                      <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-purple-500/10 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                          {template.preview}
                        </div>
                        <div className="p-3">
                          <div className="font-semibold text-sm mb-1">{template.name}</div>
                          <div className="text-xs text-muted-foreground">{template.desc}</div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </aside>
        )}

        {/* Canvas Area */}
        <main className="flex-1 bg-muted/30 p-6 overflow-auto">
          <div className="flex flex-col items-center">
            <div className={`${getViewModeWidth()} bg-card rounded-lg shadow-2xl border border-border min-h-[600px] transition-all duration-300`}>
              <div 
                className="p-8 min-h-[600px]"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const blockId = e.dataTransfer.getData('blockId');
                  console.log('Dropped block:', blockId);
                }}
              >
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                    <Icon name="MousePointerClick" size={48} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Начните создавать
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-md">
                    Перетащите блоки из левой панели или выберите готовый шаблон
                  </p>
                  <div className="flex gap-3">
                    <Button className="gap-2">
                      <Icon name="Wand2" size={16} />
                      AI-генерация сайта
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Sparkles" size={16} />
                      Выбрать шаблон
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Panel */}
        {rightPanelOpen && (
          <aside className="w-80 border-l border-border bg-card flex flex-col shadow-sm">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <Icon name="Sliders" size={18} className="text-primary" />
                Свойства элемента
              </h3>
              <Button variant="ghost" size="icon" onClick={() => setRightPanelOpen(false)}>
                <Icon name="X" size={18} />
              </Button>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-6">
                <div className="text-center py-12">
                  <Icon name="MousePointerClick" size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-sm text-muted-foreground">
                    Выберите элемент на холсте<br />для редактирования
                  </p>
                </div>
              </div>
            </ScrollArea>
          </aside>
        )}
      </div>
    </div>
  );
};

export default SiteEditor;
