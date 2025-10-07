"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    img: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885bd4bfbe7f9f2211692ad_Team%20Author%20Image%2001.svg",
    name: "Jessica Redman",
    role: "Ceo of Ozz cafe",
    quote:
      "Satch is the first bag that's actually made my day easier. It's lightweight, spacious, and feels built to last. Stylish and practical — the perfect combo.",
  },
  {
    img: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68906ab3f2478160995a85be_Author%20Image%2003.png",
    name: "Jessica Redman",
    role: "Ceo of Rizen cafe",
    quote:
      "I've used countless bags, but nothing compares to the quality and comfort of Satch. It's sleek, durable, and fits perfectly into my daily routine. Absolutely worth it!",
  },
  {
    img: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68906ab3f2478160995a85be_Author%20Image%2003.png",
    name: "Jessica Redman",
    role: "Ceo of Onix cafe",
    quote:
      "From commuting to weekend trips, Satch handles it all. It's the only bag I trust to keep up with my lifestyle. Comfortable, reliable, and effortlessly cool.",
  },
  {
    img: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68906a9855a360a548974f1c_Author%20Image%2004.png",
    name: "Harriet Nitzsche",
    role: "Product Brand Executive",
    quote:
      "Satch is the first bag that's actually made my day easier. It's lightweight, spacious, and feels built to last. Stylish and practical — the perfect combo.",
  },
  {
    img: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885bd4bfbe7f9f2211692ad_Team%20Author%20Image%2001.svg",
    name: "Rex Nitzsche",
    role: "Legacy Factors Technician",
    quote:
      "From commuting to weekend trips, Satch handles it all. It's the only bag I trust to keep up with my lifestyle. Comfortable, reliable, and effortlessly cool.",
  },
];

const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section testimonial">
      <div className="w-layout-blockcontainer container w-container">
        <div className="testimonila-wrapper">
          <div className="testimonila-top-wrap" data-aos="fade-up">
            <div className="section-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="section-single-title pd--09">
                <img
                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885bd4ad4249589709b6ae3_Author%20Sub%20Icon.svg"
                  alt="Faq Icon"
                  className="faq-icon"
                />
                <div className="section-sub-title font-16">Testimonial</div>
              </div>
            </div>
            <h2 className="testimonial-title" data-aos="fade-up" data-aos-delay="200">Voices of Trust</h2>
          </div>

          <div className="testimonila-wrap" data-aos="fade-up" data-aos-delay="300">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".blog-slider-right-arrow",
                prevEl: ".blog-slider-left-arrow",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-signle-all-wrap" data-aos="fade-up" data-aos-delay={400 + (index * 100)}>
                    <div className="testimonial-single-slide-bg">
                      <div className="testimonial-single-slide-wrap">
                        <div className="testimonial-slider-top-wrap">
                          <div className="testimonial-slider-author-wrap">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="testimonial-author"
                            />
                            <div className="testimonial-author-details">
                              <h3 className="testimonial-author-title">{item.name}</h3>
                              <div className="testimonial-aur-detals">{item.role}</div>
                            </div>
                          </div>
                          <img
                            src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885c804e135439678bbd3e1_Testimonial%20Star.svg"
                            alt="Testimonial Star"
                            className="testimonial-star"
                          />
                        </div>
                        <div className="testimonial-line"></div>
                        <p className="testimonial-details">{item.quote}</p>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885bd49af72390465ad1b0c_quote.svg"
                      alt="Testimonial Quaties"
                      className="testimonial-quaties"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="blog-slider-left-arrow _02 w-slider-arrow-left">
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68822ba8f7d28a845605318f_ArrowLeft.svg"
                alt="Arrow Icon"
                className="arrow-icon"
              />
            </div>
            <div className="blog-slider-right-arrow _01 w-slider-arrow-right">
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68822ba82f4b0b48b95e99f3_ArrowRight.svg"
                alt="Arrow Icon"
                className="arrow-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;