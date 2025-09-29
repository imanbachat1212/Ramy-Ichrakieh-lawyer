import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

function Header() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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

        {/* Main Navigation */}
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
                    <a className="main_sticky_main_l" href="/" title="poket">
                      <img
                        src={require("../images/logo1.jpg")}
                        alt="Logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </a>
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
                          <a href="/">{t("home")}</a>
                        </li>
                        <li>
                          <a href="/about">{t("about1")}</a>
                        </li>
                        <li>
                          <HashLink smooth to="/#practice">
                            {t("practice")}
                          </HashLink>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">{t("attorney")}</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="lowteam">{t("attorneySingle")}</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">{t("blog")}</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="low-blog.html">{t("NewsPage")}</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">{t("library")}</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="/LBLibrary">{t("libraryLebanese")}</a>
                            </li>
                            <li>
                              <a href="/UAELibrary">{t("libraryUAE")}</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <HashLink smooth to="/Contact">
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
                      <a className="dtbtn" href="#">
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
                <a href="/" title="poket">
                  <img
                    src={require("../images/logo1.jpg")}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
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
                <a href="/">{t("home")}</a>
              </li>
              <li>
                <a href="/about">{t("about1")}</a>
              </li>
              <li>
                <HashLink smooth to="/#practice">
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
                      <a href="low-single-project.html">
                        {t("attorneySingle")}
                      </a>
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
                      <a href="low-single-project.html">{t("NewsPage")}</a>
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
                      <a href="low-blog.html">{t("libraryLebanese")}</a>
                    </li>
                    <li>
                      <a href="low-blog.html">{t("libraryUAE")}</a>
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
            <div className="main-search-menu">
              <button onClick={toggleLanguage} className="lang-switcher-btn">
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
              <a className="subscribe-btn" href="#">
                {t("consultation")}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
