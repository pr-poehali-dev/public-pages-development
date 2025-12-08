# API Documentation

Универсальная функция для работы с ботами, маркетплейсом и биржей.

**Base URL**: `https://functions.poehali.dev/ea7403b2-c106-4a24-9f6a-41525a179d20`

---

## 🤖 Bots API

### Создать бота
```http
POST /bots
Content-Type: application/json

{
  "user_id": 1,
  "name": "Мой бот",
  "description": "Описание бота",
  "platform": "telegram"
}
```

### Получить ботов пользователя
```http
GET /bots?user_id=1
```

### Получить бота по ID
```http
GET /bots?bot_id=1
```

### Создать узел сценария
```http
POST /bots/nodes
Content-Type: application/json

{
  "bot_id": 1,
  "node_type": "message",
  "title": "Приветствие",
  "content": {
    "text": "Привет! Я бот.",
    "buttons": ["Начать", "Помощь"]
  },
  "position_x": 100,
  "position_y": 200
}
```

### Получить узлы бота
```http
GET /bots/nodes?bot_id=1
```

### Создать связь между узлами
```http
POST /bots/connections
Content-Type: application/json

{
  "bot_id": 1,
  "source_node_id": 1,
  "target_node_id": 2,
  "condition_type": "button_click",
  "condition_value": "Начать"
}
```

### Получить связи бота
```http
GET /bots/connections?bot_id=1
```

---

## 🛒 Marketplace API

### Создать товар
```http
POST /marketplace
Content-Type: application/json

{
  "seller_id": 1,
  "title": "Шаблон лендинга",
  "description": "Современный шаблон посадочной страницы",
  "category": "site_templates",
  "item_type": "template",
  "price": 1999.99
}
```

### Получить все товары
```http
GET /marketplace
```

### Получить товары по категории
```http
GET /marketplace?category=site_templates
```

### Поиск товаров
```http
GET /marketplace?search=landing
```

### Получить товар по ID
```http
GET /marketplace?item_id=1
```

### Купить товар
```http
POST /marketplace/purchase
Content-Type: application/json

{
  "buyer_id": 1,
  "item_id": 1
}
```

### Добавить отзыв
```http
POST /marketplace/review
Content-Type: application/json

{
  "item_id": 1,
  "user_id": 1,
  "rating": 5,
  "comment": "Отличный шаблон!"
}
```

### Получить отзывы товара
```http
GET /marketplace/review?item_id=1
```

---

## 💼 Exchange API (Биржа фриланса)

### Создать заказ
```http
POST /exchange
Content-Type: application/json

{
  "client_id": 1,
  "title": "Нужен лендинг",
  "description": "Требуется разработать посадочную страницу для стартапа",
  "category": "site_development",
  "budget_min": 10000,
  "budget_max": 25000
}
```

### Получить открытые заказы
```http
GET /exchange?status=open
```

### Получить заказ по ID
```http
GET /exchange?order_id=1
```

### Создать услугу исполнителя
```http
POST /exchange/services
Content-Type: application/json

{
  "freelancer_id": 1,
  "title": "Разработка лендингов",
  "description": "Создаю современные посадочные страницы",
  "category": "site_development",
  "price": 15000
}
```

### Получить услуги исполнителя
```http
GET /exchange/services?freelancer_id=1
```

### Получить услуги по категории
```http
GET /exchange/services?category=site_development
```

### Создать отклик на заказ
```http
POST /exchange/proposals
Content-Type: application/json

{
  "order_id": 1,
  "freelancer_id": 1,
  "price": 20000,
  "message": "Готов выполнить ваш заказ за 7 дней"
}
```

### Получить отклики на заказ
```http
GET /exchange/proposals?order_id=1
```

---

## Категории

### Marketplace
- `site_templates` - Шаблоны сайтов
- `bot_templates` - Шаблоны ботов
- `scripts` - Скрипты
- `extensions` - Расширения
- `projects` - Готовые проекты
- `services` - Услуги
- `design` - Дизайн
- `content` - Контент

### Exchange
- `site_development` - Разработка сайтов
- `bot_development` - Разработка ботов
- `design` - Дизайн
- `content` - Контент
- `marketing` - Маркетинг
- `consulting` - Консалтинг
- `other` - Другое

### Bot Platforms
- `telegram` - Telegram
- `whatsapp` - WhatsApp
- `vk` - VKontakte
- `viber` - Viber
- `instagram` - Instagram

### Bot Node Types
- `message` - Сообщение
- `condition` - Условие
- `delay` - Задержка
- `api` - API-вызов
- `payment` - Платеж
- `menu` - Меню
- `gallery` - Галерея
- `video` - Видео
- `file` - Файл
- `product` - Товары
- `note` - Заметка
- `action` - Действие
- `random` - Случайный выбор
