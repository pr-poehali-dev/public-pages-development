-- Таблица ботов
CREATE TABLE IF NOT EXISTS bots (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    platform VARCHAR(50) NOT NULL CHECK (platform IN ('telegram', 'whatsapp', 'vk', 'viber', 'instagram')),
    bot_token VARCHAR(500),
    status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'paused', 'stopped')),
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица узлов бота
CREATE TABLE IF NOT EXISTS bot_nodes (
    id SERIAL PRIMARY KEY,
    bot_id INTEGER NOT NULL,
    node_type VARCHAR(50) NOT NULL CHECK (node_type IN ('message', 'condition', 'delay', 'api', 'payment', 'menu', 'gallery', 'video', 'file', 'product', 'note', 'action', 'random')),
    title VARCHAR(255),
    content JSONB NOT NULL DEFAULT '{}',
    position_x INTEGER DEFAULT 0,
    position_y INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица связей между узлами
CREATE TABLE IF NOT EXISTS bot_connections (
    id SERIAL PRIMARY KEY,
    bot_id INTEGER NOT NULL,
    source_node_id INTEGER NOT NULL,
    target_node_id INTEGER NOT NULL,
    condition_type VARCHAR(100),
    condition_value TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица интеграций бота
CREATE TABLE IF NOT EXISTS bot_integrations (
    id SERIAL PRIMARY KEY,
    bot_id INTEGER NOT NULL,
    integration_type VARCHAR(50) NOT NULL CHECK (integration_type IN ('chatgpt', 'google_sheets', 'amocrm', 'bitrix24', 'getcourse', 'payment', 'email', 'webhook')),
    config JSONB NOT NULL DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица диалогов с пользователями
CREATE TABLE IF NOT EXISTS bot_conversations (
    id SERIAL PRIMARY KEY,
    bot_id INTEGER NOT NULL,
    user_chat_id VARCHAR(255) NOT NULL,
    platform_user_id VARCHAR(255) NOT NULL,
    current_node_id INTEGER,
    variables JSONB DEFAULT '{}',
    tags JSONB DEFAULT '[]',
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'stopped')),
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица статистики ботов
CREATE TABLE IF NOT EXISTS bot_analytics (
    id SERIAL PRIMARY KEY,
    bot_id INTEGER NOT NULL,
    metric_date DATE NOT NULL,
    users_count INTEGER DEFAULT 0,
    messages_count INTEGER DEFAULT 0,
    conversations_started INTEGER DEFAULT 0,
    conversations_completed INTEGER DEFAULT 0,
    revenue DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для ботов
CREATE INDEX IF NOT EXISTS idx_bots_user_id ON bots(user_id);
CREATE INDEX IF NOT EXISTS idx_bots_status ON bots(status);
CREATE INDEX IF NOT EXISTS idx_bot_nodes_bot_id ON bot_nodes(bot_id);
CREATE INDEX IF NOT EXISTS idx_bot_connections_bot_id ON bot_connections(bot_id);
CREATE INDEX IF NOT EXISTS idx_bot_integrations_bot_id ON bot_integrations(bot_id);
CREATE INDEX IF NOT EXISTS idx_bot_conversations_bot_id ON bot_conversations(bot_id);
CREATE INDEX IF NOT EXISTS idx_bot_conversations_user_chat_id ON bot_conversations(user_chat_id);
CREATE INDEX IF NOT EXISTS idx_bot_analytics_bot_id ON bot_analytics(bot_id);
CREATE INDEX IF NOT EXISTS idx_bot_analytics_date ON bot_analytics(metric_date);