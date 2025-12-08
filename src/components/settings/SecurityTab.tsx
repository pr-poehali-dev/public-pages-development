import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

interface SecurityTabProps {
  is2FAEnabled: boolean;
  setIs2FAEnabled: (value: boolean) => void;
  sessions: Array<{
    id: string;
    device: string;
    location: string;
    lastActive: string;
    current: boolean;
  }>;
}

export const SecurityTab = ({ is2FAEnabled, setIs2FAEnabled, sessions }: SecurityTabProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Смена пароля</CardTitle>
          <CardDescription>Обновите пароль для повышения безопасности</CardDescription>
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
            <Label>Подтвердите новый пароль</Label>
            <Input type="password" />
          </div>
          <Button>Сменить пароль</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Двухфакторная аутентификация (2FA)</CardTitle>
          <CardDescription>Дополнительная защита вашего аккаунта</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Authenticator App</p>
              <p className="text-sm text-muted-foreground">Google Authenticator, Authy</p>
            </div>
            <Switch checked={is2FAEnabled} onCheckedChange={setIs2FAEnabled} />
          </div>
          {is2FAEnabled && (
            <div className="p-4 bg-muted/50 rounded-lg space-y-3">
              <p className="text-sm font-medium">Отсканируйте QR-код в приложении:</p>
              <div className="w-48 h-48 bg-white rounded-lg mx-auto flex items-center justify-center">
                <Icon name="QrCode" size={180} className="text-muted-foreground" />
              </div>
              <Input placeholder="Введите код из приложения" />
              <Button className="w-full">Подтвердить</Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Активные сессии</CardTitle>
          <CardDescription>Устройства, на которых выполнен вход</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {sessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon
                    name={session.device.includes('Mac') || session.device.includes('Windows') ? 'Monitor' : 'Smartphone'}
                    size={20}
                    className="text-primary"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{session.device}</p>
                    {session.current && <Badge className="bg-green-100 text-green-700">Текущая</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{session.location}</p>
                  <p className="text-xs text-muted-foreground">Активна: {session.lastActive}</p>
                </div>
              </div>
              {!session.current && (
                <Button variant="outline" size="sm">
                  Завершить
                </Button>
              )}
            </div>
          ))}
          <Button variant="destructive" className="w-full">
            Выйти со всех устройств
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
