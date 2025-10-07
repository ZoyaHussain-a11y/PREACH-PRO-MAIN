"use client";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MoveSection2 = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section move">
      <div className="w-layout-blockcontainer container">
        <div className="move-wrapper">
          <div className="move-top-wrap" data-aos="fade-up">
            <div className="section-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="section-single-title pd--09">
                <img
                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6884603b84724c2aec08c257_Feature%20Icon.svg"
                  loading="lazy"
                  alt="Faq Icon"
                  className="faq-icon"
                />
                <div className="section-sub-title font-16">Feature</div>
              </div>
            </div>
            <h2 className="move-title" data-aos="fade-up" data-aos-delay="200">Intelligent Preaching Analytics</h2>
          </div>

          <div className="move-wrap">
            <div className="assistance-single-wrap" data-aos="fade-up" data-aos-delay="300">
              <div className="assistance-left-wrap">
                <h3 className="assistance-single-title">Preach Coach Feedback</h3>
                <p className="assistance-single-details">
                  Get objective feedback on your sermon structure, content balance, and delivery effectiveness with our AI-powered coaching system.
                </p>
                <div className="assistance-btn-wrap left">
                  <a href="/user-pages/log-in" className="_404-button">
                    <div className="footer-btn-bg bd--12">
                      <div className="footer-btn-text-wrap">
                        <div className="footer-submit-text">Start Free Trial</div>
                      </div>
                    </div>
                  </a>
                  <a href="/inner-pages/feature" aria-current="page" className="secondary-button w--current">
                    <div className="secondary-btn-wrap">
                      <div className="secondary-btn-all-wrap">
                        <div className="secondary-btn-text">Learn More</div>
                        <img
                          src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6880d9c4a9adef96cf94bfeb_Arrow%20White.svg"
                          loading="lazy"
                          alt="Secondary Btn Image"
                          className="secondary-btn-image"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="assistance-right-wrap">
                <img
                  className="assistance-single-image"
                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68846cc295433f3d9690f416_Assistance%20Image.webp"
                  alt="Assistance Single Image"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="assistance-btm-wrap" data-aos="fade-up" data-aos-delay="400">
              <div className="assistance-right-wrap">
                <img
                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68846e42375061165228c2b2_Assistance%20Iamge%2002.webp"
                  loading="lazy"
                  alt="Assistance Single Image"
                  className="assistance-single-image"
                />
              </div>
              <div className="assistance-left-wrap">
                <h3 className="assistance-single-title">Progress Tracking</h3>
                <p className="assistance-single-details">
                  Monitor your preaching development over time with detailed analytics, improvement suggestions, and performance benchmarks.
                </p>
                <div className="assistance-btn-wrap left">
                  <a href="/user-pages/log-in" className="_404-button">
                    <div className="footer-btn-bg bd--12">
                      <div className="footer-btn-text-wrap">
                        <div className="footer-submit-text">Start Free Trial</div>
                      </div>
                    </div>
                  </a>
                  <a href="/inner-pages/feature" aria-current="page" className="secondary-button w--current">
                    <div className="secondary-btn-wrap">
                      <div className="secondary-btn-all-wrap">
                        <div className="secondary-btn-text">Learn More</div>
                        <img
                          src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6880d9c4a9adef96cf94bfeb_Arrow%20White.svg"
                          loading="lazy"
                          alt="Secondary Btn Image"
                          className="secondary-btn-image"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MoveSection2;