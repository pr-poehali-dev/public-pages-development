import { DropZone } from '@/components/editor/DropZone';
import { BlockRenderer } from '@/components/editor/BlockRenderer';

interface EditorCanvasProps {
  pageBlocks: any[];
  selectedBlockId: number | null;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  onBlockDrop: (blockType: string, blockName: string) => void;
  onSelectBlock: (blockId: number) => void;
  onDeleteBlock: (blockId: number) => void;
}

export const EditorCanvas = ({
  pageBlocks,
  selectedBlockId,
  viewMode,
  onBlockDrop,
  onSelectBlock,
  onDeleteBlock
}: EditorCanvasProps) => {
  const getViewModeWidth = () => {
    switch (viewMode) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      default: return 'w-full';
    }
  };

  return (
    <main className="flex-1 overflow-auto bg-muted/30 p-6">
      <div className={`mx-auto ${getViewModeWidth()} transition-all duration-300`}>
        <DropZone onDrop={onBlockDrop} hasBlocks={pageBlocks.length > 0}>
          <div className="space-y-4">
            {pageBlocks.map((block) => (
              <BlockRenderer
                key={block.id}
                block={block}
                isSelected={selectedBlockId === block.id}
                onSelect={() => onSelectBlock(block.id)}
                onDelete={() => onDeleteBlock(block.id)}
              />
            ))}
          </div>
        </DropZone>
      </div>
    </main>
  );
};
