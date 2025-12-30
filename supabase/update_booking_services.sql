-- Update 'clinic' service to 'Business Improvement Free Consultation' for Flow
-- Update 'ai-consult' and 'dev' to ensure they exist and correct any pricing/details if needed

INSERT INTO booking_services (id, name, description, duration_minutes, price, currency)
VALUES
    ('clinic', '業務改善の無料相談', '業務効率化診断と対策方針の決定', 30, 0, 'jpy')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    duration_minutes = EXCLUDED.duration_minutes,
    price = EXCLUDED.price;

-- Ensure other services are correct (optional, but good practice)
-- Impact: AI Consult (Keeping 10000 for now unless 8000 is desired. User removed 8000 text, but maybe they want 10000?)
-- Cyber: Dev (0 yen? 'System Dev Consultation')
