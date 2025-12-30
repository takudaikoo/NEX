-- Create a table for booking services (e.g., AI Consult, Clinic, System Dev)
CREATE TABLE IF NOT EXISTS booking_services (
    id TEXT PRIMARY KEY, -- e.g., 'ai-consult', 'clinic', 'dev'
    name TEXT NOT NULL,
    description TEXT,
    duration_minutes INTEGER NOT NULL DEFAULT 60,
    price INTEGER NOT NULL DEFAULT 0,
    currency TEXT NOT NULL DEFAULT 'jpy',
    is_active BOOLEAN DEFAULT true,
    stripe_price_id TEXT, -- For Stripe integration
    google_calendar_id TEXT, -- Specific calendar ID for this service
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create a table for bookings
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_id TEXT REFERENCES booking_services(id) ON DELETE RESTRICT,
    user_id UUID REFERENCES auth.users(id), -- Optional, if user is logged in
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    stripe_session_id TEXT,
    stripe_payment_intent_id TEXT,
    google_calendar_event_id TEXT,
    notes TEXT,
    -- Additional fields from ApplicationForm
    sport TEXT,
    requester_type TEXT,
    request_type TEXT,
    consultation TEXT,
    goals TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE booking_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies for booking_services
-- Public read access
CREATE POLICY "Allow public read access to active services" ON booking_services
    FOR SELECT USING (is_active = true);

-- Only admins can insert/update/delete (assuming you have an admin role or specific user)
-- For now, allowing authenticated users if they are admins (placeholder logic)
-- You might want to restrict this further based on your auth setup
CREATE POLICY "Allow admin full access to services" ON booking_services
    FOR ALL USING (auth.role() = 'service_role'); 

-- Policies for bookings
-- Authenticated users can see their own bookings
CREATE POLICY "Users can view their own bookings" ON bookings
    FOR SELECT USING (auth.uid() = user_id);

-- Public can create bookings (for guest checkout flow)
CREATE POLICY "Public can create bookings" ON bookings
    FOR INSERT WITH CHECK (true);

-- Functions to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_booking_services_updated_at
    BEFORE UPDATE ON booking_services
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
    BEFORE UPDATE ON bookings
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();
