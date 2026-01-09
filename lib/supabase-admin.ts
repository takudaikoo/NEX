
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Ensure environment variables are present
if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Supabase URL or Service Key is missing. Check your .env setup (SUPABASE_SERVICE_ROLE_KEY).');
}

// Create a Supabase client with the Service Role Key
// This client bypasses Row Level Security (RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
