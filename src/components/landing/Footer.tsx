import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <button onClick={() => navigate('/')} className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <Icon name="Rocket" size={24} className="text-primary" />
              <span className="text-xl font-bold">BizForge</span>
            </button>
            <p className="text-sm text-muted-foreground">
              Все инструменты для запуска и роста вашего бизнеса в одной платформе
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
              <li><a href="#marketplace" className="hover:text-primary transition-colors">Маркетплейс</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#community" className="hover:text-primary transition-colors">Сообщество</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Связаться</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партнёрам</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BizForge. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Github" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
