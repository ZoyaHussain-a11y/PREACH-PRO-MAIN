'use client';

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section feature">
      <div className="w-layout-blockcontainer container">
        <div className="feature-wrapper">
          <div className="feature-top-wrap" data-aos="fade-up">
            <div className="feature-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-sub-title">About</div>
            </div>
            <h1 className="feature-title" data-aos="fade-up" data-aos-delay="200">Built for Ministry Leader</h1>
            <p className="feature-details" data-aos="fade-up" data-aos-delay="300">
              Preach Pro was created to simplify every aspect of ministry—
              from sermon preparation to organization and analytics—so pastors
              can lead effectively with clarity and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;