"use client";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MoveSection3 = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section move-last">
      <div className="w-layout-blockcontainer container">
        <div className="move-wrapper">
          <div className="move-top-wrap" data-aos="fade-up">
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
            <h2 className="move-title" data-aos="fade-up" data-aos-delay="200">Complete Ministry Organization</h2>
          </div>

          <div className="move-wrap">
            <div className="move-grid-wrap">
              <div className="move-single-wrap" data-aos="fade-up" data-aos-delay="300">
                <div className="move-single-image-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68844ff8161faac4bd4fa8e9_Feature%20Image%2004.webp"
                    loading="lazy"
                    alt="Move Single Image"
                    className="move-single-image"
                  />
                </div>
                <div className="move-single-details-wrap">
                  <div className="move-single-title">Contact & Prayer Management</div>
                  <p className="move-single-details _01">
                    Track prayer requests, manage follow-ups, and maintain meaningful connections with your congregation all in one place.
                  </p>
                </div>
              </div>

              <div className="move-single-wrap" data-aos="fade-up" data-aos-delay="400">
                <div className="move-single-image-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68844ff77b5146dd43bc017e_Feature%20Image%2005.webp"
                    loading="lazy"
                    alt="Move Single Image"
                    className="move-single-image"
                  />
                </div>
                <div className="move-single-details-wrap _02">
                  <div className="move-single-title">Task & Calendar Integration</div>
                  <p className="move-single-details _04">
                    Seamlessly coordinate ministry activities with integrated task management, calendar scheduling, and team collaboration tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="move-btm-wrap" data-aos="fade-up" data-aos-delay="500">
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68844ff8d2ddf3c78d6bf2b7_Feature%20Image%2006.webp"
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

export default MoveSection3;