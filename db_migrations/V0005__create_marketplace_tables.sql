-- Таблица товаров в маркетплейсе
CREATE TABLE IF NOT EXISTS marketplace_items (
    id SERIAL PRIMARY KEY,
    seller_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL CHECK (category IN ('site_templates', 'bot_templates', 'scripts', 'extensions', 'projects', 'services', 'design', 'content')),
    item_type VARCHAR(50) NOT NULL CHECK (item_type IN ('template', 'script', 'service', 'project', 'asset')),
    price DECIMAL(10,2) NOT NULL DEFAULT 0,
    currency VARCHAR(10) DEFAULT 'RUB',
    preview_image VARCHAR(500),
    files JSONB DEFAULT '[]',
    demo_url VARCHAR(500),
    rating DECIMAL(3,2) DEFAULT 0,
    sales_count INTEGER DEFAULT 0,
    views_count INTEGER DEFAULT 0,
    tags JSONB DEFAULT '[]',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица покупок
CREATE TABLE IF NOT EXISTS marketplace_purchases (
    id SERIAL PRIMARY KEY,
    buyer_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
    transaction_id VARCHAR(255),
    purchased_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица отзывов на товары
CREATE TABLE IF NOT EXISTS marketplace_reviews (
    id SERIAL PRIMARY KEY,
    item_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица избранного
CREATE TABLE IF NOT EXISTS marketplace_favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, item_id)
);

-- Индексы для маркетплейса
CREATE INDEX IF NOT EXISTS idx_marketplace_items_seller ON marketplace_items(seller_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_items_category ON marketplace_items(category);
CREATE INDEX IF NOT EXISTS idx_marketplace_items_active ON marketplace_items(is_active);
CREATE INDEX IF NOT EXISTS idx_marketplace_purchases_buyer ON marketplace_purchases(buyer_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_purchases_item ON marketplace_purchases(item_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_reviews_item ON marketplace_reviews(item_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_reviews_user ON marketplace_reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_favorites_user ON marketplace_favorites(user_id);