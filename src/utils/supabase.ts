import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://urqpcsucosuenrsqvnfb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVycXBjc3Vjb3N1ZW5yc3F2bmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyODMwMjUsImV4cCI6MjA2MDg1OTAyNX0._RtqDpteeQUb845IRw4qtvnFkgr62r4VJutl0ARH4dY';
export const supabase = createClient(supabaseUrl, supabaseKey);