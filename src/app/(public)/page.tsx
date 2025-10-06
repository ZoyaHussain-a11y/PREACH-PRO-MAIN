"use client";
import ChooseSection from "@/components/ChooseSection";
import CompanySection from "@/components/CompanySection";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Integration from "@/components/Integration";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/PricingComponents/PricingSection";
import UniqueFeatureSection from "@/components/UniqueFeatureSection";

import FeatureV1Section from "@/components/FeatureV1Section";
const HomePage = () => {
  return (
    <div className="pages-wrapper">
     <Navbar />
      <HomeHero />
      <CompanySection />

      <UniqueFeatureSection />
      <ChooseSection />
      <FeatureV1Section />
      <PricingSection />
      <Integration />
      <FAQ />
       <div className="cta-footer-wrap">
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
