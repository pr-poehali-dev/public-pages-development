import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { DraggableBlock } from '@/components/editor/DraggableBlock';
import { DropZone } from '@/components/editor/DropZone';
import { BlockRenderer } from '@/components/editor/BlockRenderer';
import { useToast } from '@/hooks/use-toast';

const SiteEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  
  const [projectName, setProjectName] = useState('Новый сайт');
  const [isEditingName, setIsEditingName] = useState(false);
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedBlockId, setSelectedBlockId] = useState<number | null>(null);
  const [pageBlocks, setPageBlocks] = useState<any[]>([]);
  const [currentPageId, setCurrentPageId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [editingContent, setEditingContent] = useState<any>({});

  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['Все', 'Контент', 'Медиа', 'Формы', 'Действия', 'Коммерция', 'Интеграции', 'Навигация'];
  
  const allBlocks = [
    // Контент (40)
    { id: 'hero', name: 'Заголовок Hero', icon: 'Heading1', category: 'Контент', color: 'blue' },
    { id: 'text', name: 'Текстовый блок', icon: 'Type', category: 'Контент', color: 'blue' },
    { id: 'heading-h1', name: 'Заголовок H1', icon: 'Heading1', category: 'Контент', color: 'blue' },
    { id: 'heading-h2', name: 'Заголовок H2', icon: 'Heading2', category: 'Контент', color: 'blue' },
    { id: 'heading-h3', name: 'Заголовок H3', icon: 'Heading3', category: 'Контент', color: 'blue' },
    { id: 'paragraph', name: 'Параграф', icon: 'AlignLeft', category: 'Контент', color: 'blue' },
    { id: 'quote', name: 'Цитата', icon: 'Quote', category: 'Контент', color: 'blue' },
    { id: 'list-bullet', name: 'Маркированный список', icon: 'List', category: 'Контент', color: 'blue' },
    { id: 'list-number', name: 'Нумерованный список', icon: 'ListOrdered', category: 'Контент', color: 'blue' },
    { id: 'divider', name: 'Разделитель', icon: 'Minus', category: 'Контент', color: 'blue' },
    { id: 'spacer', name: 'Отступ', icon: 'MoveVertical', category: 'Контент', color: 'blue' },
    { id: 'code', name: 'Код', icon: 'Code', category: 'Контент', color: 'blue' },
    { id: 'html', name: 'HTML код', icon: 'FileCode', category: 'Контент', color: 'blue' },
    { id: 'iframe', name: 'IFrame', icon: 'Monitor', category: 'Контент', color: 'blue' },
    { id: 'alert', name: 'Уведомление', icon: 'AlertCircle', category: 'Контент', color: 'blue' },
    { id: 'callout', name: 'Выноска', icon: 'MessageCircle', category: 'Контент', color: 'blue' },
    { id: 'timeline', name: 'Таймлайн', icon: 'Clock', category: 'Контент', color: 'blue' },
    { id: 'steps', name: 'Шаги', icon: 'ListChecks', category: 'Контент', color: 'blue' },
    { id: 'features-grid', name: 'Сетка функций', icon: 'Grid3x3', category: 'Контент', color: 'blue' },
    { id: 'icon-box', name: 'Блок с иконкой', icon: 'Box', category: 'Контент', color: 'blue' },
    { id: 'stats', name: 'Статистика', icon: 'TrendingUp', category: 'Контент', color: 'blue' },
    { id: 'counter', name: 'Счетчик', icon: 'Hash', category: 'Контент', color: 'blue' },
    { id: 'progress-bar', name: 'Прогресс бар', icon: 'Activity', category: 'Контент', color: 'blue' },
    { id: 'skill-bar', name: 'Шкала навыков', icon: 'BarChart3', category: 'Контент', color: 'blue' },
    { id: 'testimonial', name: 'Отзыв', icon: 'MessageSquare', category: 'Контент', color: 'blue' },
    { id: 'reviews', name: 'Список отзывов', icon: 'Star', category: 'Контент', color: 'blue' },
    { id: 'faq', name: 'FAQ', icon: 'HelpCircle', category: 'Контент', color: 'blue' },
    { id: 'accordion', name: 'Аккордеон', icon: 'ChevronsUpDown', category: 'Контент', color: 'blue' },
    { id: 'tabs', name: 'Вкладки', icon: 'Layers', category: 'Контент', color: 'blue' },
    { id: 'toggle', name: 'Переключатель', icon: 'ToggleLeft', category: 'Контент', color: 'blue' },
    { id: 'tooltip', name: 'Подсказка', icon: 'Info', category: 'Контент', color: 'blue' },
    { id: 'badge', name: 'Бейдж', icon: 'Award', category: 'Контент', color: 'blue' },
    { id: 'logo-cloud', name: 'Облако логотипов', icon: 'Cloud', category: 'Контент', color: 'blue' },
    { id: 'team', name: 'Команда', icon: 'Users', category: 'Контент', color: 'blue' },
    { id: 'team-member', name: 'Член команды', icon: 'User', category: 'Контент', color: 'blue' },
    { id: 'blog-grid', name: 'Сетка статей', icon: 'Newspaper', category: 'Контент', color: 'blue' },
    { id: 'blog-post', name: 'Статья блога', icon: 'FileText', category: 'Контент', color: 'blue' },
    { id: 'portfolio-grid', name: 'Портфолио', icon: 'Briefcase', category: 'Контент', color: 'blue' },
    { id: 'case-study', name: 'Кейс', icon: 'Lightbulb', category: 'Контент', color: 'blue' },
    { id: 'before-after', name: 'До/После', icon: 'ArrowLeftRight', category: 'Контент', color: 'blue' },

    // Медиа (35)
    { id: 'image', name: 'Изображение', icon: 'Image', category: 'Медиа', color: 'purple' },
    { id: 'image-text', name: 'Изображение + Текст', icon: 'ImagePlus', category: 'Медиа', color: 'purple' },
    { id: 'image-overlay', name: 'Изображение с наложением', icon: 'ImageOff', category: 'Медиа', color: 'purple' },
    { id: 'gallery', name: 'Галерея', icon: 'Images', category: 'Медиа', color: 'purple' },
    { id: 'gallery-masonry', name: 'Галерея Masonry', icon: 'LayoutGrid', category: 'Медиа', color: 'purple' },
    { id: 'carousel', name: 'Карусель', icon: 'CircleArrowRight', category: 'Медиа', color: 'purple' },
    { id: 'slider', name: 'Слайдер', icon: 'SlidersHorizontal', category: 'Медиа', color: 'purple' },
    { id: 'lightbox', name: 'Лайтбокс', icon: 'Maximize', category: 'Медиа', color: 'purple' },
    { id: 'video', name: 'Видео', icon: 'Video', category: 'Медиа', color: 'purple' },
    { id: 'video-youtube', name: 'YouTube', icon: 'Youtube', category: 'Медиа', color: 'purple' },
    { id: 'video-vimeo', name: 'Vimeo', icon: 'Film', category: 'Медиа', color: 'purple' },
    { id: 'video-background', name: 'Видео фон', icon: 'Clapperboard', category: 'Медиа', color: 'purple' },
    { id: 'audio', name: 'Аудио', icon: 'Music', category: 'Медиа', color: 'purple' },
    { id: 'podcast', name: 'Подкаст', icon: 'Mic', category: 'Медиа', color: 'purple' },
    { id: 'icon', name: 'Иконка', icon: 'Smile', category: 'Медиа', color: 'purple' },
    { id: 'icon-list', name: 'Список иконок', icon: 'CircleDot', category: 'Медиа', color: 'purple' },
    { id: 'lottie', name: 'Lottie анимация', icon: 'Sparkles', category: 'Медиа', color: 'purple' },
    { id: 'gif', name: 'GIF', icon: 'FileImage', category: 'Медиа', color: 'purple' },
    { id: 'svg', name: 'SVG', icon: 'Pentagon', category: 'Медиа', color: 'purple' },
    { id: 'shape', name: 'Фигура', icon: 'Square', category: 'Медиа', color: 'purple' },
    { id: 'background-image', name: 'Фон изображение', icon: 'Wallpaper', category: 'Медиа', color: 'purple' },
    { id: 'background-video', name: 'Фон видео', icon: 'VideoOff', category: 'Медиа', color: 'purple' },
    { id: 'background-gradient', name: 'Фон градиент', icon: 'Palette', category: 'Медиа', color: 'purple' },
    { id: 'parallax', name: 'Параллакс', icon: 'Layers2', category: 'Медиа', color: 'purple' },
    { id: 'particles', name: 'Частицы', icon: 'Sparkle', category: 'Медиа', color: 'purple' },
    { id: 'avatar', name: 'Аватар', icon: 'UserCircle', category: 'Медиа', color: 'purple' },
    { id: 'profile', name: 'Профиль', icon: 'IdCard', category: 'Медиа', color: 'purple' },
    { id: 'screenshot', name: 'Скриншот', icon: 'Smartphone', category: 'Медиа', color: 'purple' },
    { id: 'mockup', name: 'Мокап', icon: 'Laptop', category: 'Медиа', color: 'purple' },
    { id: '3d-model', name: '3D модель', icon: 'Box', category: 'Медиа', color: 'purple' },
    { id: 'ar-view', name: 'AR просмотр', icon: 'Glasses', category: 'Медиа', color: 'purple' },
    { id: 'qr-code', name: 'QR код', icon: 'QrCode', category: 'Медиа', color: 'purple' },
    { id: 'barcode', name: 'Штрихкод', icon: 'ScanLine', category: 'Медиа', color: 'purple' },
    { id: 'emoji', name: 'Эмодзи', icon: 'Laugh', category: 'Медиа', color: 'purple' },
    { id: 'sticker', name: 'Стикер', icon: 'Sticker', category: 'Медиа', color: 'purple' },

    // Формы (30)
    { id: 'form', name: 'Форма', icon: 'Mail', category: 'Формы', color: 'green' },
    { id: 'contact-form', name: 'Форма связи', icon: 'MessageCircle', category: 'Формы', color: 'green' },
    { id: 'subscribe-form', name: 'Подписка', icon: 'MailPlus', category: 'Формы', color: 'green' },
    { id: 'login-form', name: 'Вход', icon: 'LogIn', category: 'Формы', color: 'green' },
    { id: 'register-form', name: 'Регистрация', icon: 'UserPlus', category: 'Формы', color: 'green' },
    { id: 'search-form', name: 'Поиск', icon: 'Search', category: 'Формы', color: 'green' },
    { id: 'filter-form', name: 'Фильтр', icon: 'Filter', category: 'Формы', color: 'green' },
    { id: 'booking-form', name: 'Бронирование', icon: 'Calendar', category: 'Формы', color: 'green' },
    { id: 'appointment-form', name: 'Запись', icon: 'CalendarCheck', category: 'Формы', color: 'green' },
    { id: 'quote-form', name: 'Запрос цены', icon: 'DollarSign', category: 'Формы', color: 'green' },
    { id: 'survey-form', name: 'Опрос', icon: 'ClipboardList', category: 'Формы', color: 'green' },
    { id: 'feedback-form', name: 'Отзыв', icon: 'ThumbsUp', category: 'Формы', color: 'green' },
    { id: 'application-form', name: 'Заявка', icon: 'FileCheck', category: 'Формы', color: 'green' },
    { id: 'order-form', name: 'Заказ', icon: 'ShoppingBag', category: 'Формы', color: 'green' },
    { id: 'download-form', name: 'Скачать', icon: 'Download', category: 'Формы', color: 'green' },
    { id: 'input-text', name: 'Текстовое поле', icon: 'TextCursor', category: 'Формы', color: 'green' },
    { id: 'input-email', name: 'Email поле', icon: 'AtSign', category: 'Формы', color: 'green' },
    { id: 'input-phone', name: 'Телефон поле', icon: 'Phone', category: 'Формы', color: 'green' },
    { id: 'input-number', name: 'Числовое поле', icon: 'Hash', category: 'Формы', color: 'green' },
    { id: 'textarea', name: 'Многострочный текст', icon: 'AlignJustify', category: 'Формы', color: 'green' },
    { id: 'select', name: 'Выпадающий список', icon: 'ChevronDown', category: 'Формы', color: 'green' },
    { id: 'checkbox', name: 'Чекбокс', icon: 'CheckSquare', category: 'Формы', color: 'green' },
    { id: 'radio', name: 'Радиокнопка', icon: 'CircleDot', category: 'Формы', color: 'green' },
    { id: 'toggle-switch', name: 'Переключатель', icon: 'ToggleRight', category: 'Формы', color: 'green' },
    { id: 'datepicker', name: 'Выбор даты', icon: 'CalendarDays', category: 'Формы', color: 'green' },
    { id: 'timepicker', name: 'Выбор времени', icon: 'Clock', category: 'Формы', color: 'green' },
    { id: 'file-upload', name: 'Загрузка файла', icon: 'Upload', category: 'Формы', color: 'green' },
    { id: 'rating', name: 'Рейтинг', icon: 'Star', category: 'Формы', color: 'green' },
    { id: 'slider-input', name: 'Ползунок', icon: 'SlidersHorizontal', category: 'Формы', color: 'green' },
    { id: 'color-picker', name: 'Выбор цвета', icon: 'Palette', category: 'Формы', color: 'green' },

    // Действия (25)
    { id: 'button', name: 'Кнопка', icon: 'MousePointerClick', category: 'Действия', color: 'orange' },
    { id: 'button-group', name: 'Группа кнопок', icon: 'LayoutGrid', category: 'Действия', color: 'orange' },
    { id: 'cta-button', name: 'CTA кнопка', icon: 'Target', category: 'Действия', color: 'orange' },
    { id: 'link', name: 'Ссылка', icon: 'Link', category: 'Действия', color: 'orange' },
    { id: 'anchor', name: 'Якорь', icon: 'Anchor', category: 'Действия', color: 'orange' },
    { id: 'scroll-to-top', name: 'Наверх', icon: 'ArrowUp', category: 'Действия', color: 'orange' },
    { id: 'back-button', name: 'Назад', icon: 'ArrowLeft', category: 'Действия', color: 'orange' },
    { id: 'share-button', name: 'Поделиться', icon: 'Share2', category: 'Действия', color: 'orange' },
    { id: 'print-button', name: 'Печать', icon: 'Printer', category: 'Действия', color: 'orange' },
    { id: 'copy-button', name: 'Копировать', icon: 'Copy', category: 'Действия', color: 'orange' },
    { id: 'download-button', name: 'Скачать', icon: 'Download', category: 'Действия', color: 'orange' },
    { id: 'modal-trigger', name: 'Открыть модалку', icon: 'PanelTop', category: 'Действия', color: 'orange' },
    { id: 'popup', name: 'Попап', icon: 'PanelTopOpen', category: 'Действия', color: 'orange' },
    { id: 'modal', name: 'Модальное окно', icon: 'Square', category: 'Действия', color: 'orange' },
    { id: 'drawer', name: 'Боковая панель', icon: 'PanelRight', category: 'Действия', color: 'orange' },
    { id: 'dropdown', name: 'Выпадающее меню', icon: 'ChevronDown', category: 'Действия', color: 'orange' },
    { id: 'mega-menu', name: 'Мега меню', icon: 'LayoutDashboard', category: 'Действия', color: 'orange' },
    { id: 'breadcrumbs', name: 'Хлебные крошки', icon: 'ChevronRight', category: 'Действия', color: 'orange' },
    { id: 'pagination', name: 'Пагинация', icon: 'ChevronsRight', category: 'Действия', color: 'orange' },
    { id: 'load-more', name: 'Загрузить еще', icon: 'RefreshCw', category: 'Действия', color: 'orange' },
    { id: 'infinite-scroll', name: 'Бесконечный скролл', icon: 'ArrowDown', category: 'Действия', color: 'orange' },
    { id: 'filter-bar', name: 'Панель фильтров', icon: 'Filter', category: 'Действия', color: 'orange' },
    { id: 'sort-bar', name: 'Сортировка', icon: 'ArrowUpDown', category: 'Действия', color: 'orange' },
    { id: 'language-switcher', name: 'Переключатель языка', icon: 'Languages', category: 'Действия', color: 'orange' },
    { id: 'theme-switcher', name: 'Переключатель темы', icon: 'Moon', category: 'Действия', color: 'orange' },

    // Коммерция (25)
    { id: 'pricing', name: 'Тарифы', icon: 'DollarSign', category: 'Коммерция', color: 'yellow' },
    { id: 'pricing-card', name: 'Карточка тарифа', icon: 'CreditCard', category: 'Коммерция', color: 'yellow' },
    { id: 'product-card', name: 'Карточка товара', icon: 'ShoppingBag', category: 'Коммерция', color: 'yellow' },
    { id: 'product-grid', name: 'Сетка товаров', icon: 'Grid2x2', category: 'Коммерция', color: 'yellow' },
    { id: 'product-details', name: 'Описание товара', icon: 'Package', category: 'Коммерция', color: 'yellow' },
    { id: 'add-to-cart', name: 'Добавить в корзину', icon: 'ShoppingCart', category: 'Коммерция', color: 'yellow' },
    { id: 'cart', name: 'Корзина', icon: 'ShoppingCart', category: 'Коммерция', color: 'yellow' },
    { id: 'cart-icon', name: 'Иконка корзины', icon: 'ShoppingBasket', category: 'Коммерция', color: 'yellow' },
    { id: 'wishlist', name: 'Избранное', icon: 'Heart', category: 'Коммерция', color: 'yellow' },
    { id: 'checkout', name: 'Оформление заказа', icon: 'CreditCard', category: 'Коммерция', color: 'yellow' },
    { id: 'payment', name: 'Оплата', icon: 'Wallet', category: 'Коммерция', color: 'yellow' },
    { id: 'discount-badge', name: 'Бейдж скидки', icon: 'Percent', category: 'Коммерция', color: 'yellow' },
    { id: 'sale-banner', name: 'Баннер распродажи', icon: 'Tag', category: 'Коммерция', color: 'yellow' },
    { id: 'countdown-timer', name: 'Таймер обратного отсчета', icon: 'Timer', category: 'Коммерция', color: 'yellow' },
    { id: 'stock-status', name: 'Наличие товара', icon: 'PackageCheck', category: 'Коммерция', color: 'yellow' },
    { id: 'product-filter', name: 'Фильтр товаров', icon: 'Filter', category: 'Коммерция', color: 'yellow' },
    { id: 'product-sort', name: 'Сортировка товаров', icon: 'ArrowUpDown', category: 'Коммерция', color: 'yellow' },
    { id: 'product-search', name: 'Поиск товаров', icon: 'Search', category: 'Коммерция', color: 'yellow' },
    { id: 'related-products', name: 'Похожие товары', icon: 'Shuffle', category: 'Коммерция', color: 'yellow' },
    { id: 'upsell', name: 'Допродажа', icon: 'TrendingUp', category: 'Коммерция', color: 'yellow' },
    { id: 'cross-sell', name: 'Перекрестная продажа', icon: 'ArrowRightLeft', category: 'Коммерция', color: 'yellow' },
    { id: 'comparison-table', name: 'Сравнение товаров', icon: 'Columns', category: 'Коммерция', color: 'yellow' },
    { id: 'invoice', name: 'Счет', icon: 'Receipt', category: 'Коммерция', color: 'yellow' },
    { id: 'order-tracking', name: 'Отслеживание заказа', icon: 'MapPin', category: 'Коммерция', color: 'yellow' },
    { id: 'shipping-info', name: 'Информация о доставке', icon: 'Truck', category: 'Коммерция', color: 'yellow' },

    // Интеграции (25)
    { id: 'map', name: 'Карта', icon: 'Map', category: 'Интеграции', color: 'red' },
    { id: 'google-maps', name: 'Google Maps', icon: 'MapPin', category: 'Интеграции', color: 'red' },
    { id: 'yandex-maps', name: 'Яндекс Карты', icon: 'Navigation', category: 'Интеграции', color: 'red' },
    { id: 'social-links', name: 'Соцсети', icon: 'Share2', category: 'Интеграции', color: 'red' },
    { id: 'social-share', name: 'Поделиться в соцсетях', icon: 'Forward', category: 'Интеграции', color: 'red' },
    { id: 'facebook-like', name: 'Facebook Like', icon: 'ThumbsUp', category: 'Интеграции', color: 'red' },
    { id: 'instagram-feed', name: 'Instagram лента', icon: 'Instagram', category: 'Интеграции', color: 'red' },
    { id: 'twitter-feed', name: 'Twitter лента', icon: 'Twitter', category: 'Интеграции', color: 'red' },
    { id: 'youtube-channel', name: 'YouTube канал', icon: 'Youtube', category: 'Интеграции', color: 'red' },
    { id: 'telegram-widget', name: 'Telegram виджет', icon: 'MessageCircle', category: 'Интеграции', color: 'red' },
    { id: 'whatsapp-button', name: 'WhatsApp кнопка', icon: 'Phone', category: 'Интеграции', color: 'red' },
    { id: 'viber-button', name: 'Viber кнопка', icon: 'PhoneCall', category: 'Интеграции', color: 'red' },
    { id: 'messenger-button', name: 'Messenger кнопка', icon: 'MessageSquare', category: 'Интеграции', color: 'red' },
    { id: 'chat-widget', name: 'Онлайн чат', icon: 'MessagesSquare', category: 'Интеграции', color: 'red' },
    { id: 'callback-widget', name: 'Обратный звонок', icon: 'PhoneIncoming', category: 'Интеграции', color: 'red' },
    { id: 'calendar-booking', name: 'Календарь бронирования', icon: 'CalendarCheck', category: 'Интеграции', color: 'red' },
    { id: 'google-analytics', name: 'Google Analytics', icon: 'BarChart', category: 'Интеграции', color: 'red' },
    { id: 'yandex-metrika', name: 'Яндекс Метрика', icon: 'LineChart', category: 'Интеграции', color: 'red' },
    { id: 'google-ads', name: 'Google Ads', icon: 'DollarSign', category: 'Интеграции', color: 'red' },
    { id: 'yandex-direct', name: 'Яндекс Директ', icon: 'BarChart2', category: 'Интеграции', color: 'red' },
    { id: 'disqus-comments', name: 'Disqus комментарии', icon: 'MessageCircle', category: 'Интеграции', color: 'red' },
    { id: 'cookie-notice', name: 'Уведомление о cookies', icon: 'Cookie', category: 'Интеграции', color: 'red' },
    { id: 'gdpr-banner', name: 'GDPR баннер', icon: 'Shield', category: 'Интеграции', color: 'red' },
    { id: 'weather-widget', name: 'Погода', icon: 'Cloud', category: 'Интеграции', color: 'red' },
    { id: 'currency-converter', name: 'Конвертер валют', icon: 'DollarSign', category: 'Интеграции', color: 'red' },

    // Навигация (20)
    { id: 'header', name: 'Шапка сайта', icon: 'LayoutTemplate', category: 'Навигация', color: 'cyan' },
    { id: 'navbar', name: 'Навигационная панель', icon: 'Menu', category: 'Навигация', color: 'cyan' },
    { id: 'sidebar', name: 'Боковая панель', icon: 'PanelLeft', category: 'Навигация', color: 'cyan' },
    { id: 'footer', name: 'Подвал сайта', icon: 'LayoutList', category: 'Навигация', color: 'cyan' },
    { id: 'menu-horizontal', name: 'Горизонтальное меню', icon: 'AlignJustify', category: 'Навигация', color: 'cyan' },
    { id: 'menu-vertical', name: 'Вертикальное меню', icon: 'AlignLeft', category: 'Навигация', color: 'cyan' },
    { id: 'menu-dropdown', name: 'Выпадающее меню', icon: 'ChevronDown', category: 'Навигация', color: 'cyan' },
    { id: 'menu-mobile', name: 'Мобильное меню', icon: 'MenuSquare', category: 'Навигация', color: 'cyan' },
    { id: 'menu-sticky', name: 'Фиксированное меню', icon: 'Pin', category: 'Навигация', color: 'cyan' },
    { id: 'logo', name: 'Логотип', icon: 'Stamp', category: 'Навигация', color: 'cyan' },
    { id: 'sitemap', name: 'Карта сайта', icon: 'Sitemap', category: 'Навигация', color: 'cyan' },
    { id: 'sidebar-menu', name: 'Меню в сайдбаре', icon: 'PanelLeftOpen', category: 'Навигация', color: 'cyan' },
    { id: 'offcanvas-menu', name: 'Offcanvas меню', icon: 'PanelRightOpen', category: 'Навигация', color: 'cyan' },
    { id: 'tab-navigation', name: 'Табы навигации', icon: 'Tabs', category: 'Навигация', color: 'cyan' },
    { id: 'step-navigation', name: 'Шаговая навигация', icon: 'GitBranch', category: 'Навигация', color: 'cyan' },
    { id: 'wizard', name: 'Мастер', icon: 'Wand2', category: 'Навигация', color: 'cyan' },
    { id: 'search-bar', name: 'Строка поиска', icon: 'Search', category: 'Навигация', color: 'cyan' },
    { id: 'table-of-contents', name: 'Содержание', icon: 'ListTree', category: 'Навигация', color: 'cyan' },
    { id: 'jump-links', name: 'Быстрые ссылки', icon: 'Link2', category: 'Навигация', color: 'cyan' },
    { id: 'floating-action-button', name: 'Плавающая кнопка', icon: 'CirclePlus', category: 'Навигация', color: 'cyan' },
  ];

  const blocks = allBlocks.filter(block => {
    const matchesCategory = activeCategory === 'Все' || block.category === activeCategory;
    const matchesSearch = block.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (id) {
      loadProject();
    }
  }, [id]);

  const loadProject = async () => {
    try {
      const response = await fetch(`https://functions.poehali.dev/6ef235f2-9501-4c64-9cac-1c75801c81c0?project_id=${id}`);
      const data = await response.json();
      
      if (data.pages && data.pages.length > 0) {
        setProjectName(data.name);
        setCurrentPageId(data.pages[0].id);
        loadBlocks(data.pages[0].id);
      }
    } catch (error) {
      console.error('Error loading project:', error);
    }
  };

  const loadBlocks = async (pageId: number) => {
    try {
      const response = await fetch(`https://functions.poehali.dev/ea7403b2-c106-4a24-9f6a-41525a179d20?page_id=${pageId}`);
      const data = await response.json();
      setPageBlocks(data);
    } catch (error) {
      console.error('Error loading blocks:', error);
    }
  };

  const handleBlockDrop = async (blockType: string, blockName: string) => {
    if (!currentPageId) {
      toast({
        title: "Ошибка",
        description: "Не выбрана страница",
        variant: "destructive"
      });
      return;
    }

    try {
      const newBlock = {
        page_id: currentPageId,
        type: blockType,
        content: {
          title: blockName,
          text: 'Кликните для редактирования'
        },
        styles: {},
        position: pageBlocks.length
      };

      const response = await fetch('https://functions.poehali.dev/ea7403b2-c106-4a24-9f6a-41525a179d20', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBlock)
      });

      const createdBlock = await response.json();
      setPageBlocks([...pageBlocks, createdBlock]);
      
      toast({
        title: "Блок добавлен",
        description: `Блок "${blockName}" успешно добавлен`
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось добавить блок",
        variant: "destructive"
      });
    }
  };

  const handleDeleteBlock = async (blockId: number) => {
    try {
      setPageBlocks(pageBlocks.filter(b => b.id !== blockId));
      if (selectedBlockId === blockId) {
        setSelectedBlockId(null);
        setRightPanelOpen(false);
      }
      
      toast({
        title: "Блок удален",
        description: "Блок успешно удален"
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить блок",
        variant: "destructive"
      });
    }
  };

  const handleSelectBlock = (blockId: number) => {
    setSelectedBlockId(blockId);
    setRightPanelOpen(true);
    const block = pageBlocks.find(b => b.id === blockId);
    if (block) {
      setEditingContent(block.content || {});
    }
  };

  const handleUpdateBlockContent = async () => {
    if (!selectedBlockId) return;

    try {
      const response = await fetch('https://functions.poehali.dev/ea7403b2-c106-4a24-9f6a-41525a179d20', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          block_id: selectedBlockId,
          content: editingContent
        })
      });

      const updatedBlock = await response.json();
      setPageBlocks(pageBlocks.map(b => b.id === selectedBlockId ? updatedBlock : b));
      
      toast({
        title: "Сохранено",
        description: "Контент блока обновлен"
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить блок",
        variant: "destructive"
      });
    }
  };

  const handleSave = async () => {
    setLoading(true);
    
    try {
      if (id) {
        await fetch('https://functions.poehali.dev/6ef235f2-9501-4c64-9cac-1c75801c81c0', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            project_id: parseInt(id),
            name: projectName
          })
        });
      }
      
      toast({
        title: "Сохранено",
        description: "Все изменения сохранены"
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить изменения",
        variant: "destructive"
      });
    }
    
    setLoading(false);
  };

  const getViewModeWidth = () => {
    switch (viewMode) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      default: return 'w-full';
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen flex flex-col bg-background">
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <Icon name="ArrowLeft" size={20} />
            </Button>
            
            {isEditingName ? (
              <Input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                onBlur={() => setIsEditingName(false)}
                onKeyDown={(e) => e.key === 'Enter' && setIsEditingName(false)}
                className="w-64"
                autoFocus
              />
            ) : (
              <button
                onClick={() => setIsEditingName(true)}
                className="text-lg font-semibold hover:text-primary transition-colors flex items-center gap-2"
              >
                <Icon name="Globe" size={20} className="text-primary" />
                {projectName}
              </button>
            )}
            <Badge variant="outline" className="ml-2">Черновик</Badge>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 border border-border rounded-lg p-1 bg-muted/50">
              <Button
                variant={viewMode === 'desktop' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('desktop')}
              >
                <Icon name="Monitor" size={16} />
              </Button>
              <Button
                variant={viewMode === 'tablet' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('tablet')}
              >
                <Icon name="Tablet" size={16} />
              </Button>
              <Button
                variant={viewMode === 'mobile' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('mobile')}
              >
                <Icon name="Smartphone" size={16} />
              </Button>
            </div>

            <div className="h-8 w-px bg-border" />

            <Button variant="outline" size="sm" onClick={handleSave} disabled={loading}>
              <Icon name="Save" size={16} className="mr-2" />
              {loading ? 'Сохранение...' : 'Сохранить'}
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-green-600 to-green-700">
              <Icon name="Rocket" size={16} className="mr-2" />
              Публиковать
            </Button>

            <div className="h-8 w-px bg-border" />
            
            <ThemeToggle />
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {leftPanelOpen && (
            <aside className="w-72 border-r border-border bg-card flex flex-col shadow-sm">
              <div className="p-4 border-b border-border">
                <h3 className="text-sm font-semibold mb-3">Блоки ({blocks.length})</h3>
                <div className="relative">
                  <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Поиск блоков..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              
              <div className="p-2 border-b border-border">
                <div className="flex flex-wrap gap-1">
                  {categories.map(cat => (
                    <Button
                      key={cat}
                      variant={activeCategory === cat ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setActiveCategory(cat)}
                      className="text-xs"
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>
              
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-3">
                  {blocks.map((block) => (
                    <DraggableBlock key={block.id} block={block} />
                  ))}
                </div>
              </ScrollArea>
            </aside>
          )}

          <main className="flex-1 overflow-auto bg-muted/30 p-6">
            <div className={`mx-auto ${getViewModeWidth()} transition-all duration-300`}>
              <DropZone onDrop={handleBlockDrop} hasBlocks={pageBlocks.length > 0}>
                <div className="space-y-4">
                  {pageBlocks.map((block) => (
                    <BlockRenderer
                      key={block.id}
                      block={block}
                      isSelected={selectedBlockId === block.id}
                      onSelect={() => handleSelectBlock(block.id)}
                      onDelete={() => handleDeleteBlock(block.id)}
                    />
                  ))}
                </div>
              </DropZone>
            </div>
          </main>

          {rightPanelOpen && selectedBlockId && (
            <aside className="w-80 border-l border-border bg-card flex flex-col shadow-sm">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="text-sm font-semibold">Редактирование блока</h3>
                <Button variant="ghost" size="icon" onClick={() => setRightPanelOpen(false)}>
                  <Icon name="X" size={16} />
                </Button>
              </div>
              
              <ScrollArea className="flex-1">
                <Tabs defaultValue="content" className="w-full">
                  <div className="px-4 pt-4">
                    <TabsList className="grid grid-cols-4 w-full">
                      <TabsTrigger value="content">Контент</TabsTrigger>
                      <TabsTrigger value="styles">Стили</TabsTrigger>
                      <TabsTrigger value="settings">Настройки</TabsTrigger>
                      <TabsTrigger value="integrations">Интеграции</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="content" className="p-4 space-y-4">
                    <div>
                      <Label>Заголовок</Label>
                      <Input 
                        placeholder="Введите заголовок" 
                        className="mt-2"
                        value={editingContent.title || ''}
                        onChange={(e) => setEditingContent({ ...editingContent, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Текст</Label>
                      <Textarea
                        placeholder="Введите текст"
                        className="mt-2"
                        value={editingContent.text || ''}
                        onChange={(e) => setEditingContent({ ...editingContent, text: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Ссылка (URL)</Label>
                      <Input 
                        placeholder="https://example.com" 
                        className="mt-2"
                        value={editingContent.url || ''}
                        onChange={(e) => setEditingContent({ ...editingContent, url: e.target.value })}
                      />
                    </div>
                    <Button onClick={handleUpdateBlockContent} className="w-full">
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить изменения
                    </Button>
                  </TabsContent>

                  <TabsContent value="styles" className="p-4 space-y-4">
                    <div>
                      <Label>Цвет фона</Label>
                      <Input type="color" className="mt-2 h-10" />
                    </div>
                    <div>
                      <Label>Цвет текста</Label>
                      <Input type="color" className="mt-2 h-10" />
                    </div>
                    <div>
                      <Label>Отступы (padding)</Label>
                      <Input placeholder="20px" className="mt-2" />
                    </div>
                    <div>
                      <Label>Размер шрифта</Label>
                      <Input placeholder="16px" className="mt-2" />
                    </div>
                  </TabsContent>

                  <TabsContent value="settings" className="p-4 space-y-4">
                    <div>
                      <Label>CSS класс</Label>
                      <Input placeholder="my-custom-class" className="mt-2" />
                    </div>
                    <div>
                      <Label>Анимация</Label>
                      <select className="mt-2 w-full p-2 border border-border rounded-md bg-background">
                        <option>Без анимации</option>
                        <option>Плавное появление</option>
                        <option>Слайд снизу</option>
                        <option>Увеличение</option>
                      </select>
                    </div>
                  </TabsContent>

                  <TabsContent value="integrations" className="p-4 space-y-4">
                    <div className="text-sm text-muted-foreground mb-4">
                      Настройте интеграции для отправки данных формы
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Mail" size={16} className="mr-2" />
                        Email уведомления
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Telegram бот
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Table" size={16} className="mr-2" />
                        Google Sheets
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Briefcase" size={16} className="mr-2" />
                        AmoCRM
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Box" size={16} className="mr-2" />
                        Bitrix24
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Send" size={16} className="mr-2" />
                        Webhook
                      </Button>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="text-sm font-medium mb-2">Активные интеграции:</div>
                      <div className="text-xs text-muted-foreground">
                        Пока не настроено
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </ScrollArea>
            </aside>
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default SiteEditor;