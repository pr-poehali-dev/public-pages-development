import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface PropertiesPanelProps {
  editingContent: any;
  onContentChange: (content: any) => void;
  onSave: () => void;
  onClose: () => void;
}

export const PropertiesPanel = ({
  editingContent,
  onContentChange,
  onSave,
  onClose
}: PropertiesPanelProps) => {
  return (
    <aside className="w-80 border-l border-border bg-card flex flex-col shadow-sm">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="text-sm font-semibold">Редактирование блока</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <Icon name="X" size={16} />
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        <Tabs defaultValue="content" className="w-full">
          <div className="px-4 pt-4">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="content">Контент</TabsTrigger>
              <TabsTrigger value="styles">Стили</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
              <TabsTrigger value="integrations">Интеграции</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="content" className="p-4 space-y-4">
            <div>
              <Label>Заголовок</Label>
              <Input 
                placeholder="Введите заголовок" 
                className="mt-2"
                value={editingContent.title || ''}
                onChange={(e) => onContentChange({ ...editingContent, title: e.target.value })}
              />
            </div>
            <div>
              <Label>Текст</Label>
              <Textarea
                placeholder="Введите текст"
                className="mt-2"
                value={editingContent.text || ''}
                onChange={(e) => onContentChange({ ...editingContent, text: e.target.value })}
              />
            </div>
            <div>
              <Label>Ссылка (URL)</Label>
              <Input 
                placeholder="https://example.com" 
                className="mt-2"
                value={editingContent.url || ''}
                onChange={(e) => onContentChange({ ...editingContent, url: e.target.value })}
              />
            </div>
            <Button onClick={onSave} className="w-full">
              <Icon name="Save" size={16} className="mr-2" />
              Сохранить изменения
            </Button>
          </TabsContent>

          <TabsContent value="styles" className="p-4 space-y-4">
            <div>
              <Label>Цвет фона</Label>
              <Input type="color" className="mt-2 h-10" />
            </div>
            <div>
              <Label>Цвет текста</Label>
              <Input type="color" className="mt-2 h-10" />
            </div>
            <div>
              <Label>Отступы (padding)</Label>
              <Input placeholder="20px" className="mt-2" />
            </div>
            <div>
              <Label>Размер шрифта</Label>
              <Input placeholder="16px" className="mt-2" />
            </div>
          </TabsContent>

          <TabsContent value="settings" className="p-4 space-y-4">
            <div>
              <Label>CSS класс</Label>
              <Input placeholder="my-custom-class" className="mt-2" />
            </div>
            <div>
              <Label>Анимация</Label>
              <select className="mt-2 w-full p-2 border border-border rounded-md bg-background">
                <option>Без анимации</option>
                <option>Плавное появление</option>
                <option>Слайд снизу</option>
                <option>Увеличение</option>
              </select>
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="p-4 space-y-4">
            <div className="text-sm text-muted-foreground mb-4">
              Настройте интеграции для отправки данных формы
            </div>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Mail" size={16} className="mr-2" />
                Email уведомления
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Telegram бот
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Table" size={16} className="mr-2" />
                Google Sheets
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Briefcase" size={16} className="mr-2" />
                AmoCRM
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Box" size={16} className="mr-2" />
                Bitrix24
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Send" size={16} className="mr-2" />
                Webhook
              </Button>
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="text-sm font-medium mb-2">Активные интеграции:</div>
              <div className="text-xs text-muted-foreground">
                Пока не настроено
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </aside>
  );
};
