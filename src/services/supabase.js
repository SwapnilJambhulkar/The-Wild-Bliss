import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://hbujlezzlxbointhpxje.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhidWpsZXp6bHhib2ludGhweGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNzY1MjMsImV4cCI6MjAxMzk1MjUyM30.mhfsFTQ-0ugHNfYXJRBjPcwtJrWjLRBPjBXUytNUab4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;