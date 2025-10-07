import AboutHero from "@/components/AboutComponents/AboutHero";
import Mission from "@/components/AboutComponents/Mission";
import Solution from "@/components/AboutComponents/Solution";
import StatsSection from "@/components/AboutComponents/StatsSection";
import Team from "@/components/AboutComponents/Team";
import Testimonials from "@/components/AboutComponents/Testimonials";
import CompanySection from "@/components/CompanySection";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

const AboutPage = () => {
  console.log('AboutPage rendering'); // Debug log
  
  return (
    <div className="pages-wrapper">
      <Navbar />
      <AboutHero />
      <CompanySection />
      <StatsSection />
      <Solution />
      <Testimonials />
      <Team />
      <Mission />
      <FAQ />
      <div className="cta-footer-wrap">
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;