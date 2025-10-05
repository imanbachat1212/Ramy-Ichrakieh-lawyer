import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
// If you use React Router, this auto-closes on route/hash change:
// import { useLocation } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // const location = useLocation();
  // useEffect(() => { closeMobileMenu(); }, [location.pathname, location.hash]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenu(openSubmenu === menuKey ? null : menuKey);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("mobile-menu-open", !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
    document.body.classList.remove("mobile-menu-open");
  };

  return (
    <>
      <div className="em40_header_area_main">
        {/* Top Header */}
        <div className="poket-header-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
                <div className="top-address text-left">
                  <p>
                    <a href="tel:+96103114402">
                      <i className="icofont-ui-call"></i>
                      {t("phone")}: +96103114402
                    </a>
                    <a href="mailto:demo@example.com">
                      <i className="icofont-envelope"></i>
                      {t("email")}: demo@example.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-lg-3 col-xl-3 col-md-3 col-sm-12">
                <div className="top-right-menu">
                  <ul className="social-icons text-right text_m_center">
                    <li>
                      <a href="https://www.facebook.com/ramy.ichrakie">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ichrakieh.law/#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ramy-ichrakieh-3657b315a/">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation (desktop) */}
        <div className="poket-main-menu one_page hidden-xs hidden-sm witr_h_h10">
          <div className="poket_nav_area scroll_fixed postfix">
            <div className="container">
              <div className="row logo-left">
                <div
                  style={{
                    paddingTop: "10px",
                    paddingLeft: isArabic ? "50px" : "0",
                  }}
                >
                  <div className="logo">
                    <HashLink
                      className="main_sticky_main_l"
                      to="/"
                      title="poket"
                    >
                      <img
                        src={require("../images/logo1.jpg")}
                        alt="Logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </HashLink>
                  </div>
                </div>

                <div
                  className="justify-content-between align-items-center"
                  dir={isArabic ? "rtl" : "ltr"}
                  style={{ textAlign: isArabic ? "right" : "left" }}
                >
                  <div className="tx_mmenu_together">
                    <nav className="poket_menu">
                      <ul className="sub-menu">
                        <li>
                          <HashLink smooth to="/">
                            {t("home")}
                          </HashLink>
                        </li>
                        <li>
                          <HashLink smooth to="/about">
                            {t("about1")}
                          </HashLink>
                        </li>
                        <li>
                          <HashLink smooth to="/#practice">
                            {t("practice")}
                          </HashLink>
                        </li>

                        <li className="menu-item-has-children">
                          <a
                            type="button"
                            onClick={() => toggleSubmenu("attorney")}
                          >
                            {t("attorney")}
                          </a>
                          {openSubmenu === "attorney" && (
                            <ul className="sub-menu">
                              <li>
                                <HashLink smooth to="/lowteam">
                                  {t("attorneySingle")}
                                </HashLink>
                              </li>
                            </ul>
                          )}
                        </li>

                        <li className="menu-item-has-children">
                          <a href="/blog" onClick={() => toggleSubmenu("blog")}>
                            {t("blog")}
                          </a>
                          {openSubmenu === "blog" && (
                            <ul className="sub-menu">
                              <li>
                                <HashLink smooth to="/low-blog.html">
                                  {t("NewsPage")}
                                </HashLink>
                              </li>
                            </ul>
                          )}
                        </li>

                        <li className="menu-item-has-children">
                          <a
                            type="button"
                            onClick={() => toggleSubmenu("library")}
                          >
                            {t("library")}
                          </a>
                          {openSubmenu === "library" && (
                            <ul className="sub-menu">
                              <li>
                                <HashLink smooth to="/LBLibrary">
                                  {t("libraryLebanese")}
                                </HashLink>
                              </li>
                              <li>
                                <HashLink smooth to="/UAELibrary">
                                  {t("libraryUAE")}
                                </HashLink>
                              </li>
                            </ul>
                          )}
                        </li>

                        <li>
                          <HashLink smooth to="/#contact">
                            {t("contact")}
                          </HashLink>
                        </li>
                      </ul>
                    </nav>

                    <div className="main-search-menu">
                      <button
                        onClick={toggleLanguage}
                        className="lang-switcher-btn"
                      >
                        {i18n.language === "en" ? (
                          <>
                            <img
                              src={require("../images/lebanin.png")}
                              alt="Lebanon Flag"
                              style={{ width: "16px", height: "11px" }}
                            />
                            <span style={{ marginLeft: "5px" }}>AR</span>
                          </>
                        ) : (
                          <>
                            <img
                              src={require("../images/usa.png")}
                              alt="USA Flag"
                              style={{ width: "16px", height: "11px" }}
                            />
                            <span style={{ marginLeft: "5px" }}>EN</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="donate-btn-header">
                      <a className="dtbtn" href="tel:+96103114402">
                        {t("consultation")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Mode */}
      <div className="mobile_logo_area hidden-md hidden-lg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="mobile_menu_logo">
                <HashLink to="/" title="poket" onClick={closeMobileMenu}>
                  <img
                    src={require("../images/logo1.jpg")}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </HashLink>
              </div>
              <button
                className="mobile-menu-toggle d-block d-lg-none"
                onClick={toggleMobileMenu}
              >
                <i
                  className={`icofont-${
                    isMobileMenuOpen ? "close" : "navigation-menu"
                  }`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Off-Canvas Mobile Menu */}
        <div
          className={`mobile-offcanvas${isMobileMenuOpen ? " open" : ""}`}
          dir={isArabic ? "rtl" : "ltr"}
          style={{ textAlign: isArabic ? "right" : "left" }}
        >
          <nav className="mobile-offcanvas-nav">
            <ul className="mobile-menu">
              <li>
                <HashLink smooth to="/" onClick={closeMobileMenu}>
                  {t("home")}
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/about" onClick={closeMobileMenu}>
                  {t("about1")}
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#practice" onClick={closeMobileMenu}>
                  {t("practice")}
                </HashLink>
              </li>

              <li className="has-submenu">
                <a href="#" onClick={() => toggleSubmenu("attorney")}>
                  {t("attorney")}
                </a>
                <span className="submenu-icon">&#9662;</span>
                {openSubmenu === "attorney" && (
                  <ul className="submenu">
                    <li>
                      <HashLink smooth to="/lowteam" onClick={closeMobileMenu}>
                        {t("attorneySingle")}
                      </HashLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="has-submenu">
                <a href="#" onClick={() => toggleSubmenu("blog")}>
                  {t("blog")}
                </a>
                <span className="submenu-icon">&#9662;</span>
                {openSubmenu === "blog" && (
                  <ul className="submenu">
                    <li>
                      <HashLink
                        smooth
                        to="/low-blog.html"
                        onClick={closeMobileMenu}
                      >
                        {t("NewsPage")}
                      </HashLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="has-submenu">
                <a href="#" onClick={() => toggleSubmenu("library")}>
                  {t("library")}
                </a>
                <span className="submenu-icon">&#9662;</span>
                {openSubmenu === "library" && (
                  <ul className="submenu">
                    <li>
                      <HashLink
                        smooth
                        to="/LBLibrary"
                        onClick={closeMobileMenu}
                      >
                        {t("libraryLebanese")}
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="/UAELibrary"
                        onClick={closeMobileMenu}
                      >
                        {t("libraryUAE")}
                      </HashLink>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <HashLink smooth to="/#contact" onClick={closeMobileMenu}>
                  {t("contact")}
                </HashLink>
              </li>
            </ul>

            <div className="main-search-menu">
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMobileMenu();
                }}
                className="lang-switcher-btn"
              >
                {i18n.language === "en" ? (
                  <>
                    <img
                      src={require("../images/lebanin.png")}
                      alt="Lebanon Flag"
                      style={{ width: "16px", height: "11px" }}
                    />
                    <span style={{ marginLeft: "5px" }}>AR</span>
                  </>
                ) : (
                  <>
                    <img
                      src={require("../images/usa.png")}
                      alt="USA Flag"
                      style={{ width: "16px", height: "11px" }}
                    />
                    <span style={{ marginLeft: "5px" }}>EN</span>
                  </>
                )}
              </button>
            </div>

            <div className="mobile-footer">
              <a
                className="subscribe-btn"
                href="tel:+96103114402"
                onClick={closeMobileMenu}
              >
                {t("consultation")}
              </a>
            </div>
          </nav>
        </div>

        {/* Optional backdrop to close on outside click */}
        {isMobileMenuOpen && (
          <div
            className="mobile-offcanvas-backdrop"
            onClick={closeMobileMenu}
          />
        )}
      </div>
    </>
  );
}

export default Header;
