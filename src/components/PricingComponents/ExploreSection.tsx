"use client";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ExploreSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  const exploreData = [
    { feature: "AI Sermon Assistance", freeTrial: "Unlimited", monthly: "Unlimited", annual: "Unlimited" },
    { feature: "Sermon Writing Tools", freeTrial: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, monthly: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, annual: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, transparent: true },
    { feature: "Ministry Calendar", freeTrial: "Unlimited", monthly: "Unlimited", annual: "Unlimited" },
    { feature: "Preach Coach Analytics", freeTrial: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, monthly: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, annual: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, transparent: true },
    { feature: "Audio/YouTube Integration", freeTrial: "-", monthly: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, annual: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" /> },
    { feature: "Priority Support", freeTrial: "-", monthly: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, annual: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, transparent: true },
    { feature: "Advanced Export", freeTrial: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, monthly: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" />, annual: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" /> },
    { feature: "Team Collaboration", freeTrial: "-", monthly: "-", annual: <img src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68838a14f12c4edc8ded844b_Corect%20Icon.svg" alt="Explore Icon" className="explore-icon" /> },
  ];

  return (
    <section className="section explore">
      <div className="container">
        <div className="explore-all-wrap">
          <div className="explore-wrapper">
            <div className="explore-top-wrap" data-aos="fade-up">
              <div className="section-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
                <div className="section-single-title">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6882e9e4bd1e47cda95a6814_Price%20Icon.svg"
                    loading="lazy"
                    alt="Faq Icon"
                    className="faq-icon"
                  />
                  <div className="section-sub-title font-16">Feature Comparison</div>
                </div>
              </div>
              <h2 className="explore-title" data-aos="fade-up" data-aos-delay="200">Compare Ministry Plans</h2>
            </div>
            <div className="explore-wrap" data-aos="fade-up" data-aos-delay="300">
              <div className="explore-single-title-grid">
                <div className="explore-single-title">Features</div>
                <div className="explore-single-title">Free Trial</div>
                <div className="explore-single-title">Monthly Pro</div>
                <div className="explore-single-title">Annual Pro</div>
              </div>

              {exploreData.map((row, index) => (
                <div
                  key={index}
                  className={`explore-single-title-grid ${row.transparent ? "transparent" : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={400 + (index * 50)}
                >
                  <div className="explore-single-details">{row.feature}</div>
                  <div className="explore-single-details">{row.freeTrial}</div>
                  <div className="explore-single-details">{row.monthly}</div>
                  <div className="explore-single-details">{row.annual}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;