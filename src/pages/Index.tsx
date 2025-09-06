import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HomeownershipSection from "@/components/HomeownershipSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import AboutSection from "@/components/AboutSection";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HomeownershipSection />
      <DevelopmentSection />
      <AboutSection />
      <BookSection />
      <Footer />
    </div>
  );
};

export default Index;
