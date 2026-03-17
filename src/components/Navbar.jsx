"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.35) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Services", href: "#services" },
    { label: "Certification", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-menu {
          animation: slideDown 0.25s cubic-bezier(0.33,1,0.68,1) both;
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .open .line1 { transform: translateY(7px) rotate(45deg); }
        .open .line2 { opacity: 0; }
        .open .line3 { transform: translateY(-7px) rotate(-45deg); }
      `}</style>

      <nav
        className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-xl
        ${
          scrolled
            ? "bg-gray-200/60 text-gray-900"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/BIS LOGO AGPL website.png"
              alt="AGPL Astron Glass Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="hover:text-red-600 transition duration-300"
              >
                {label}
              </a>
            ))}

            <a
              href="/Aston_Glass_Profile.pdf"
              download="Aston_Glass_Brochure.pdf"
              className="hover:text-red-600 transition duration-300"
            >
              Download Brochure
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-red-600/30 hover:shadow-red-700/50 transform hover:-translate-y-0.5"
          >
            Get a Quote
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-white/20 transition-colors ${menuOpen ? "open" : ""}`}
          >
            <span className="hamburger-line line1" />
            <span className="hamburger-line line2" />
            <span className="hamburger-line line3" />
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu md:hidden bg-white backdrop-blur-md border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-3 rounded-lg font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  {label}
                </a>
              ))}

              <a
                href="/Aston_Glass_Profile.pdf"
                download="Aston_Glass_Brochure.pdf"
                onClick={() => setMenuOpen(false)}
                className="py-3 px-3 rounded-lg font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
              >
                Download Brochure
              </a>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md shadow-red-600/30"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}