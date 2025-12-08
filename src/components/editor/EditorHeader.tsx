import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { ThemeToggle } from '@/components/ThemeToggle';

interface EditorHeaderProps {
  projectName: string;
  isEditingName: boolean;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  loading: boolean;
  onProjectNameChange: (name: string) => void;
  onEditingNameChange: (editing: boolean) => void;
  onViewModeChange: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  onSave: () => void;
  onBack: () => void;
}

export const EditorHeader = ({
  projectName,
  isEditingName,
  viewMode,
  loading,
  onProjectNameChange,
  onEditingNameChange,
  onViewModeChange,
  onSave,
  onBack
}: EditorHeaderProps) => {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        
        {isEditingName ? (
          <Input
            value={projectName}
            onChange={(e) => onProjectNameChange(e.target.value)}
            onBlur={() => onEditingNameChange(false)}
            onKeyDown={(e) => e.key === 'Enter' && onEditingNameChange(false)}
            className="w-64"
            autoFocus
          />
        ) : (
          <button
            onClick={() => onEditingNameChange(true)}
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
            onClick={() => onViewModeChange('desktop')}
          >
            <Icon name="Monitor" size={16} />
          </Button>
          <Button
            variant={viewMode === 'tablet' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('tablet')}
          >
            <Icon name="Tablet" size={16} />
          </Button>
          <Button
            variant={viewMode === 'mobile' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('mobile')}
          >
            <Icon name="Smartphone" size={16} />
          </Button>
        </div>

        <div className="h-8 w-px bg-border" />

        <Button variant="outline" size="sm" onClick={onSave} disabled={loading}>
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
  );
};
