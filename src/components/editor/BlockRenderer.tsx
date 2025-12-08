import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface BlockData {
  id: number;
  type: string;
  content: any;
  styles: any;
  position: number;
}

interface BlockRendererProps {
  block: BlockData;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

export const BlockRenderer = ({ block, isSelected, onSelect, onDelete }: BlockRendererProps) => {
  const renderBlockContent = () => {
    switch (block.type) {
      case 'hero':
      case 'text':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">
              {block.content.title || 'Заголовок блока'}
            </h2>
            <p className="text-muted-foreground">
              {block.content.text || 'Текст блока. Кликните для редактирования.'}
            </p>
          </div>
        );

      case 'image':
        return (
          <div className="p-8">
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <Icon name="Image" size={64} className="text-muted-foreground" />
            </div>
          </div>
        );

      case 'button':
        return (
          <div className="p-8 text-center">
            <Button size="lg">{block.content.text || 'Кнопка'}</Button>
          </div>
        );

      case 'form':
        return (
          <div className="p-8">
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <div className="h-10 bg-muted rounded-md"></div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="h-10 bg-muted rounded-md"></div>
              </div>
              <Button className="w-full">Отправить</Button>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="p-8">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Icon name="Image" size={32} className="text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="p-8">
            <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
              <Icon name="Video" size={64} className="text-muted-foreground" />
            </div>
          </div>
        );

      case 'map':
        return (
          <div className="p-8">
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <Icon name="Map" size={64} className="text-muted-foreground" />
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="font-semibold">Имя клиента</div>
                      <div className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Отличный сервис!</p>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {['Базовый', 'Стандарт', 'Премиум'].map((plan, i) => (
                <Card key={i} className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{plan}</h3>
                  <div className="text-3xl font-bold mb-4">{(i + 1) * 1000} ₽</div>
                  <Button variant={i === 1 ? 'default' : 'outline'} className="w-full">
                    Выбрать
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="p-8">
            <div className="space-y-4 max-w-2xl">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">Вопрос {i}?</h4>
                    <Icon name="ChevronDown" size={20} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">Блок типа: {block.type}</p>
          </div>
        );
    }
  };

  return (
    <div
      onClick={onSelect}
      className={`relative group cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/50'
      }`}
    >
      {renderBlockContent()}
      
      <div className={`absolute top-2 right-2 flex gap-2 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
        <Button
          size="icon"
          variant="destructive"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <Icon name="Trash2" size={16} />
        </Button>
      </div>
      
      {isSelected && (
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
          {block.type}
        </div>
      )}
    </div>
  );
};
