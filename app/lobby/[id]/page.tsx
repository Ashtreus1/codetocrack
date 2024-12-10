import Particles from "@/components/particles";

export default function Lobby(){
    return(
        <div className="relative min-h-screen flex flex-col justify-center items-center overflow-y-hidden overflow-x-hidden p-4 w-full sm:p-6 lg:p-8">
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={50}
                color="#ffffff"
                size={1.5}
                refresh
            />
            <Lobby/>
        </div>
    )
}