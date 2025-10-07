'use client';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section feature">
      <div className="w-layout-blockcontainer container">
        <div className="feature-wrapper">
          <div className="feature-top-wrap" data-aos="fade-up">
            <div className="feature-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-sub-title">Features</div>
            </div>
            <h1 className="feature-title" data-aos="fade-up" data-aos-delay="200">Smarter Tools for Ministry Growth</h1>
            <p className="feature-details" data-aos="fade-up" data-aos-delay="300">
              From AI-assisted sermon writing to calendar and task management,
              Preach Pro integrates every tool you need to organize, plan, and
              grow your ministry with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;