import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const TariffTab = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Текущий тариф</CardTitle>
          <CardDescription>Вы используете тариф Pro</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-muted-foreground">₽990/месяц</p>
              </div>
            </div>
            <Badge>Активен</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-border rounded-lg">
              <div className="text-2xl font-bold mb-1">10</div>
              <div className="text-sm text-muted-foreground">Сайтов</div>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="text-2xl font-bold mb-1">Безлимит</div>
              <div className="text-sm text-muted-foreground">Чат-ботов</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Следующее списание: 12 января 2025
          </p>

          <div className="flex gap-2">
            <Button variant="outline">Изменить тариф</Button>
            <Button variant="outline">Отменить подписку</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>
              <div className="text-3xl font-bold mt-2">₽0</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">1 сайт</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">Базовая аналитика</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">AI-консультант</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" disabled>Текущий тариф</Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-lg">
            Текущий
          </div>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>
              <div className="text-3xl font-bold mt-2">₽990/мес</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">10 сайтов</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">Расширенная аналитика</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">Чат-боты</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">Интеграции</span>
              </li>
            </ul>
            <Button className="w-full" disabled>Активен</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardDescription>
              <div className="text-3xl font-bold mt-2">₽2,990/мес</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">Безлимит сайтов</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">Белый лейбл</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">API доступ</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span className="text-sm">Приоритетная поддержка</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Перейти</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TariffTab;
