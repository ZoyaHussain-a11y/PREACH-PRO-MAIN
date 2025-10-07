'use client';
import "@/styles/globals.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <footer className="footer">
      <div className="w-layout-blockcontainer container">
        <div className="footer-main">
          <div className="footer-brand" data-aos="fade-up">
            <div className="footer-logo">Preach Pro</div>
            <p className="footer-description">
              Empowering ministries with intelligent tools for sermon writing, organization, and leadership growth.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
              <h3 className="footer-column-title">Platform</h3>
              <div className="footer-links">
                <a href="/" className="footer-link">Home</a>
                <a href="/features" className="footer-link">Features</a>
                <a href="/pricing" className="footer-link">Pricing</a>
                <a href="/faq" className="footer-link">FAQ</a>
                <a href="/contact" className="footer-link">Contact</a>
              </div>
            </div>

            <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
              <h3 className="footer-column-title">Resources</h3>
              <div className="footer-links">
                <a href="/terms" className="footer-link">Terms of Service</a>
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/docs" className="footer-link">Documentation</a>
                <a href="/support" className="footer-link">Support</a>
              </div>
            </div>

            <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
              <h3 className="footer-column-title">Company</h3>
              <div className="footer-links">
                <a href="/about" className="footer-link">About</a>
                <a href="/blog" className="footer-link">Blog</a>
                <a href="/careers" className="footer-link">Careers</a>
                <a href="/partners" className="footer-link">Partners</a>
              </div>
            </div>

            <div className="footer-column" data-aos="fade-up" data-aos-delay="400">
              <div className="footer-newsletter">
                <div className="newsletter-label">Stay updated</div>
                <h3 className="footer-column-title">Join our Ministry Network</h3>
                <button className="newsletter-button">Join Waitlist</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom" data-aos="fade-up" data-aos-delay="500">
          <div className="footer-copyright">
            <div>© 2025 Preach Pro. All rights reserved.</div>
            <div>Powered by Next.js and Supabase</div>
          </div>
        </div>
      </div>
    </footer>
  );
}