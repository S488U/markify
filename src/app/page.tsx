import Hero from "@/src/components/Hero";
import Features from "../components/Features";
import Demo from "../components/Demo";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-violet-950 to-slate-950">
      <Hero />
      <Features />
      <Demo />
      <CTA />
    </div>
  );
}
