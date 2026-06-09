import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Challenges } from "@/components/home/Challenges";
import { Services } from "@/components/home/Services";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { Industries } from "@/components/home/Industries";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Challenges />
        <Services />
        <FeaturedCaseStudies />
        <Industries />
        <InsightsPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
