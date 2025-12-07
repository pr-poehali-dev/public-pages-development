import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'entrepreneur',
    agreedToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert('Необходимо согласие на обработку данных');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-6">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Rocket" size={32} className="text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl">Создать аккаунт</CardTitle>
          <CardDescription>Присоединяйтесь к тысячам предпринимателей</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                type="text"
                placeholder="Иван Петров"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ivan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="Минимум 8 символов"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                minLength={8}
              />
            </div>

            <div className="space-y-3">
              <Label>Я хочу:</Label>
              <RadioGroup
                value={formData.userType}
                onValueChange={(value) => setFormData({ ...formData, userType: value })}
              >
                <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                  <Label htmlFor="entrepreneur" className="flex-1 cursor-pointer">
                    <div className="font-medium">Запустить бизнес</div>
                    <div className="text-xs text-muted-foreground">Создавать сайты, продавать, расти</div>
                  </Label>
                  <Icon name="TrendingUp" className="text-primary" />
                </div>
                <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="developer" id="developer" />
                  <Label htmlFor="developer" className="flex-1 cursor-pointer">
                    <div className="font-medium">Зарабатывать на навыках</div>
                    <div className="text-xs text-muted-foreground">Брать заказы, продавать шаблоны</div>
                  </Label>
                  <Icon name="Code" className="text-secondary" />
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, agreedToTerms: checked as boolean })
                }
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                Я согласен с{' '}
                <a href="#" className="text-primary hover:underline">
                  условиями использования
                </a>{' '}
                и{' '}
                <a href="#" className="text-primary hover:underline">
                  политикой конфиденциальности
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full">
              <Icon name="UserPlus" className="mr-2" size={18} />
              Создать аккаунт
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">или</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="w-full" type="button">
              <Icon name="Mail" className="mr-2" size={18} />
              Google
            </Button>
            <Button variant="outline" className="w-full" type="button">
              <Icon name="Github" className="mr-2" size={18} />
              GitHub
            </Button>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Уже есть аккаунт? </span>
            <button
              onClick={() => navigate('/login')}
              className="text-primary font-medium hover:underline"
            >
              Войти
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
