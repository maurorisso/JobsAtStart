import HeroSection from "@/components/Home/HeroSection";
import BoardSection from "@/components/JobBoard/BoardSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" mx-auto  flex flex-col gap-10   ">
      <HeroSection />
      <BoardSection />
    </main>
  );
}
