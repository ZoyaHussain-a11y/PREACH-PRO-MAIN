"use client";
import CompanySection from "@/components/CompanySection";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FeatureSection from "@/components/FeaturesComponents/HeroFeatures";
import MoveSection1 from "@/components/FeaturesComponents/MoveSection1";
import MoveSection2 from "@/components/FeaturesComponents/MoveSection2";
import MoveSection3 from "@/components/FeaturesComponents/MoveSection3";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

const FeaturePage = () => {
  return (
    <div className="pages-wrapper">
      <Navbar />
      <FeatureSection />
      <CompanySection />
      <MoveSection1 />
      <MoveSection2 />
      <MoveSection3 />
      <FAQ />
       <div className="cta-footer-wrap">
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default FeaturePage;
