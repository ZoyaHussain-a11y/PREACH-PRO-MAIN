"use client";
import React from "react";

interface SolutionItem {
  title: string;
  description: string;
}

interface ProgressStep {
  number: string;
  lineClass?: string;
}

const Solution = () => {
  const solutionItems: SolutionItem[] = [
    {
      title: "Solutions",
      description: "Tailored solutions designed and thought out to meet your security needs and perfectly adapt to your organization, regardless of its size."
    },
    {
      title: "Automation",
      description: "Streamline your development process with intelligent automation that adapts to your coding patterns and eliminates repetitive, manual tasks effortlessly."
    },
    {
      title: "Integration",
      description: "Easily connect with your favorite tools and platforms to create a seamless workflow that enhances productivity and collaboration across your development stack."
    }
  ];

  const progressSteps: ProgressStep[] = [
    { number: "01", lineClass: "_01" },
    { number: "02", lineClass: "_02" },
    { number: "03" }
  ];

  return (
    <section className="section solution">
      <div data-w-id="135cf7bd-2bd2-b6bb-0b19-a6fd36a00689" className="solution-wrapper">
        <div className="solution-sicky-wrapper">
          <div className="solution-all-item-wrap">
            <div className="solution-grid-wrap">
              <div className="solution-left-wrap">
                <div className="solution-title-wrap">
                  {solutionItems.map((item, index) => (
                    <h2 key={index} className="solution-single-titel">
                      {item.title}
                    </h2>
                  ))}
                </div>
              </div>
              <div className="solution-blank-wrap _01"></div>
              <div className="solution-blank-wrap _02"></div>
              <div className="solution-right-wrap">
                <div className="solution-details-wrap">
                  {solutionItems.map((item, index) => (
                    <p key={index} className="soluction-single-details">
                      {item.description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="solution-all-number-wrap">
              <div className="solution-all-number">
                {progressSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="solution-number">{step.number}</div>
                    {step.lineClass && (
                      <div className="solution-line">
                        <div className={`solution-green-line ${step.lineClass}`}></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;