import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { DraggableBlock } from '@/components/editor/DraggableBlock';

interface Block {
  id: string;
  name: string;
  icon: string;
  category: string;
  color: string;
}

interface BlocksPanelProps {
  blocks: Block[];
  searchQuery: string;
  activeCategory: string;
  categories: string[];
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export const BlocksPanel = ({
  blocks,
  searchQuery,
  activeCategory,
  categories,
  onSearchChange,
  onCategoryChange
}: BlocksPanelProps) => {
  return (
    <aside className="w-72 border-r border-border bg-card flex flex-col shadow-sm">
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-semibold mb-3">Блоки ({blocks.length})</h3>
        <div className="relative">
          <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Поиск блоков..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>
      
      <div className="p-2 border-b border-border">
        <div className="flex flex-wrap gap-1">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onCategoryChange(cat)}
              className="text-xs"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {blocks.map((block) => (
            <DraggableBlock key={block.id} block={block} />
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
