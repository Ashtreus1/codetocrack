import AnimatedGridPattern from "@/components/animated-grid-pattern";
import Login from "@/components/client/login";
import FAQSection from "@/components/faq";
import HyperText from "@/components/hyper-text";
import Mechanics from "@/components/mechanics";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden w-full">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
        <div className="flex flex-col justify-center items-center min-h-screen w-full max-w-xl">
          <HyperText className="text-5xl text-orange-500 font-bold font-pixelify sm:text-5xl md:text-6xl text-center" text="ELITS Code2Crack" />
          <p className="text-md text-gray-300 text-center w-full font-mono lg:max-w-[50%] sm:max-w-[80%] mb-5">
            Expose your critical thinking and problem-solving skills by joining us in our Code2Crack!
          </p>
          <Login/>
        </div>

        <div className="fixed top-5 right-5">
          <Mechanics/>
        </div>
    </div>
    <FAQSection/>
    </>
  );
}
