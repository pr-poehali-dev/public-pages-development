-- Таблица интеграций для форм
CREATE TABLE IF NOT EXISTS form_integrations (
    id SERIAL PRIMARY KEY,
    block_id INTEGER NOT NULL,
    integration_type VARCHAR(50) NOT NULL CHECK (integration_type IN ('email', 'telegram', 'google_sheets', 'amocrm', 'bitrix24', 'mailchimp', 'unisender', 'webhook')),
    config JSONB NOT NULL DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы
CREATE INDEX IF NOT EXISTS idx_form_integrations_block_id ON form_integrations(block_id);
CREATE INDEX IF NOT EXISTS idx_form_integrations_type ON form_integrations(integration_type);
CREATE INDEX IF NOT EXISTS idx_form_integrations_active ON form_integrations(is_active);
