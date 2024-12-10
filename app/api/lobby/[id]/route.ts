import { NextResponse } from "next/server";
import { fetchTeamName } from "@/hooks/useFetch"; 

export async function GET(request: Request) {
  const url = new URL(request.url);
  const teamToken = url.searchParams.get("teamToken");

  if (!teamToken) {
    return NextResponse.json({ error: "Team token is required" }, { status: 400 });
  }

  try {
    const teamName = await fetchTeamName(teamToken);

    if (!teamName) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    return NextResponse.json({ teamName });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
