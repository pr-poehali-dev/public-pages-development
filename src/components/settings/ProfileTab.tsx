import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

const ProfileTab = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Основная информация</CardTitle>
          <CardDescription>Обновите данные вашего профиля</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="User" size={40} className="text-white" />
            </div>
            <div>
              <Button variant="outline" size="sm" className="mr-2">
                <Icon name="Upload" className="mr-2" size={16} />
                Загрузить фото
              </Button>
              <Button variant="ghost" size="sm">
                Удалить
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Имя</Label>
              <Input defaultValue="Иван" />
            </div>
            <div className="space-y-2">
              <Label>Фамилия</Label>
              <Input defaultValue="Петров" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" defaultValue="ivan@example.com" />
          </div>

          <div className="space-y-2">
            <Label>Телефон</Label>
            <Input type="tel" defaultValue="+7 (999) 123-45-67" />
          </div>

          <div className="space-y-2">
            <Label>О себе</Label>
            <textarea
              className="w-full p-2 border border-border rounded-md resize-none"
              rows={3}
              defaultValue="Предприниматель в сфере ecommerce"
            />
          </div>

          <Button>
            <Icon name="Save" className="mr-2" size={16} />
            Сохранить изменения
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Настройки уведомлений</CardTitle>
          <CardDescription>Управление email и push-уведомлениями</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Email-уведомления</div>
              <div className="text-sm text-muted-foreground">Получать письма о важных событиях</div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Новые заказы</div>
              <div className="text-sm text-muted-foreground">Уведомления о новых заказах</div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Маркетинговые рассылки</div>
              <div className="text-sm text-muted-foreground">Новости и специальные предложения</div>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Отчеты по статистике</div>
              <div className="text-sm text-muted-foreground">Еженедельные отчеты о показателях</div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileTab;
