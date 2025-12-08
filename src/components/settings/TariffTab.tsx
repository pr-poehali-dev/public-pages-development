import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface TariffTabProps {
  currentTariff: string;
}

export const TariffTab = ({ currentTariff }: TariffTabProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Текущий тариф</CardTitle>
          <CardDescription>Вы используете тариф {currentTariff}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <div className="text-3xl font-bold mb-4">₽0<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>1 сайт</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Базовая аналитика</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>AI-консультант</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Текущий</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                Текущий
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-4">₽990<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>10 сайтов</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Безлимит ботов</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Расширенная аналитика</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Все интеграции</span>
                  </li>
                </ul>
                <Button className="w-full">Управление</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <div className="text-3xl font-bold mb-4">₽2,990<span className="text-lg text-muted-foreground font-normal">/мес</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Безлимит сайтов</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Белый лейбл</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>API доступ</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Перейти</Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-доступ</CardTitle>
          <CardDescription>Настройка использования AI-моделей</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Предпочитаемая модель</Label>
            <Select defaultValue="gpt4">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt4">GPT-4 (OpenAI) - ₽0.03/1K токенов</SelectItem>
                <SelectItem value="claude">Claude 3 (Anthropic) - ₽0.025/1K токенов</SelectItem>
                <SelectItem value="gemini">Gemini Pro (Google) - ₽0.02/1K токенов</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-2">Использование за месяц</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Израсходовано токенов:</span>
              <span className="font-semibold">5,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Стоимость:</span>
              <span className="font-semibold">₽150</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
