"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function Login() {
  const [teamName, setTeamName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ teamName }),
      });

      const data = await response.json();

      if(data.error){
        setError(data.error);
      } else {
        router.push(`/lobby/${data.teamToken}`);
      }
    }catch(err: any){
      setError("Failed to login. Please check your team name");
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-80 font-bold p-5 text-white bg-orange-500 hover:bg-orange-700 cursor-pointer transition-colors">
            Join the Hack!
          </Button>
        </DialogTrigger>
        <DialogContent className="border-none bg-[#1e1e1e] w-[350px] rounded-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-orange-600 font-pixelify text-left">
              {error ? <p className="text-red-500">{error}</p> : "Login"}
            </DialogTitle>
            <DialogDescription className="text-md text-gray-600 text-left">
              Please enter your correct information
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter Team Name"
              className="w-full text-gray-400 p-3 bg-transparent border border-gray-300 rounded-md mb-2"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
            <p className="text-[10px] text-gray-300 text-right mb-3">
              Input in lowercase with no whitespace character
            </p>
            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              {isLoading ? "Authenticating..." : "Login"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
