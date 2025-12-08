import { useDrag } from 'react-dnd';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface BlockType {
  id: string;
  name: string;
  icon: string;
  category: string;
  color: string;
}

interface DraggableBlockProps {
  block: BlockType;
}

export const DraggableBlock = ({ block }: DraggableBlockProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BLOCK',
    item: { blockType: block.id, blockName: block.name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30',
    green: 'bg-green-100 text-green-600 dark:bg-green-900/30',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30',
    red: 'bg-red-100 text-red-600 dark:bg-red-900/30',
    yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30'
  };

  return (
    <Card
      ref={drag}
      className={`p-4 cursor-move hover:shadow-lg transition-all ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorMap[block.color] || 'bg-gray-100'}`}>
          <Icon name={block.icon} size={20} />
        </div>
        <div className="flex-1">
          <div className="font-medium text-sm">{block.name}</div>
          <div className="text-xs text-muted-foreground">{block.category}</div>
        </div>
      </div>
    </Card>
  );
};
