-- Update the new IDs with the correct content based on User Request
-- Impact: Sports Motion Analysis
-- Flow: Business Improvement Free Consultation
-- Cyber: Hands-on / AI

INSERT INTO booking_services (id, name, description, duration_minutes, price, currency, google_calendar_id)
VALUES
    ('Impact', '初回動作解析', '動作解析に基づく診断と解決方針の決定', 60, 8000, 'jpy', 'takudai.koo@gmail.com'),
    ('Flow', '業務改善の無料相談', '業務効率化診断と対策方針の決定', 30, 0, 'jpy', 'takudai.koo@gmail.com'),
    ('Cyber', '体験ハンズオン', 'AI導入・システム開発に関するハンズオンサポート', 60, 6000, 'jpy', 'takudai.koo@gmail.com')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    duration_minutes = EXCLUDED.duration_minutes,
    price = EXCLUDED.price,
    google_calendar_id = EXCLUDED.google_calendar_id;

-- Clean up old IDs if necessary/desired (optional safety)
-- DELETE FROM booking_services WHERE id IN ('ai-consult', 'clinic', 'dev');
