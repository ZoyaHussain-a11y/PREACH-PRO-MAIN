"use client";
import "@/styles/globals.css";

const MoveSection1 = () => {
  return (
    <section className="section move">
      <div className="w-layout-blockcontainer container">
        <div className="move-wrapper">
          <div className="move-top-wrap">
            <div className="section-sub-title-wrap">
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
            <h2 className="move-title">Everything you need for effective ministry management</h2>
          </div>

          <div className="move-wrap">
            <div className="move-grid-wrap">
              <div className="move-single-wrap">
                <div className="move-single-image-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68844ff845dc217b101f2d8c_Feature%20Image%2001.webp"
                    loading="lazy"
                    alt="Move Single Image"
                    className="move-single-image"
                  />
                </div>
                <div className="move-single-details-wrap">
                  <div className="move-single-title">AI-Powered Sermon Writing</div>
                  <p className="move-single-details">
                    Generate sermon outlines, illustrations, and complete messages with intelligent AI assistance—save hours each week in preparation time.
                  </p>
                </div>
              </div>

              <div className="move-single-wrap">
                <div className="move-single-image-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68844ff8f37d447a2d9628c8_Feature%20Image%2002.webp"
                    loading="lazy"
                    alt="Move Single Image"
                    className="move-single-image"
                  />
                </div>
                <div className="move-single-details-wrap">
                  <div className="move-single-title">Ministry Organization</div>
                  <p className="move-single-details _02">
                    Manage your entire ministry from one platform—calendar, tasks, contacts, and prayer requests all integrated seamlessly.
                  </p>
                </div>
              </div>
            </div>

            <div className="move-btm-wrap">
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68844ff8a3407a6933eb9e54_Feature%20Image%2003.webp"
                loading="lazy"
                alt="Move Btm Image"
                className="move-btm-image"
              />
              <div className="move-btn-black-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoveSection1;