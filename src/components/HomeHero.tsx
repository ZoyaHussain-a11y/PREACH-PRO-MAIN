'use client';

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HomeHero = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section feature">
      <div className="w-layout-blockcontainer container">
        <div className="feature-wrapper">
          <div className="feature-top-wrap" data-aos="fade-up">
            <div className="feature-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-sub-title">AI Platform</div>
            </div>
            <h1 className="feature-title" data-aos="fade-up" data-aos-delay="200">
              Empowering Modern Ministry
            </h1>
            <p className="feature-details" data-aos="fade-up" data-aos-delay="300">
              Preach Pro is your all-in-one ministry management platform—
              combining AI-powered sermon writing, task tracking, and analytics
              to help leaders focus on what truly matters: ministry impact.
            </p>
            <div className="cta-form-block" data-aos="fade-up" data-aos-delay="400">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="cta-form"
              >
                <input
                  className="cta-email-field"
                  maxLength={256}
                  name="email"
                  data-name="Email"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
                <div className="submit-btn-wrap">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="submit-button"
                    value="Join Waitlist"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;