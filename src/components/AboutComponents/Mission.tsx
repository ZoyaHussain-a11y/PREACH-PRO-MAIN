'use client';
import Image from "next/image";

const Mission = () => {
  return (
    <section className="section mission">
      <div className="w-layout-blockcontainer container w-container">
        <div className="mission-wrapper">
          <div className="mission-grid-wrap">
            <div className="mission-left-wrap">
              <div 
                data-w-id="20f1e3cc-ac95-1f2c-d329-96ac047a2144" 
                style={{ opacity: 0 }} 
                className="section-sub-title-wrap"
              >
                <div className="section-single-title pd--09">
                  <Image 
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885f46b0584072faacc61ba_Mission%20Sub%20Icon.svg" 
                    loading="lazy" 
                    alt="Faq Icon" 
                    className="faq-icon"
                    width={24}
                    height={24}
                  />
                  <div className="section-sub-title font-16">Our Mission & Vision</div>
                </div>
              </div>
              <h4 className="mission-title">
                Driven by Innovation, Guided by Purpose Our Mission and Vision for Smarter, Faster, and More Ethical Coding Experiences
              </h4>
            </div>
            
            <div 
              data-w-id="8a7f03f9-16a9-46a6-bf3f-a6c7827cac92" 
              style={{ opacity: 0 }} 
              className="mission-right-wrap"
            >
              <div className="mission-single-wrap">
                <div className="mission-icon-wrap">
                  <div className="mission-icon-bg">
                    <Image 
                      src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885f46b7aa5e71e790a6865_Mission%20Icon%2001.svg" 
                      loading="lazy" 
                      alt="Mission Single Icon" 
                      className="mission-single-icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <h3 className="mission-single-title">Our Mission</h3>
                <p className="mission-single-details">
                  Our mission is to simplify complex processes through intuitive technology, enabling businesses
                </p>
                <ul role="list" className="mission-signle-list">
                  <li className="mission-signle-list-item">Automate with precision and reliability</li>
                  <li className="mission-signle-list-item">Deliver seamless user experiences</li>
                </ul>
              </div>
              
              <div className="mission-single-wrap">
                <div className="mission-icon-wrap">
                  <div className="mission-icon-bg">
                    <Image 
                      src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885f46bf34c5e02ca3d0bfd_Mission%20Icon%2002.svg" 
                      loading="lazy" 
                      alt="Mission Single Icon" 
                      className="mission-single-icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <h3 className="mission-single-title">Our Vision</h3>
                <p className="mission-single-details">
                  We see a future where innovation streamlines daily tasks, allowing teams to focus on what matters most.
                </p>
                <ul role="list" className="mission-signle-list">
                  <li className="mission-signle-list-item">Build smarter, scalable systems</li>
                  <li className="mission-signle-list-item">Foster meaningful digital interactions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section.mission {
          padding: 80px 0;
          background: var(--neutral-01);
        }

        .w-layout-blockcontainer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .mission-wrapper {
          width: 100%;
        }

        .mission-grid-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .mission-left-wrap {
          padding-right: 40px;
        }

        .section-sub-title-wrap {
          margin-bottom: 20px;
        }

        .section-single-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .faq-icon {
          width: 24px;
          height: 24px;
        }

        .section-sub-title.font-16 {
          font-size: 16px;
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .mission-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin: 0;
        }

        .mission-right-wrap {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .mission-single-wrap {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 40px;
          position: relative;
          border: 1px solid #e9ecef;
        }

        .mission-icon-wrap {
          margin-bottom: 24px;
        }

        .mission-icon-bg {
          width: 80px;
          height: 80px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid #f1f3f4;
        }

        .mission-single-icon {
          width: 40px;
          height: 40px;
        }

        .mission-single-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .mission-single-details {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #666;
          margin-bottom: 24px;
        }

        .mission-signle-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mission-signle-list-item {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          font-size: 1rem;
          line-height: 1.5;
          color: #555;
        }

        .mission-signle-list-item:before {
          content: "•";
          position: absolute;
          left: 8px;
          color: #007bff;
          font-weight: bold;
        }

        .mission-signle-list-item:last-child {
          margin-bottom: 0;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .mission-grid-wrap {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .mission-left-wrap {
            padding-right: 0;
          }

          .mission-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 767px) {
          .section.mission {
            padding: 60px 0;
          }

          .mission-single-wrap {
            padding: 30px;
          }

          .mission-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 479px) {
          .w-layout-blockcontainer {
            padding: 0 16px;
          }

          .mission-single-wrap {
            padding: 24px;
          }

          .mission-icon-bg {
            width: 60px;
            height: 60px;
          }

          .mission-single-icon {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Mission;