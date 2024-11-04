import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aewaonvbgazfbpdmgftm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFld2FvbnZiZ2F6ZmJwZG1nZnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwOTc1MjYsImV4cCI6MjA0NTY3MzUyNn0.Zwy56Hx_S4yuyI5jHA08rWKisLHvuaONCTBMiNQ7_dA";
const supabase = createClient(supabaseUrl, supabaseKey);
// This code snippits create supabase clients
export default supabase;
