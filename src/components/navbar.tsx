"use client";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="w-layout-blockcontainer container">
        <div className="navbar-wrapper">
          <a href="/" className="brand-logo">
            <div className="brand-text">PreachPro.</div>
          </a>

          <nav className="nav-menu" aria-label="Main navigation">
            <div className="nav-menu-wrap">
              <a 
                href="/" 
                className={`nav-menu-link ${pathname === "/" ? "w--current" : ""}`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </a>
              <a 
                href="/about" 
                className={`nav-menu-link ${pathname === "/about" ? "w--current" : ""}`}
                aria-current={pathname === "/about" ? "page" : undefined}
              >
                About
              </a>
              <a 
                href="/features" 
                className={`nav-menu-link ${pathname === "/features" ? "w--current" : ""}`}
                aria-current={pathname === "/features" ? "page" : undefined}
              >
                Features
              </a>
              <a 
                href="/pricing" 
                className={`nav-menu-link ${pathname === "/pricing" ? "w--current" : ""}`}
                aria-current={pathname === "/pricing" ? "page" : undefined}
              >
                Pricing
              </a>
            </div>
          </nav>

          <div className="nav-btn-wrap">
            <a href="/user-pages/sing-up" className="gray-button desktop-on">
              <div className="gray-btn-wrap">
                <div className="text-icon-wrap">
                  <div className="gray-btn-text">Get Access</div>
                </div>
              </div>
            </a>

            <div className="menu-button">
              <div className="hamburger">☰</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}