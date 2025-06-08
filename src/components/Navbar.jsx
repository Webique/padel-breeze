import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/logo1.jpeg"
            alt="Padel Breeze Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop & Mobile Top Row */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link to="/about" className="text-gray-700 hover:text-black transition">
              {t("nav.about")}
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-black transition">
              {t("nav.pricing")}
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-black transition">
              {t("nav.gallery")}
            </Link>
          </div>

          {/* Language Toggle (always visible) */}
          <button
            onClick={toggleLanguage}
            className="text-sm border px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            {isArabic ? "English 🇬🇧" : "العربية 🇸🇦"}
          </button>

          {/* Hamburger */}
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-2"
            aria-label="Toggle Menu"
          >
            <span className="text-3xl text-gray-700">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-lg px-4 py-4 space-y-2 transition-all duration-300"
        >
          <Link to="/about" className="block text-gray-700 hover:text-black transition">
            {t("nav.about")}
          </Link>
          <Link to="/pricing" className="block text-gray-700 hover:text-black transition">
            {t("nav.pricing")}
          </Link>
          <Link to="/gallery" className="block text-gray-700 hover:text-black transition">
            {t("nav.gallery")}
          </Link>
        </div>
      )}
    </nav>
  );
}
