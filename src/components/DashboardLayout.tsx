import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: 'LayoutDashboard', label: 'Дашборд', path: '/dashboard' },
    { icon: 'Globe', label: 'Конструктор сайтов', path: '/editor/site/new' },
    { icon: 'Bot', label: 'Конструктор ботов', path: '/editor/bot/new' },
    { icon: 'Megaphone', label: 'Реклама', path: '/dashboard/ads' },
    { icon: 'ShoppingBag', label: 'Товары', path: '/dashboard/products' },
    { icon: 'TrendingUp', label: 'Статистика', path: '/dashboard/statistics' },
    { icon: 'GraduationCap', label: 'Университет', path: '/university' },
    { icon: 'Briefcase', label: 'Биржа', path: '/exchange' },
    { icon: 'Store', label: 'Маркетплейс', path: '/marketplace' },
    { icon: 'Settings', label: 'Настройки', path: '/dashboard/settings' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => navigate('/')}>
            <Icon name="Rocket" size={28} className="text-sidebar-primary" />
            <span className="text-xl font-bold text-sidebar-foreground">BizPlatform</span>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className={`w-full justify-start ${
                  isActive(item.path)
                    ? 'text-sidebar-foreground bg-sidebar-accent'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
                onClick={() => navigate(item.path)}
              >
                <Icon name={item.icon} className="mr-3" size={20} />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name="User" size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-sidebar-foreground">Иван Петров</div>
              <div className="text-xs text-sidebar-foreground/60">Pro Plan</div>
            </div>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground" onClick={() => navigate('/login')}>
              <Icon name="LogOut" size={18} />
            </Button>
          </div>
        </div>
      </aside>

      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
