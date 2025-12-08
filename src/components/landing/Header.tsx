import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Icon name="Rocket" size={28} className="text-primary" />
          <span className="text-2xl font-bold">BizForge</span>
        </button>
        
        <nav className="hidden md:flex gap-8">
          <a href="#capabilities" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
          <a href="#marketplace" className="text-sm font-medium hover:text-primary transition-colors">Маркетплейс</a>
          <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">Сообщество</a>
          <a href="#support" className="text-sm font-medium hover:text-primary transition-colors">Поддержка</a>
        </nav>
        
        <div className="flex gap-3 items-center">
          <Button variant="ghost" onClick={() => navigate('/login')}>Войти</Button>
          <Button onClick={() => navigate('/register')}>Начать бесплатно</Button>
        </div>
      </div>
    </header>
  );
};
