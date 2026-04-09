import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Features } from "@/components/Features";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </>
  );
}
