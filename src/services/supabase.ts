import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qozcmgjlwspijwkpempi.supabase.co";
const supabaseKey = "sb_publishable_5aXg5e8YgheyCK_YK7IhHg_oh47SqnO"; // ⚠️ pega no painel

export const supabase = createClient(supabaseUrl, supabaseKey);