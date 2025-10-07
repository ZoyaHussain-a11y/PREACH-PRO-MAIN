'use client';
import "@/styles/globals.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PricingHero = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section feature">
      <div className="w-layout-blockcontainer container">
        <div className="feature-wrapper">
          <div className="feature-top-wrap" data-aos="fade-up">
            <div className="feature-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-sub-title">Pricing</div>
            </div>
            <h1 className="feature-title" data-aos="fade-up" data-aos-delay="200">
              Simple Plans Transparent Pricing
            </h1>
            <p className="feature-details" data-aos="fade-up" data-aos-delay="300">
              Choose a plan that fits your mission. Preach Pro offers flexible
              monthly and annual subscriptions, including a free trial to
              explore all premium features before you commit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;