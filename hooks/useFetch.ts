import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

// Standalone function to fetch team token based on team name
export const fetchTeamToken = async (teamName: string) => {
  if (!teamName) throw new Error("Team name is required");

  const { data, error } = await supabase
    .from("teams")
    .select("teamToken")
    .eq("teamName", teamName.toLowerCase()) 
    .single();

  if (error) {
    console.error("Supabase error: ", error.message);
    throw new Error("Failed to fetch team token");
  }

  return data?.teamToken || null;
};

// Standalone function to fetch team name based on team token
export const fetchTeamName = async (teamToken: string) => {
  if (!teamToken) throw new Error("Team token is required");

  const { data, error } = await supabase
    .from("teams")
    .select("teamName")
    .eq("teamToken", teamToken)
    .single();

  if (error) {
    console.error("Supabase error: ", error.message);
    throw new Error("Failed to fetch team name");
  }

  return data?.teamName || null;
};
