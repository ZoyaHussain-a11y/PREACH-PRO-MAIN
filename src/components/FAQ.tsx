'use client';

import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const faqData = [
    {
      question: "What is Preach Pro?",
      answer:
        "Preach Pro is a comprehensive ministry management platform combining AI-powered sermon writing assistance with full ministry organization tools — designed to help church leaders prepare sermons, manage schedules, and oversee ministry operations efficiently."
    },
    {
      question: "Who can use Preach Pro?",
      answer:
        "Preach Pro is built for pastors, ministry leaders, and administrative users looking to streamline sermon preparation and church management. It's also great for trial users evaluating modern ministry tools."
    },
    {
      question: "What features does Preach Pro offer?",
      answer:
        "The platform includes AI sermon writing, note management, task and calendar organization, contact tracking, performance analytics, and subscription management — all in one modern web app."
    },
    {
      question: "Is my data secure on Preach Pro?",
      answer:
        "Yes. Preach Pro uses Supabase for secure authentication and PostgreSQL with Row-Level Security. All communications are encrypted with TLS 1.3, and data at rest is protected with AES-256 encryption."
    },
    {
      question: "Does Preach Pro integrate with external tools?",
      answer:
        "Absolutely! Preach Pro integrates with OpenAI for AI-powered writing, Stripe for billing, and Supabase for authentication, database, and storage. It's fully responsive and cloud-deployed for modern ministry needs."
    }
  ];

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <section className="section faq">
      <div className="w-layout-blockcontainer container">
        <div className="faq-wrapper">
          <div className="faq-top-wrap">
            <div className="section-sub-title-wrap">
              <div className="section-single-title">
                <Image 
                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/687c318a60d814c2e8209c90_Faq%20Icon.svg" 
                  loading="lazy" 
                  alt="Faq Icon" 
                  className="faq-icon"
                  width={24}
                  height={24}
                />
                <div className="section-sub-title">FAQ</div>
              </div>
            </div>
            <h2 className="faq-title">Questions? We've got answers.</h2>
          </div>
          
          <div className="faq-wrap">
            <div className="faq-tabs">
              <div className="faq-tabs-menu">
                {faqData.map((faq, index) => (
                  <div 
                    key={index}
                    className={`faq-tab-link ${activeTab === index ? 'w--current' : ''}`}
                    onClick={() => toggleTab(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="faq-single-wrap">
                      <div className="faq-question-wrap">
                        <div className="faq-question">{faq.question}</div>
                        <div className="faq-icon-wrap">
                          <Image 
                            src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/687c3483808d90d0737df7e2_Plus.svg" 
                            loading="lazy" 
                            alt="Faq Icon" 
                            className={`faq-single-icon _01 ${activeTab === index ? 'hidden' : ''}`}
                            width={20}
                            height={20}
                          />
                          <Image 
                            src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/687c3483216fcb9d156d245e_Minuse.svg" 
                            loading="lazy" 
                            alt="Faq Icon" 
                            className={`faq-single-icon _02 ${activeTab === index ? '' : 'hidden'}`}
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                      <div className={`faq-answer-wrap ${activeTab === index ? 'active' : ''}`}>
                        <p className="faq-single-details">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;