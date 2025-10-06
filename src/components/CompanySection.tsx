// File: components/CompanySection.tsx
"use client";
import "@/styles/globals.css";

export default function CompanySection() {
  return (
    <section className="section home-company">
      <div className="w-layout-blockcontainer container">
        <div className="company-wrapper">
          <div className="company-top-wrap">
            <div className="company-top-title">
              Supported and Powered by Several Top Company
            </div>
          </div>
          <div className="company-wrap">
            <div className="company-single-wrap">
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b46e775149b5116bfa_Company%20Logo%2001.svg"
                loading="lazy"
                alt="Company Single Image"
                className="company-single-image"
              />
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b4d1c655638d6a36d1_Company%20Logo%2002.svg"
                loading="lazy"
                alt="Company Single Image"
                className="company-single-image"
              />
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b4a0736f00e42e8adb_Company%20Logo%2003.svg"
                loading="lazy"
                alt="Company Single Image"
                className="company-single-image"
              />
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b4c131588cbfc0df2b_Company%20Logo%2004.svg"
                loading="lazy"
                alt="Company Single Image"
                className="company-single-image"
              />
              <img
                src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6881a9b4b257e8b209ac12f0_Company%20Logo%2005.svg"
                loading="lazy"
                alt="Company Single Image"
                className="company-single-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
