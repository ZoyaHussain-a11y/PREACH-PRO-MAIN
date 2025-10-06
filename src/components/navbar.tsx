"use client";
import "@/styles/globals.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="w-layout-blockcontainer container">
        <div className="navbar-wrapper">
          <a href="/" aria-current="page" className="brand-logo w--current">
            <div className="brand-text">PreachPro.</div>
          </a>

          <nav className="nav-menu" aria-label="Main navigation">
            <div className="nav-menu-wrap">
              <a href="/" aria-current="page" className="nav-menu-link w--current">
                Home
              </a>
              <a href="/about" className="nav-menu-link">About</a>
              <a href="/features" className="nav-menu-link">Features</a>
              <a href="/pricing" className="nav-menu-link">Pricing</a>
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