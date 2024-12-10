"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Lobby() {
  const params = useParams();
  const teamToken = Array.isArray(params.id) ? params.id[0] : params.id;

  const [teamName, setTeamName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTeamName = async (teamToken: string) => {
    if (!teamToken) throw new Error("Team token is required");

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/lobby?teamToken=${teamToken}`);
      const data = await response.json();

      if (response.ok) {
        setTeamName(data.teamName);
      } else {
        setError(data.error || "Failed to fetch team name");
      }
    } catch (err) {
      setError("Error fetching team name");
    } finally {
      setIsLoading(false);
    }
  };

  if (teamToken && teamName === null && !isLoading && !error) {
    fetchTeamName(teamToken);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-orange-600">
        Welcome to the lobby, {teamName || "Guest"}!
      </h1>
    </div>
  );
}
