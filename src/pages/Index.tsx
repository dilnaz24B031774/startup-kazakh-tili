import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SchemesSection from "@/components/SchemesSection";
import WarningsSection from "@/components/WarningsSection";
import FutureSection from "@/components/FutureSection";
import SolutionsSection from "@/components/SolutionsSection";
import GameSection from "@/components/GameSection";
import ResourcesSection from "@/components/ResourcesSection";
import TeamSection from "@/components/TeamSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SchemesSection />
    <WarningsSection />
    <FutureSection />
    <SolutionsSection />
    <GameSection />
    <ResourcesSection />
    <TeamSection />
    <SiteFooter />
  </div>
);

export default Index;
