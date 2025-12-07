import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SecurityTab = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Банковские интеграции</CardTitle>
          <CardDescription>Подключите банк для автоматического учета</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Building" className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Сбербанк</div>
                  <div className="text-sm text-green-600">Подключен</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Настроить</Button>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Building" className="text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Тинькофф</div>
                  <div className="text-sm text-muted-foreground">Не подключен</div>
                </div>
              </div>
              <Button size="sm">Подключить</Button>
            </div>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Платежные системы</CardTitle>
          <CardDescription>Для приема платежей на сайте</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon name="CreditCard" className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">ЮKassa</div>
                  <div className="text-sm text-muted-foreground">Не подключена</div>
                </div>
              </div>
              <Button size="sm">Подключить</Button>
            </div>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CRM-системы</CardTitle>
          <CardDescription>Синхронизация с системами учета</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon name="Users" className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">AmoCRM</div>
                  <div className="text-sm text-muted-foreground">Не подключена</div>
                </div>
              </div>
              <Button size="sm">Подключить</Button>
            </div>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Смена пароля</CardTitle>
          <CardDescription>Обновите пароль для входа</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Текущий пароль</Label>
            <Input type="password" />
          </div>

          <div className="space-y-2">
            <Label>Новый пароль</Label>
            <Input type="password" />
          </div>

          <div className="space-y-2">
            <Label>Подтверждение пароля</Label>
            <Input type="password" />
          </div>

          <Button>
            <Icon name="Lock" className="mr-2" size={16} />
            Изменить пароль
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Двухфакторная аутентификация</CardTitle>
          <CardDescription>Дополнительная защита аккаунта</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-medium">2FA через SMS</div>
              <div className="text-sm text-muted-foreground">Получать коды подтверждения по SMS</div>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">2FA через приложение</div>
              <div className="text-sm text-muted-foreground">Использовать Google Authenticator</div>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Активные сеансы</CardTitle>
          <CardDescription>Устройства с доступом к аккаунту</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <Icon name="Monitor" size={24} className="text-primary" />
              <div>
                <div className="font-medium">Chrome на Windows</div>
                <div className="text-sm text-muted-foreground">Москва • Сейчас</div>
              </div>
            </div>
            <Badge>Текущий</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <Icon name="Smartphone" size={24} className="text-secondary" />
              <div>
                <div className="font-medium">Safari на iPhone</div>
                <div className="text-sm text-muted-foreground">Москва • 2 часа назад</div>
              </div>
            </div>
            <Button variant="outline" size="sm">Завершить</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityTab;
