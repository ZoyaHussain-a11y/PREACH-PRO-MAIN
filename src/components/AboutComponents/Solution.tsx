'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SolutionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <section className="section solution">
      <div 
        data-w-id="135cf7bd-2bd2-b6bb-0b19-a6fd36a00689" 
        className="solution-wrapper"
        data-aos="fade-up"
      >
        <div className="solution-sicky-wrapper">
          <div className="solution-all-item-wrap">
            <div className="solution-grid-wrap">
              <div className="solution-left-wrap">
                <div className="solution-title-wrap">
                  <h2 className="solution-single-titel" data-aos="fade-up">Solutions</h2>
                  <h2 className="solution-single-titel" data-aos="fade-up" data-aos-delay="100">Automation</h2>
                  <h2 className="solution-single-titel" data-aos="fade-up" data-aos-delay="200">Integration</h2>
                </div>
              </div>
              
              <div className="solution-blank-wrap _01"></div>
              <div className="solution-blank-wrap _02"></div>
              
              <div className="solution-right-wrap">
                <div className="solution-details-wrap">
                  <p className="soluction-single-details" data-aos="fade-up">
                    Tailored solutions designed and thought out to meet your security needs and perfectly adapt to your organization, regardless of its size.
                  </p>
                  <p className="soluction-single-details" data-aos="fade-up" data-aos-delay="100">
                    Streamline your development process with intelligent automation that adapts to your coding patterns and eliminates repetitive, manual tasks effortlessly.
                  </p>
                  <p className="soluction-single-details" data-aos="fade-up" data-aos-delay="200">
                    Easily connect with your favorite tools and platforms to create a seamless workflow that enhances productivity and collaboration across your development stack.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="solution-all-number-wrap">
              <div className="solution-all-number">
                <div className="solution-number" data-aos="fade-up">01</div>
                <div className="solution-line">
                  <div className="solution-green-line _01" data-aos="fade-up"></div>
                </div>
                <div className="solution-number" data-aos="fade-up" data-aos-delay="100">02</div>
                <div className="solution-line">
                  <div className="solution-green-line _02" data-aos="fade-up" data-aos-delay="100"></div>
                </div>
                <div className="solution-number" data-aos="fade-up" data-aos-delay="200">03</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;