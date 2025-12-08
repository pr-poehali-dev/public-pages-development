import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

interface IntegrationsTabProps {
  banks: Array<{
    id: string;
    name: string;
    connected: boolean;
    balance: string | null;
  }>;
  autoImport: boolean;
  setAutoImport: (value: boolean) => void;
}

export const IntegrationsTab = ({ banks, autoImport, setAutoImport }: IntegrationsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Банковские интеграции</CardTitle>
        <CardDescription>Подключите банковские счета для автоматического учета</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {banks.map((bank) => (
          <div key={bank.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Building" size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold">{bank.name}</p>
                {bank.connected && <p className="text-sm text-muted-foreground">Баланс: {bank.balance}</p>}
              </div>
            </div>
            {bank.connected ? (
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700">Подключен</Badge>
                <Button variant="outline" size="sm">Настроить</Button>
              </div>
            ) : (
              <Button size="sm">Подключить</Button>
            )}
          </div>
        ))}
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Icon name="Download" size={18} className="text-primary" />
            <div>
              <p className="font-medium">Автоматический импорт выписок</p>
              <p className="text-sm text-muted-foreground">Ежедневное обновление транзакций</p>
            </div>
          </div>
          <Switch checked={autoImport} onCheckedChange={setAutoImport} />
        </div>
      </CardContent>
    </Card>
  );
};
