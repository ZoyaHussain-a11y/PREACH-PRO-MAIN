"use client";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

interface StatsItem {
  icon: string;
  title: string;
  description: string;
  className?: string;
  dataWId?: string;
}

const Stats = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  // Updated number sequences to display "20K" and "+24"
  const numberSequence1: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numberSequence2: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numberSequence3: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const statsItems: StatsItem[] = [
    {
      icon: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885929d6b245c30f1eded53_Stats%20Icon%2001.svg",
      title: "1M+ Developers Empowered",
      description: "From indie hackers to enterprise teams, we support coders at every level",
      className: "_01",
      dataWId: "d13603e1-bfbc-a6f2-3a98-c0ec393678ed"
    },
    {
      icon: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885929d31a371dd91c57f0e_Stats%20Icon%2002.svg",
      title: "99.9% Code Accuracy",
      description: "Our AI-assisted engine delivers industry-leading code suggestions and completions.",
      className: "_02",
      dataWId: "b3c80c2b-fe12-2f53-efb5-296089eb561f"
    },
    {
      icon: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885929d1bfa52469df871a7_Stats%20Icon%2003.svg",
      title: "150+ Languages & Frameworks Supported",
      description: "Whether it's Python, Rust, or React - our editor adapts to your stack",
      dataWId: "05641c09-abda-3800-c376-a42d72e1defa"
    }
  ];

  return (
    <section className="section stats">
      <div className="w-layout-blockcontainer container w-container">
        <div className="stats-wrapper">
          <div className="stats-grid-wrap">
            <div className="stats-left-wrap" data-aos="fade-up">
              <div className="stats-left-top-wrap" data-aos="fade-up" data-aos-delay="100">
                <div data-w-id="e4fc693f-1359-3c0b-7b46-02dd5305690e" style={{ opacity: 1 }} className="section-sub-title-wrap">
                  <div className="section-single-title pd--09">
                    <img
                      src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885929d256fadfdd66ad5ea_Stats%20Icon.svg"
                      loading="lazy"
                      alt="Stats Icon"
                      className="faq-icon"
                    />
                    <div className="section-sub-title font-16">Stats</div>
                  </div>
                </div>
                <h2 className="stats-title">Powering Smarter Development</h2>
              </div>
              <div data-w-id="4e5ba5fc-d397-b7ae-efa5-e62c008d0936" style={{ opacity: 1 }} className="stats-left-btm-wrap" data-aos="fade-up" data-aos-delay="200">
                {/* 20K - Build live Websites */}
                <div className="stast-number-wrapper">
                  <div data-w-id="77b4320c-100a-6891-9d9f-8b00897d9127" className="stast-number-wrap">
                    <div className="stast-number-overflow">
                      <div className="stast-all-number">
                        <div
                          style={{
                            transform: "translate3d(0, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                          }}
                          className="stast-single-number _01"
                        >
                          {numberSequence1.map((num, index) => (
                            <div key={index} className="stast-number-overflow">{num}</div>
                          ))}
                        </div>
                        <div
                          style={{
                            transform: "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                          }}
                          className="stast-single-number _02"
                        >
                          {numberSequence2.map((num, index) => (
                            <div key={index} className="stast-number-overflow">{num}</div>
                          ))}
                        </div>
                        <div className="stast-number-overflow">K</div>
                      </div>
                    </div>
                  </div>
                  <div className="stats-number-details">Build live Websites</div>
                </div>
                
                {/* +24 - Team Members */}
                <div className="stast-number-wrapper">
                  <div data-w-id="7636dd20-25e7-604a-e91f-5cc00600b49e" className="stast-number-wrap">
                    <div className="stast-number-overflow">
                      <div className="stast-all-number">
                        <div className="stast-number-overflow">+</div>
                        <div
                          style={{
                            transform: "translate3d(0, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                          }}
                          className="stast-single-number _01"
                        >
                          {numberSequence1.map((num, index) => (
                            <div key={index} className="stast-number-overflow">{num}</div>
                          ))}
                        </div>
                        <div
                          style={{
                            transform: "translate3d(0, -40%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                          }}
                          className="stast-single-number _02"
                        >
                          {numberSequence3.map((num, index) => (
                            <div key={index} className="stast-number-overflow">{num}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="stats-number-details">Team Members</div>
                </div>
              </div>
            </div>
            
            <div className="stats-right-wrap">
              {statsItems.map((item, index) => (
                <div
                  key={index}
                  data-w-id={item.dataWId}
                  style={{ opacity: 1 }}
                  className="stats-single-wrap"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 100)}
                >
                  <div className="stats-single-bg-wrap">
                    <div className="stats-signle-icon-wrap">
                      <img
                        src={item.icon}
                        loading="lazy"
                        alt="Stats Icon"
                        className="stats-signle-icon"
                      />
                    </div>
                    <div className="stats-signle-details-wrap">
                      <h3 className="stats-single-title">{item.title}</h3>
                      <p className={`stats-single-details ${item.className || ""}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;