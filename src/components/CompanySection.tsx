"use client";
import "@/styles/globals.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function CompanySection() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  const companyLogos = [
    "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b46e775149b5116bfa_Company%20Logo%2001.svg",
    "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b4d1c655638d6a36d1_Company%20Logo%2002.svg",
    "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b4a0736f00e42e8adb_Company%20Logo%2003.svg",
    "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b4c131588cbfc0df2b_Company%20Logo%2004.svg",
    "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b4b257e8b209ac12f0_Company%20Logo%2005.svg"
  ];

  return (
    <section className="section home-company">
      <div className="w-layout-blockcontainer container">
        <div className="company-wrapper">
          <div className="company-top-wrap" data-aos="fade-up">
            <div className="company-top-title">
              Supported and Powered by Several Top Company
            </div>
          </div>
          <div className="company-wrap" data-aos="fade-up" data-aos-delay="200">
            <div className="company-scroll-container">
              <div className="company-scroll-track">
                {/* First set of logos */}
                <div className="company-single-wrap">
                  {companyLogos.map((logo, index) => (
                    <img
                      key={`first-${index}`}
                      src={logo}
                      loading="lazy"
                      alt="Company Logo"
                      className="company-single-image"
                    />
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="company-single-wrap" aria-hidden="true">
                  {companyLogos.map((logo, index) => (
                    <img
                      key={`second-${index}`}
                      src={logo}
                      loading="lazy"
                      alt="Company Logo"
                      className="company-single-image"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .company-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 20px 0;
        }

        .company-scroll-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .company-scroll-track:hover {
          animation-play-state: paused;
        }

        .company-single-wrap {
          display: flex;
          align-items: center;
          gap: 60px;
          padding: 0 40px;
        }

        .company-single-image {
          height: 40px;
          width: auto;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .company-single-image:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .company-single-wrap {
            gap: 40px;
            padding: 0 20px;
          }
          
          .company-single-image {
            height: 30px;
          }

          .company-scroll-track {
            animation: scroll 20s linear infinite;
          }
        }

        @media (max-width: 480px) {
          .company-single-wrap {
            gap: 30px;
            padding: 0 15px;
          }
          
          .company-single-image {
            height: 25px;
          }
        }
      `}</style>
    </section>
  );
}