import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section className="section pricing">
      <div className="section-bg">
        <div className="container">
          <div className="pricing-wrapper">
            <div className="pricing-top-wrap">
              <div className="section-sub-title-wrap">
                <div className="section-single-title pd--09">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6882e9e4bd1e47cda95a6814_Price%20Icon.svg"
                    loading="lazy"
                    alt="Faq Icon"
                    className="faq-icon"
                  />
                  <div className="section-sub-title font-16">Pricing</div>
                </div>
              </div>
              <h1 className="pricing-title">Ministry Management Plans</h1>
              <p className="pricing-details">
                From sermon preparation to ministry organization—all from one powerful platform. Streamline your ministry, save time, and focus on what matters most.
              </p>
            </div>

            <div className="pricing-wrap">
              <div className="pricing-tabs">
                <div className="pricing-tabs-menu">
                </div>

                <div className="pricing-tabs-content">
                  <div className="pricing-tab-pane"></div>
                  <div className="pricing-tab-pane w--tab-active">
                    <div className="pricing-tab-grid-wrap">
                      <PricingCard
                        title="Free Trial"
                        disabledPrice="$29"
                        price="Free"
                        period="/7 days"
                        saveText="Full access for 7 days"
                        features={[
                          "Complete AI sermon assistance",
                          "Full ministry management suite",
                          "Calendar and task management",
                          "Contact and prayer tracking",
                          "Preach Coach analytics"
                        ]}
                        link="/signup/trial"
                        isPro
                      />

                      <PricingCard
                        title="Monthly Pro"
                        disabledPrice="$348"
                        price="$29"
                        period="/month"
                        saveText="Complete ministry platform"
                        features={[
                          "Unlimited AI sermon assistance",
                          "Advanced preaching coaching",
                          "Audio and YouTube integration",
                          "Priority customer support",
                          "Advanced export capabilities"
                        ]}
                        link="/signup/monthly"
                        isPro
                      />

                      <PricingCard
                        title="Annual Pro"
                        disabledPrice="$445"
                        price="$290"
                        period="/year"
                        saveText="Save 17% with annual billing"
                        features={[
                          "All Pro features included",
                          "Enhanced customer success support",
                          "Priority feature requests",
                          "Advanced analytics dashboard",
                          "Team collaboration tools"
                        ]}
                        link="/signup/annual"
                        isPro
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;