import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  name: string;
  type: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ProjectsGridProps {
  projects: Project[];
  loading: boolean;
  creatingProject: boolean;
  onCreateProject: (type: 'site' | 'bot') => void;
  onOpenProject: (type: string, id: number) => void;
  getProjectIcon: (type: string) => string;
  getProjectStatusText: (status: string) => string;
  getProjectStatusColor: (status: string) => string;
}

export const ProjectsGrid = ({
  projects,
  loading,
  creatingProject,
  onCreateProject,
  onOpenProject,
  getProjectIcon,
  getProjectStatusText,
  getProjectStatusColor
}: ProjectsGridProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Мои проекты</CardTitle>
            <CardDescription>Управляйте своими проектами</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => onCreateProject('site')} disabled={creatingProject}>
              <Icon name="Plus" size={16} className="mr-2" />
              Создать сайт
            </Button>
            <Button variant="outline" onClick={() => onCreateProject('bot')} disabled={creatingProject}>
              <Icon name="Plus" size={16} className="mr-2" />
              Создать бота
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">
            <Icon name="Loader2" size={32} className="mx-auto mb-2 animate-spin" />
            Загрузка проектов...
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
              <Icon name="FolderOpen" size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Нет проектов</h3>
            <p className="text-muted-foreground mb-6">Создайте свой первый проект, чтобы начать работу</p>
            <div className="flex gap-3 justify-center">
              <Button onClick={() => onCreateProject('site')} disabled={creatingProject}>
                <Icon name="Globe" size={16} className="mr-2" />
                Создать сайт
              </Button>
              <Button variant="outline" onClick={() => onCreateProject('bot')} disabled={creatingProject}>
                <Icon name="Bot" size={16} className="mr-2" />
                Создать бота
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => onOpenProject(project.type, project.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      project.type === 'site' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                    }`}>
                      <Icon name={getProjectIcon(project.type) as any} size={24} />
                    </div>
                    <Badge className={getProjectStatusColor(project.status)}>
                      {getProjectStatusText(project.status)}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>Обновлен {new Date(project.updated_at).toLocaleDateString('ru-RU')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
