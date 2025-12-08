import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { DraggableBlock } from '@/components/editor/DraggableBlock';
import { DropZone } from '@/components/editor/DropZone';
import { BlockRenderer } from '@/components/editor/BlockRenderer';
import { useToast } from '@/hooks/use-toast';

const SiteEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  
  const [projectName, setProjectName] = useState('Новый сайт');
  const [isEditingName, setIsEditingName] = useState(false);
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedBlockId, setSelectedBlockId] = useState<number | null>(null);
  const [pageBlocks, setPageBlocks] = useState<any[]>([]);
  const [currentPageId, setCurrentPageId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (id) {
      loadProject();
    }
  }, [id]);

  const loadProject = async () => {
    try {
      const response = await fetch(`https://functions.poehali.dev/6ef235f2-9501-4c64-9cac-1c75801c81c0?project_id=${id}`);
      const data = await response.json();
      
      if (data.pages && data.pages.length > 0) {
        setProjectName(data.name);
        setCurrentPageId(data.pages[0].id);
        loadBlocks(data.pages[0].id);
      }
    } catch (error) {
      console.error('Error loading project:', error);
    }
  };

  const loadBlocks = async (pageId: number) => {
    try {
      const response = await fetch(`https://functions.poehali.dev/ea7403b2-c106-4a24-9f6a-41525a179d20?page_id=${pageId}`);
      const data = await response.json();
      setPageBlocks(data);
    } catch (error) {
      console.error('Error loading blocks:', error);
    }
  };

  const handleBlockDrop = async (blockType: string, blockName: string) => {
    if (!currentPageId) {
      toast({
        title: "Ошибка",
        description: "Не выбрана страница",
        variant: "destructive"
      });
      return;
    }

    try {
      const newBlock = {
        page_id: currentPageId,
        type: blockType,
        content: {
          title: blockName,
          text: 'Кликните для редактирования'
        },
        styles: {},
        position: pageBlocks.length
      };

      const response = await fetch('https://functions.poehali.dev/ea7403b2-c106-4a24-9f6a-41525a179d20', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBlock)
      });

      const createdBlock = await response.json();
      setPageBlocks([...pageBlocks, createdBlock]);
      
      toast({
        title: "Блок добавлен",
        description: `Блок "${blockName}" успешно добавлен`
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось добавить блок",
        variant: "destructive"
      });
    }
  };

  const handleDeleteBlock = async (blockId: number) => {
    try {
      setPageBlocks(pageBlocks.filter(b => b.id !== blockId));
      
      toast({
        title: "Блок удален",
        description: "Блок успешно удален"
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить блок",
        variant: "destructive"
      });
    }
  };

  const handleSave = async () => {
    setLoading(true);
    
    toast({
      title: "Сохранено",
      description: "Все изменения сохранены"
    });
    
    setLoading(false);
  };

  const getViewModeWidth = () => {
    switch (viewMode) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      default: return 'w-full';
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen flex flex-col bg-background">
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shadow-sm">
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

            <div className="h-8 w-px bg-border" />

            <Button variant="outline" size="sm" onClick={handleSave} disabled={loading}>
              <Icon name="Save" size={16} className="mr-2" />
              {loading ? 'Сохранение...' : 'Сохранить'}
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-green-600 to-green-700">
              <Icon name="Rocket" size={16} className="mr-2" />
              Публиковать
            </Button>

            <div className="h-8 w-px bg-border" />
            
            <ThemeToggle />
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {leftPanelOpen && (
            <aside className="w-72 border-r border-border bg-card flex flex-col shadow-sm">
              <div className="p-4 border-b border-border">
                <h3 className="text-sm font-semibold mb-3">Блоки</h3>
              </div>
              
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-3">
                  {blocks.map((block) => (
                    <DraggableBlock key={block.id} block={block} />
                  ))}
                </div>
              </ScrollArea>
            </aside>
          )}

          <main className="flex-1 overflow-auto bg-muted/30 p-6">
            <div className={`mx-auto ${getViewModeWidth()} transition-all duration-300`}>
              <DropZone onDrop={handleBlockDrop} hasBlocks={pageBlocks.length > 0}>
                <div className="space-y-4">
                  {pageBlocks.map((block) => (
                    <BlockRenderer
                      key={block.id}
                      block={block}
                      isSelected={selectedBlockId === block.id}
                      onSelect={() => setSelectedBlockId(block.id)}
                      onDelete={() => handleDeleteBlock(block.id)}
                    />
                  ))}
                </div>
              </DropZone>
            </div>
          </main>

          {rightPanelOpen && selectedBlockId && (
            <aside className="w-80 border-l border-border bg-card flex flex-col shadow-sm">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="text-sm font-semibold">Свойства блока</h3>
                <Button variant="ghost" size="icon" onClick={() => setRightPanelOpen(false)}>
                  <Icon name="X" size={16} />
                </Button>
              </div>
              
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-4">
                  <div>
                    <Label>Заголовок</Label>
                    <Input placeholder="Введите заголовок" className="mt-2" />
                  </div>
                  <div>
                    <Label>Текст</Label>
                    <Input placeholder="Введите текст" className="mt-2" />
                  </div>
                </div>
              </ScrollArea>
            </aside>
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default SiteEditor;
