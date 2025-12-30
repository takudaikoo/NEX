
-- Seed data for booking_services table
INSERT INTO booking_services (id, name, description, duration_minutes, price, currency)
VALUES
    ('ai-consult', 'AI導入コンサルティング', '業務効率化のためのAI導入についてのご相談', 60, 10000, 'jpy'),
    ('clinic', 'スポーツクリニック初診', '動作解析に基づく診断と治療方針の決定', 60, 5000, 'jpy'),
    ('dev', 'システム開発相談', 'Web/アプリ開発に関する技術相談', 60, 0, 'jpy')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    duration_minutes = EXCLUDED.duration_minutes,
    price = EXCLUDED.price;
