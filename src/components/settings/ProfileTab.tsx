import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export const ProfileTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Профиль</CardTitle>
        <CardDescription>Управление личной информацией</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
            ИП
          </div>
          <div className="space-y-2">
            <Button size="sm">
              <Icon name="Upload" className="mr-2" size={14} />
              Загрузить фото
            </Button>
            <p className="text-xs text-muted-foreground">JPG, PNG до 5 МБ</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>ФИО</Label>
            <Input defaultValue="Иван Петров" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" defaultValue="ivan@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Телефон</Label>
            <Input defaultValue="+7 (999) 123-45-67" />
          </div>
          <div className="space-y-2">
            <Label>Компания</Label>
            <Input defaultValue="ИП Петров И.И." />
          </div>
        </div>

        <div className="space-y-2">
          <Label>О себе</Label>
          <textarea
            className="w-full p-3 border border-border rounded-md resize-none"
            rows={4}
            placeholder="Расскажите о себе и своем бизнесе..."
          />
        </div>

        <Button>Сохранить изменения</Button>
      </CardContent>
    </Card>
  );
};
