-- Таблица заказов на бирже
CREATE TABLE IF NOT EXISTS exchange_orders (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL CHECK (category IN ('site_development', 'bot_development', 'design', 'content', 'marketing', 'consulting', 'other')),
    budget_min DECIMAL(10,2),
    budget_max DECIMAL(10,2),
    currency VARCHAR(10) DEFAULT 'RUB',
    deadline DATE,
    status VARCHAR(50) DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'completed', 'cancelled', 'dispute')),
    required_skills JSONB DEFAULT '[]',
    attachments JSONB DEFAULT '[]',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица услуг исполнителей
CREATE TABLE IF NOT EXISTS exchange_services (
    id SERIAL PRIMARY KEY,
    freelancer_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL CHECK (category IN ('site_development', 'bot_development', 'design', 'content', 'marketing', 'consulting', 'other')),
    price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'RUB',
    delivery_time_days INTEGER,
    portfolio_items JSONB DEFAULT '[]',
    skills JSONB DEFAULT '[]',
    is_active BOOLEAN DEFAULT TRUE,
    views_count INTEGER DEFAULT 0,
    orders_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица откликов на заказы
CREATE TABLE IF NOT EXISTS exchange_proposals (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    freelancer_id INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'RUB',
    delivery_time_days INTEGER,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'withdrawn')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица сделок
CREATE TABLE IF NOT EXISTS exchange_deals (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    proposal_id INTEGER NOT NULL,
    client_id INTEGER NOT NULL,
    freelancer_id INTEGER NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'RUB',
    status VARCHAR(50) DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'cancelled', 'dispute')),
    escrow_status VARCHAR(50) DEFAULT 'holding' CHECK (escrow_status IN ('holding', 'released', 'refunded')),
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица портфолио исполнителей
CREATE TABLE IF NOT EXISTS exchange_portfolio (
    id SERIAL PRIMARY KEY,
    freelancer_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    images JSONB DEFAULT '[]',
    project_url VARCHAR(500),
    completed_at DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица отзывов на исполнителей
CREATE TABLE IF NOT EXISTS exchange_reviews (
    id SERIAL PRIMARY KEY,
    deal_id INTEGER NOT NULL,
    reviewer_id INTEGER NOT NULL,
    reviewee_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица навыков исполнителей
CREATE TABLE IF NOT EXISTS exchange_freelancer_skills (
    id SERIAL PRIMARY KEY,
    freelancer_id INTEGER NOT NULL,
    skill_name VARCHAR(100) NOT NULL,
    proficiency_level INTEGER CHECK (proficiency_level >= 1 AND proficiency_level <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(freelancer_id, skill_name)
);

-- Таблица споров
CREATE TABLE IF NOT EXISTS exchange_disputes (
    id SERIAL PRIMARY KEY,
    deal_id INTEGER NOT NULL,
    initiator_id INTEGER NOT NULL,
    reason TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'open' CHECK (status IN ('open', 'in_review', 'resolved', 'closed')),
    resolution TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP
);

-- Индексы для биржи
CREATE INDEX IF NOT EXISTS idx_exchange_orders_client ON exchange_orders(client_id);
CREATE INDEX IF NOT EXISTS idx_exchange_orders_status ON exchange_orders(status);
CREATE INDEX IF NOT EXISTS idx_exchange_orders_category ON exchange_orders(category);
CREATE INDEX IF NOT EXISTS idx_exchange_services_freelancer ON exchange_services(freelancer_id);
CREATE INDEX IF NOT EXISTS idx_exchange_services_category ON exchange_services(category);
CREATE INDEX IF NOT EXISTS idx_exchange_proposals_order ON exchange_proposals(order_id);
CREATE INDEX IF NOT EXISTS idx_exchange_proposals_freelancer ON exchange_proposals(freelancer_id);
CREATE INDEX IF NOT EXISTS idx_exchange_deals_order ON exchange_deals(order_id);
CREATE INDEX IF NOT EXISTS idx_exchange_deals_client ON exchange_deals(client_id);
CREATE INDEX IF NOT EXISTS idx_exchange_deals_freelancer ON exchange_deals(freelancer_id);
CREATE INDEX IF NOT EXISTS idx_exchange_portfolio_freelancer ON exchange_portfolio(freelancer_id);
CREATE INDEX IF NOT EXISTS idx_exchange_reviews_reviewee ON exchange_reviews(reviewee_id);
CREATE INDEX IF NOT EXISTS idx_exchange_freelancer_skills_freelancer ON exchange_freelancer_skills(freelancer_id);