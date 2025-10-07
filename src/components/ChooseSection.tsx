"use client";
import "@/styles/globals.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ChooseSection() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section chooose">
      <div className="w-layout-blockcontainer container">
        <div className="choose-wrapper">
          <div className="move-top-wrap" data-aos="fade-up">
            <div className="section-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="section-single-title pd--09">
                <img
                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/688482a10c9a07b93b2fef53_Choose%20Icon.svg"
                  loading="lazy"
                  alt="Faq Icon"
                  className="faq-icon"
                />
                <div className="section-sub-title font-16">Why Us?</div>
              </div>
            </div>
            <h2 className="move-title" data-aos="fade-up" data-aos-delay="200">The Satch Advantage</h2>
          </div>

          <div className="choose-wrap">
            <div className="choose-grid-wrap">
              {/* Choose Item 1 */}
              <div className="choose-signle-wrap" data-aos="fade-up" data-aos-delay="300">
                <div className="choose-signle-bg-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6884849f040f74169a6a7ff8_Choose%20Icon%2001.svg"
                    loading="lazy"
                    alt="Choose Single Icon"
                    className="choose-single-icon"
                  />
                  <div className="choose-single-btm-wrap">
                    <h3 className="choose-single-title">Edit in natural language</h3>
                    <p className="choose-single-btm-detals">
                      We bring proven, high-performing solutions tailored to your needs — designed to deliver.
                    </p>
                  </div>
                </div>
              </div>

              {/* Choose Item 2 */}
              <div className="choose-signle-wrap" data-aos="fade-up" data-aos-delay="400">
                <div className="choose-signle-bg-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6884849fa3407a6933f3022c_Choose%20Icon%2002.svg"
                    loading="lazy"
                    alt="Choose Single Icon"
                    className="choose-single-icon"
                  />
                  <div className="choose-single-btm-wrap">
                    <h3 className="choose-single-title">24/7 Support</h3>
                    <p className="choose-single-btm-detals">
                      Day or night, our dedicated team is always here to help you — fast, friendly, and whenever you need us.
                    </p>
                  </div>
                </div>
              </div>

              {/* Choose Item 3 */}
              <div className="choose-signle-wrap" data-aos="fade-up" data-aos-delay="500">
                <div className="choose-signle-bg-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6884849f1db5c9751b965790_Choose%20Icon%2003.svg"
                    loading="lazy"
                    alt="Choose Single Icon"
                    className="choose-single-icon"
                  />
                  <div className="choose-single-btm-wrap">
                    <h3 className="choose-single-title">100% Safe & Secure</h3>
                    <p className="choose-single-btm-detals">
                      Your data is fully protected with enterprise-grade security. Privacy and safety are built into everything we do.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}