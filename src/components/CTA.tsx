'use client';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section cta">
      <div className="w-layout-blockcontainer container">
        <div className="cta-wrapper">
          <div className="cta-top-wrap" data-aos="fade-up">
            <h2 className="cta-title" data-aos="fade-up" data-aos-delay="100">
              Try <span className="cta-rgb">Preach Pro</span> Today
            </h2>
            <div className="cta-details" data-aos="fade-up" data-aos-delay="200">
              Empower your ministry with AI-assisted sermon preparation, organized calendars, task management, and analytics — all in one powerful platform.
            </div>
            <div className="cta-form-block" data-aos="fade-up" data-aos-delay="300">
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
          <div className="cta-wrap" data-aos="fade-up" data-aos-delay="400">
            <img
              src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/687b2bf3fb2598beba1d12cf_CTA%20Image.png"
              loading="lazy"
              alt="Preach Pro CTA"
              className="cta-image"
            />
            <div className="cta-image-round"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;