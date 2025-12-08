import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { ProfileTab } from '@/components/settings/ProfileTab';
import { BalanceTab } from '@/components/settings/BalanceTab';
import { TariffTab } from '@/components/settings/TariffTab';
import { IntegrationsTab } from '@/components/settings/IntegrationsTab';
import { SecurityTab } from '@/components/settings/SecurityTab';

const Settings = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [autoImport, setAutoImport] = useState(true);
  const balance = 10000;
  const currentTariff = 'Pro';
  const userType = 'entrepreneur';

  const transactions = [
    { id: '1', date: '2025-12-05', type: 'Пополнение', amount: '+5,000', status: 'completed' },
    { id: '2', date: '2025-12-03', type: 'Оплата тарифа Pro', amount: '-990', status: 'completed' },
    { id: '3', date: '2025-12-01', type: 'Пополнение', amount: '+10,000', status: 'completed' },
    { id: '4', date: '2025-11-28', type: 'Списание за AI', amount: '-150', status: 'completed' }
  ];

  const banks = [
    { id: 'tinkoff', name: 'Тинькофф-Бизнес', connected: true, balance: '₽125,430' },
    { id: 'sber', name: 'СберБизнес', connected: false, balance: null },
    { id: 'alfa', name: 'Альфа-Банк', connected: false, balance: null }
  ];

  const sessions = [
    { id: '1', device: 'MacBook Pro', location: 'Москва, Россия', lastActive: '5 мин назад', current: true },
    { id: '2', device: 'iPhone 14', location: 'Москва, Россия', lastActive: '2 часа назад', current: false },
    { id: '3', device: 'Windows PC', location: 'Санкт-Петербург, Россия', lastActive: '1 день назад', current: false }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Настройки</h1>
          <p className="text-muted-foreground">Управление профилем и параметрами аккаунта</p>
        </div>

        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="balance">Баланс</TabsTrigger>
            <TabsTrigger value="tariff">Тарифы</TabsTrigger>
            <TabsTrigger value="integrations">Интеграции</TabsTrigger>
            <TabsTrigger value="security">Безопасность</TabsTrigger>
            {userType === 'freelancer' && <TabsTrigger value="withdrawal">Вывод средств</TabsTrigger>}
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <ProfileTab />
          </TabsContent>

          <TabsContent value="balance" className="space-y-6">
            <BalanceTab balance={balance} transactions={transactions} />
          </TabsContent>

          <TabsContent value="tariff" className="space-y-6">
            <TariffTab currentTariff={currentTariff} />
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <IntegrationsTab banks={banks} autoImport={autoImport} setAutoImport={setAutoImport} />
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <SecurityTab is2FAEnabled={is2FAEnabled} setIs2FAEnabled={setIs2FAEnabled} sessions={sessions} />
          </TabsContent>

          {userType === 'freelancer' && (
            <TabsContent value="withdrawal" className="space-y-6">
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  Раздел вывода средств доступен только для фрилансеров
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
