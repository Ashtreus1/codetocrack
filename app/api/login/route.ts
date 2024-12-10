import { NextResponse } from "next/server";
import { fetchTeamToken } from "@/hooks/useFetch";

export async function POST(request: Request) {
  const { teamName } = await request.json();

  if (!teamName) {
    return NextResponse.json({ error: "Team name is required" }, { status: 400 });
  }

  try {
    const teamToken = await fetchTeamToken(teamName);

    if (!teamToken) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    return NextResponse.json({ teamToken });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
