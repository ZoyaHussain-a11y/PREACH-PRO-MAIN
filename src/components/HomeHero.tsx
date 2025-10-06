"use client";

const HomeHero = () => {
  return (
    <section className="section feature">
      <div className="w-layout-blockcontainer container">
        <div className="feature-wrapper">
          <div className="feature-top-wrap">
            <div className="feature-sub-title-wrap">
              <div className="feature-sub-title">AI Platform</div>
            </div>
            <h1 className="feature-title">Empowering Modern Ministry</h1>
            <p className="feature-details">
              Preach Pro is your all-in-one ministry management platform—
              combining AI-powered sermon writing, task tracking, and analytics
              to help leaders focus on what truly matters: ministry impact.
            </p>
            <div className="cta-form-block">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="cta-form"
              >
                <input
                  className="cta-email-field"
                  maxLength={256}
                  name="email"
                  data-name="Email"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
                <div className="submit-btn-wrap">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="submit-button"
                    value="Join Waitlist"
                  />
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
