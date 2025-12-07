import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatisticsHeader from '@/components/statistics/StatisticsHeader';
import StatisticsSummaryCards from '@/components/statistics/StatisticsSummaryCards';
import StatisticsOverviewTab from '@/components/statistics/StatisticsOverviewTab';
import StatisticsDetailedTabs from '@/components/statistics/StatisticsDetailedTabs';

const Statistics = () => {
  const [period, setPeriod] = useState('month');

  const summaryMetrics = [
    {
      title: 'Реклама',
      data: [
        { label: 'Бюджет', value: '₽50,000' },
        { label: 'Клики', value: '1,234' },
        { label: 'Конверсии', value: '45' },
        { label: 'ROI', value: '85%', highlight: true }
      ],
      icon: 'Megaphone',
      color: 'text-orange-600'
    },
    {
      title: 'Заинтересованность',
      data: [
        { label: 'Просмотры', value: '5,678' },
        { label: 'Переходы', value: '234' },
        { label: 'Время', value: '2:34' }
      ],
      icon: 'Eye',
      color: 'text-blue-600'
    },
    {
      title: 'Покупки/Продажи',
      data: [
        { label: 'Количество', value: '123' },
        { label: 'Сумма', value: '₽450,000' },
        { label: 'Средний чек', value: '₽3,659' }
      ],
      icon: 'ShoppingCart',
      color: 'text-green-600'
    },
    {
      title: 'Чистый доход',
      data: [
        { label: 'Доходы', value: '₽450,000' },
        { label: 'Расходы', value: '₽100,000' },
        { label: 'Прибыль', value: '₽350,000', highlight: true }
      ],
      icon: 'Wallet',
      color: 'text-emerald-600'
    }
  ];

  const topProducts = [
    { name: 'Органический кофе Арабика', sales: 89, revenue: 79210 },
    { name: 'Набор чая премиум', sales: 67, revenue: 86430 },
    { name: 'Кофейные капсулы', sales: 124, revenue: 55800 }
  ];

  const bankConnections = [
    { name: 'Тинькофф Бизнес', connected: true, balance: 245000 },
    { name: 'Сбербанк', connected: true, balance: 128000 },
    { name: 'Альфа-Банк', connected: false, balance: 0 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <StatisticsHeader period={period} onPeriodChange={setPeriod} />

        <StatisticsSummaryCards summaryMetrics={summaryMetrics} />

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="ads">Реклама</TabsTrigger>
            <TabsTrigger value="traffic">Заинтересованность</TabsTrigger>
            <TabsTrigger value="sales">Покупки</TabsTrigger>
            <TabsTrigger value="finance">Финансы</TabsTrigger>
          </TabsList>

          <StatisticsOverviewTab />
          
          <StatisticsDetailedTabs 
            topProducts={topProducts}
            bankConnections={bankConnections}
          />
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;
