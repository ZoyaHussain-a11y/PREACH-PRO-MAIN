"use client";
import "@/styles/globals.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function FeatureV1Section() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section feature-v1">
      <div className="feature-v1-bg">
        <div className="w-layout-blockcontainer container">
          <div className="feature-v1-wrapper">
            
            {/* Top Section */}
            <div className="feature-v1-top-wrap" data-aos="fade-up">
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
              <h2 className="feature-v1-title" data-aos="fade-up" data-aos-delay="200">AI-Powered Ministry Management Tools</h2>
              <p className="feature-v1-details" data-aos="fade-up" data-aos-delay="300">
                Designed specifically for church leadership, we prioritize your ministry's growth and provide comprehensive tools for effective sermon preparation and congregation management.
              </p>
            </div>

            {/* Feature Items */}
            <div className="feature-v1-wrap">

              {/* Item 1 */}
              <div className="feature-v1-top-single-wrap" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-v1-single-left-wrap _01">
                  <h3 className="assistance-single-title">Smart Sermon Preparation</h3>
                  <p className="assistance-single-details">
                    Generate complete sermon outlines, find relevant illustrations, and get biblical insights with our AI-powered writing assistant. Save hours each week while creating more impactful messages.
                  </p>
                  <div className="assistance-btn-wrap left">
                    <a href="/user-pages/log-in" className="_404-button">
                      <div className="footer-btn-bg bd--12">
                        <div className="footer-btn-text-wrap">
                          <div className="footer-submit-text">Start Free Trial</div>
                        </div>
                      </div>
                    </a>
                    <a href="/inner-pages/integration" className="secondary-button">
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
                <div className="feature-v1-single-right-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6884e7f2994fe01ced2484f2_Feature%20V1%20Image%2001.webp"
                    loading="lazy"
                    alt="Feature V1 Single Left Wrap"
                    className="feature-v1-single-left-wrap"
                  />
                </div>
              </div>

              {/* Item 2 */}
              <div className="feature-v1-middle-wrap" data-aos="fade-up" data-aos-delay="500">
                <div className="feature-v1-middle-left">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6884edcc994fe01ced25da2c_Feature%20V1%2002.webp"
                    loading="lazy"
                    alt="Feature V1 Middle Image"
                    className="feature-v1-middle-image"
                  />
                </div>
                <div className="feature-v1-middle-right">
                  <h3 className="assistance-single-title">Complete Ministry Organization</h3>
                  <p className="assistance-single-details">
                    Manage your entire ministry from one platform. Coordinate schedules, track prayer requests, manage contacts, and organize tasks—all seamlessly integrated to save you time and reduce administrative burden.
                  </p>
                  <div className="assistance-btn-wrap left">
                    <a href="/user-pages/log-in" className="_404-button">
                      <div className="footer-btn-bg bd--12">
                        <div className="footer-btn-text-wrap">
                          <div className="footer-submit-text">Start Free Trial</div>
                        </div>
                      </div>
                    </a>
                    <a href="/inner-pages/integration" className="secondary-button">
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

              {/* Item 3 */}
              <div className="feature-v1-btm-wrap" data-aos="fade-up" data-aos-delay="600">
                <div className="feature-v1-middle-right">
                  <h3 className="assistance-single-title">Preach Coach Analytics</h3>
                  <p className="assistance-single-details">
                    Get objective feedback on your sermon delivery and content. Our AI-powered coaching system analyzes your messages and provides actionable insights to help you grow as a communicator and connect more effectively with your congregation.
                  </p>
                  <div className="assistance-btn-wrap left">
                    <a href="/user-pages/log-in" className="_404-button">
                      <div className="footer-btn-bg bd--12">
                        <div className="footer-btn-text-wrap">
                          <div className="footer-submit-text">Start Free Trial</div>
                        </div>
                      </div>
                    </a>
                    <a href="/inner-pages/integration" className="secondary-button">
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
                <div className="feature-v1-middle-left">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6884e7f24c7168632c3fce88_Feature%20V1%20Image%2003.webp"
                    loading="lazy"
                    alt="Feature V1 Middle Image"
                    className="feature-v1-middle-image"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}