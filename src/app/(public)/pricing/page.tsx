// src/app/about/page.tsx
"use client";
import CompanySection from "@/components/CompanySection";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import ExploreSection from "@/components/PricingComponents/ExploreSection";
import PricingHero from "@/components/PricingComponents/PricingHero";
import PricingSection from "@/components/PricingComponents/PricingSection";
import "@/styles/globals.css";
import { useEffect } from "react";


export default function PricingPage() {

  useEffect(() => {
    // FAQ Accordion functionality
    const faqTabs = document.querySelectorAll('.faq-tab-link');
    
    faqTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Close other tabs
        faqTabs.forEach(otherTab => {
          if (otherTab !== tab) {
            const otherAnswer = otherTab.querySelector('.faq-answer-wrap') as HTMLElement;
            const otherPlus = otherTab.querySelector('.faq-single-icon._01') as HTMLElement;
            const otherMinus = otherTab.querySelector('.faq-single-icon._02') as HTMLElement;
            if (otherAnswer && otherPlus && otherMinus) {
              otherAnswer.style.height = '0px';
              otherPlus.style.opacity = '1';
              otherMinus.style.opacity = '0';
              otherTab.classList.remove('w--current');
            }
          }
        });

        // Toggle current tab
        const answer = tab.querySelector('.faq-answer-wrap') as HTMLElement;
        const plus = tab.querySelector('.faq-single-icon._01') as HTMLElement;
        const minus = tab.querySelector('.faq-single-icon._02') as HTMLElement;

        if (answer && plus && minus) {
          if (tab.classList.contains('w--current')) {
            answer.style.height = '0px';
            plus.style.opacity = '1';
            minus.style.opacity = '0';
            tab.classList.remove('w--current');
          } else {
            answer.style.height = answer.scrollHeight + 'px';
            plus.style.opacity = '0';
            minus.style.opacity = '1';
            tab.classList.add('w--current');
          }
        }
      });
    });

    // Pricing Tabs functionality
    const pricingTabs = document.querySelectorAll('.pricing-tabs-link');
    
    pricingTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        pricingTabs.forEach(t => t.classList.remove('w--current'));
        tab.classList.add('w--current');
      });
    });

  }, []); // Empty dependency ensures it runs only on client side after mount


  return (
    <div className="pages-wrapper">
      <Navbar />
      <PricingHero />
      <CompanySection />
      <PricingSection />
      <ExploreSection />
      <FAQ />
    <div className="cta-footer-wrap">
              <CTA />
              <Footer />
            </div>
    </div>
  );
}
