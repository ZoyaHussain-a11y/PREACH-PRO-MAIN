import React from "react";

interface PricingCardProps {
  title: string;
  disabledPrice: string;
  price: string;
  period: string;
  saveText: string;
  features: string[];
  link: string;
  isPro?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  disabledPrice,
  price,
  period,
  saveText,
  features,
  link,
  isPro,
}) => {
  return (
    <div className="pricing-cl-wrapper">
      <div className="pricing-cl-list">
        <div className="pricing-cl-item">
          <div className={`pricing-card-wrap ${isPro ? "_02" : ""}`}>
            <div className="pricing-card-bg">
              <div className="pricing-card-top-wrap">
                <div className={isPro ? "pricing-active-sub-wrap" : "section-sub-title-wrap"}>
                  <div className={`section-single-title pd-08`}>
                    <img
                      loading="lazy"
                      alt="Faq Icon"
                      src="https://cdn.prod.website-files.com/6880da92e980b2c3d0494c0f/68898e2350973b8f0330706a_Team%20Icon.svg"
                      className="faq-icon"
                    />
                    <div className={isPro ? "peremium-text" : "section-sub-title font-20"}>{title}</div>
                  </div>
                </div>
                <div className={`pricing-disable-text ${isPro ? "_01" : ""}`}>{disabledPrice}</div>
                <div className="pricing-price-wrap">
                  <h2 className="pricing-price">{price}</h2>
                  <div className="pricing-month">{period}</div>
                </div>
                <div className="pricing-save-text">{saveText}</div>
              </div>

              <div className="pricing-line-wrap"></div>

              <div className="pricing-all-list-wrapper">
                <div className="pricing-list-title">Features Included:</div>
                <div className="pricing-list-items-wrapper">
                  {features.map((feature, index) => (
                    <div key={index} className="pricing-list-item">
                      <img
                        src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/689ccf2b12567ad14d52b3d0_Pricing%20Icon.svg"
                        loading="lazy"
                        alt=""
                        className="pricing-list-icon"
                      />
                      <div className="pricing-list-text">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pricing-line-wrap"></div>

              <a href={link} className={isPro ? "_404-button pricing" : "pricing-button"}>
                <div className={isPro ? "footer-btn-bg pricing" : "pricing-btn-bg-wrap"}>
                  <div className={isPro ? "footer-btn-text-wrap" : "pricing-btn-all-wrap"}>
                    <div className={isPro ? "pricing-text-wrap" : "pricing-btn-text-wrap"}>
                      <div className={isPro ? "footer-submit-text" : "pricing-btn-text"}>Get Started</div>
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68822ba82f4b0b48b95e99f3_ArrowRight.svg"
                        alt="Get Started"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;