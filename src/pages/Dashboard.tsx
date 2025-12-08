import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { OnboardingSection } from '@/components/dashboard/OnboardingSection';
import { ProjectsGrid } from '@/components/dashboard/ProjectsGrid';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const userName = localStorage.getItem('userName') || 'Пользователь';
  const userId = localStorage.getItem('userId');
  const [userType] = useState<'entrepreneur' | 'freelancer'>((localStorage.getItem('userType') as 'entrepreneur' | 'freelancer') || 'entrepreneur');
  const balance = 0;
  const [showProjectTypeDialog, setShowProjectTypeDialog] = useState(false);
  const [activeProjects, setActiveProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [creatingProject, setCreatingProject] = useState(false);

  const statsEntrepreneur = [
    { label: 'Посетители сайта', value: '1,234', icon: 'Users', color: 'text-blue-600' },
    { label: 'Новые заказы', value: '12', icon: 'ShoppingCart', color: 'text-green-600' },
    { label: 'Продажи', value: '₽45,000', icon: 'DollarSign', color: 'text-emerald-600' },
    { label: 'Расходы на рекламу', value: '₽5,000', icon: 'TrendingUp', color: 'text-orange-600' }
  ];

  const statsFreelancer = [
    { label: 'Заработок', value: '₽150,000', icon: 'Wallet', color: 'text-green-600' },
    { label: 'Активные заказы', value: '5', icon: 'Briefcase', color: 'text-blue-600' },
    { label: 'Рейтинг', value: '4.8/5', icon: 'Star', color: 'text-yellow-600' },
    { label: 'Завершенных', value: '24', icon: 'CheckCircle', color: 'text-emerald-600' }
  ];

  const stats = userType === 'entrepreneur' ? statsEntrepreneur : statsFreelancer;

  const onboardingSteps = [
    { title: 'Выбрать нишу', completed: true },
    { title: 'Создать сайт', completed: false, inProgress: true },
    { title: 'Добавить товары', completed: false },
    { title: 'Запустить рекламу', completed: false }
  ];

  const notifications: Array<{text: string; time: string; icon: string;}> = [];

  useEffect(() => {
    if (userId) {
      loadProjects();
    } else {
      navigate('/login');
    }
  }, [userId]);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://functions.poehali.dev/6ef235f2-9501-4c64-9cac-1c75801c81c0?user_id=${userId}`);
      const data = await response.json();
      setActiveProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить проекты",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (type: 'site' | 'bot') => {
    if (!userId) return;

    try {
      setCreatingProject(true);
      const response = await fetch('https://functions.poehali.dev/6ef235f2-9501-4c64-9cac-1c75801c81c0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: type === 'site' ? 'Новый сайт' : 'Новый бот',
          type: type,
          user_id: parseInt(userId)
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Проект создан",
          description: `${type === 'site' ? 'Сайт' : 'Бот'} успешно создан`
        });
        navigate(`/editor/${type}/${data.project.id}`);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось создать проект",
        variant: "destructive"
      });
    } finally {
      setCreatingProject(false);
    }
  };

  const getProjectIcon = (type: string) => {
    return type === 'site' ? 'Globe' : 'Bot';
  };

  const getProjectStatusText = (status: string) => {
    switch(status) {
      case 'draft': return 'Черновик';
      case 'published': return 'Опубликован';
      case 'archived': return 'Архив';
      default: return status;
    }
  };

  const getProjectStatusColor = (status: string) => {
    switch(status) {
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'published': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleOpenProject = (type: string, id: number) => {
    navigate(`/editor/${type}/${id}`);
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <DashboardSidebar
        userName={userName}
        userType={userType}
        balance={balance}
        onNavigate={navigate}
      />

      <main className="flex-1 ml-64">
        <DashboardHeader
          userName={userName}
          notifications={notifications}
        />

        <div className="p-6">
          <OnboardingSection
            steps={onboardingSteps}
            stats={stats}
          />

          <ProjectsGrid
            projects={activeProjects}
            loading={loading}
            creatingProject={creatingProject}
            onCreateProject={createProject}
            onOpenProject={handleOpenProject}
            getProjectIcon={getProjectIcon}
            getProjectStatusText={getProjectStatusText}
            getProjectStatusColor={getProjectStatusColor}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
