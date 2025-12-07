import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BalanceTab = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Баланс аккаунта</CardTitle>
          <CardDescription>Управление средствами на платформе</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 mb-6">
            <div className="text-5xl font-bold mb-2">₽2,450</div>
            <p className="text-muted-foreground">Доступно для использования</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button>
              <Icon name="Plus" className="mr-2" size={18} />
              Пополнить
            </Button>
            <Button variant="outline">
              <Icon name="ArrowDownToLine" className="mr-2" size={18} />
              Вывести
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">История операций</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Plus" className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Пополнение</div>
                    <div className="text-sm text-muted-foreground">15 дек 2024, 14:30</div>
                  </div>
                </div>
                <div className="text-lg font-semibold text-green-600">+₽5,000</div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name="Minus" className="text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium">Оплата тарифа Pro</div>
                    <div className="text-sm text-muted-foreground">12 дек 2024, 10:15</div>
                  </div>
                </div>
                <div className="text-lg font-semibold text-red-600">-₽990</div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="ShoppingCart" className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Покупка шаблона</div>
                    <div className="text-sm text-muted-foreground">10 дек 2024, 16:45</div>
                  </div>
                </div>
                <div className="text-lg font-semibold text-red-600">-₽2,990</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Способы пополнения</CardTitle>
          <CardDescription>Выберите удобный способ</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <Icon name="CreditCard" size={24} className="text-primary" />
              <div>
                <div className="font-semibold">Банковская карта</div>
                <div className="text-sm text-muted-foreground">Visa, MasterCard, МИР</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <Icon name="Wallet" size={24} className="text-secondary" />
              <div>
                <div className="font-semibold">Криптовалюта</div>
                <div className="text-sm text-muted-foreground">BTC, ETH, USDT</div>
              </div>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default BalanceTab;
