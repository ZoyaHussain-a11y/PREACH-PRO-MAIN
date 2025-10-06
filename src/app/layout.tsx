// layout.tsx (server component)
import "@/styles/globals.css";
import React from "react";

export const metadata = {
  title: "About - Webflow Ecommerce website template",
  description:
    "Build smarter with an AI-powered code editor designed to speed up development, enhance accuracy, and supercharge your workflow.",
  openGraph: {
    title: "About - Webflow Ecommerce website template",
    description:
      "Build smarter with an AI-powered code editor designed to speed up development, enhance accuracy, and supercharge your workflow.",
    images: [
      "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/688b53309af5b75944e91fa4_Social-Share.webp",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Webflow Ecommerce website template",
    description:
      "Build smarter with an AI-powered code editor designed to speed up development, enhance accuracy, and supercharge your workflow.",
    images: [
      "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/688b53309af5b75944e91fa4_Social-Share.webp",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/css/rizar.webflow.shared.a9378edc4.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/688729c4dddd13f989cf637c_Fav%20(1).svg"
          rel="shortcut icon"
          type="image/x-icon"
        />
      </head>
      <body>
        <div className="pages-wrapper">{children}</div>
      </body>
    </html>
  );
}
