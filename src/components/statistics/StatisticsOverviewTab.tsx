import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const StatisticsOverviewTab = () => {
  return (
    <TabsContent value="overview" className="space-y-6 mt-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Доходы и расходы</CardTitle>
            <CardDescription>Динамика за последние 30 дней</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center text-muted-foreground">
                <Icon name="TrendingUp" size={48} className="mx-auto mb-2 opacity-20" />
                <p className="text-sm">Линейный график</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Конверсии</CardTitle>
            <CardDescription>Сравнение по источникам</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center text-muted-foreground">
                <Icon name="BarChart3" size={48} className="mx-auto mb-2 opacity-20" />
                <p className="text-sm">Столбчатая диаграмма</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Источники трафика</CardTitle>
            <CardDescription>Распределение посетителей</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center text-muted-foreground">
                <Icon name="PieChart" size={48} className="mx-auto mb-2 opacity-20" />
                <p className="text-sm">Круговая диаграмма</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Тепловая карта активности</CardTitle>
            <CardDescription>Пиковые часы посещений</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center text-muted-foreground">
                <Icon name="Grid3x3" size={48} className="mx-auto mb-2 opacity-20" />
                <p className="text-sm">Тепловая карта</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default StatisticsOverviewTab;
