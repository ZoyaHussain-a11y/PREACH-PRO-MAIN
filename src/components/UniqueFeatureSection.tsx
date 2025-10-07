"use client";
import "@/styles/globals.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function UniqueFeatureSection() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="section uniqe">
      <div className="w-layout-blockcontainer container">
        <div className="uniqe-wrapper">
          <div className="move-top-wrap" data-aos="fade-up">
            <div className="section-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="section-single-title pd--09">
                <img
                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6884603b84724c2aec08c257_Feature%20Icon.svg"
                  loading="lazy"
                  alt="Faq Icon"
                  className="faq-icon"
                />
                <div className="section-sub-title font-16">Unique Feature</div>
              </div>
            </div>
            <h2 className="move-title" data-aos="fade-up" data-aos-delay="200">Featured you've always dreamed of</h2>
          </div>
          <div className="uniqe-wrap">
            <div className="uniqe-grid-wrap">
              <div className="uniqe-left-wrap" data-aos="fade-up" data-aos-delay="300">
                <div className="uniqe-left-bg-wrap">
                  <h3 className="uniqe-single-title">Tab, tab, tab</h3>
                  <p className="uniqe-signle-details">
                    Move faster with intelligent auto-complete and instant suggestions that keep your hands on the keyboard and your mind in the flow.
                  </p>
                  <img
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68847b113afb900484c350b0_Feature%20Image%2001.webp"
                    loading="lazy"
                    alt="Uniqe Single Image"
                    className="uniqe-single-image"
                  />
                </div>
              </div>
              <div className="uniqe-right-wrap">
                <div className="uniqe-single-wrap" data-aos="fade-up" data-aos-delay="400">
                  <div className="uniqe-single-bg-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68847b105ce5b5ccb722d8cf_Unique%20Icon%2001.svg"
                      loading="lazy"
                      alt="Uniqe Single Icon"
                      className="uniqe-single-icon"
                    />
                    <h3 className="uniqe-single-title _01">Knows your codebase</h3>
                    <p className="uniqe-signle-details">
                      Understand your project in context — from files to functions — with smart insights tailored to your codebase, not just generic guesses.
                    </p>
                  </div>
                </div>
                <div className="uniqe-single-wrap" data-aos="fade-up" data-aos-delay="500">
                  <div className="uniqe-single-bg-wrap _02">
                    <img
                      src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68847b10617c539ba866e56e_Unique%20Icon%2002.svg"
                      loading="lazy"
                      alt="Uniqe Single Icon"
                      className="uniqe-single-icon"
                    />
                    <h3 className="uniqe-single-title _01">Edit in natural language</h3>
                    <p className="uniqe-signle-details">
                      Skip the syntax. Describe what you want in plain English and let AI write, refactor, or fix the code for you — instantly and accurately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}