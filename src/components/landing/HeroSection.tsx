import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Запусти и автоматизируй<br />
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          свой бизнес за один день
        </span>
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Все инструменты для создания сайтов, ботов, продвижения и обучения в одной платформе
      </p>
      
      <div className="flex gap-4 justify-center flex-wrap mb-12">
        <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700" onClick={() => navigate('/register')}>
          <Icon name="Rocket" className="mr-2" />
          Запустить бизнес
        </Button>
        <Button size="lg" className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700" onClick={() => navigate('/register')}>
          <Icon name="Code" className="mr-2" />
          Создать цифровой продукт
        </Button>
      </div>

      <div className="flex justify-center gap-12 flex-wrap text-center">
        <div className="flex flex-col items-center gap-2">
          <Icon name="Sparkles" size={32} className="text-primary" />
          <div className="font-semibold">AI-помощники</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Icon name="Layers" size={32} className="text-primary" />
          <div className="font-semibold">Все в одном</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Icon name="Award" size={32} className="text-primary" />
          <div className="font-semibold">Профессионализм</div>
        </div>
      </div>
    </section>
  );
};
