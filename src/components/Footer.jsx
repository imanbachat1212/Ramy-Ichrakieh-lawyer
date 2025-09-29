import React from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <>
      <div className="footer_top_area newsletter_top_area">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-8">
              <p className="mb-4">{t("footer.newsletterText")}</p>
              <form
                className="d-flex justify-content-center news"
                onSubmit={(e) => {
                  e.preventDefault();
                  // handle submit logic here
                }}
              >
                <h4>{t("footer.newsletterTitle")}</h4>

                <input
                  type="email"
                  className="form-control me-2"
                  placeholder={t("footer.enterEmail")}
                  required
                  style={{ maxWidth: "300px" }}
                />
                <a type="submit" className="poket_button ">
                  {t("footer.subscribe")}
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /* FOOTER MIDDLE AREA */}
      <div
        className="footer-middle"
        dir={isArabic ? "rtl" : "ltr"}
        style={{
          textAlign: isArabic ? "right" : "left",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6  col-lg-3">
              <div
                id="twr_description_widget-3"
                className="widget widget_twr_description_widget"
              >
                <div className="poket-description-area">
                  <img
                    src={require("../images/logo-footer.png")}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                  <p>{t("footer.about")}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6  col-lg-2">
              <div className="widget widget_nav_menu">
                <h2 className="widget-title">{t("footer.usefulLinks")}</h2>
                <div className="menu-useful-links-container">
                  <ul className="menu">
                    <li>
                      <a href="/about">{t("footer.aboutUs")}</a>
                    </li>
                    <li>
                      <HashLink smooth to="/#services-section">
                        {t("footer.services")}
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#team">
                        {t("footer.team")}
                      </HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6  col-lg-3">
              <div className="widget widget_nav_menu">
                <h2 className="widget-title">{t("footer.workingHours")}</h2>

                <div className="menu-useful-links-container">
                  <ul className="menu">
                    <li>{t("footer.mondayFriday")}</li>
                    <li>{t("footer.saturday")}</li>
                    <li>{t("footer.sunday")}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-2"
              style={{ marginRight: "30px" }}
            >
              <div className="widget widget_nav_menu">
                <h2 className="widget-title">
                  {t("contactSection.locations.title")}
                </h2>
                <div className="menu-useful-links-container">
                  <ul className="menu">
                    <li>{t("contactSection.locations.lebanon")}</li>
                    <li>{t("contactSection.locations.uae")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="twr_description_widget-3"
              className="widget widget_twr_description_widget"
            >
              <div className="poket-description-area">
                <h2 className="widget-title">{t("footer.getInTouch")}</h2>
                <HashLink smooth to="/#contact" style={{ color: "white" }}>
                  {t("footer.consulting")}
                </HashLink>

                <div className="social-icons">
                  <a
                    className="facebook"
                    href="https://www.facebook.com/ramy.ichrakie"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/ichrakieh.law/#"
                  >
                    <i className="icofont-instagram"></i>
                  </a>
                  <a
                    className="twitter"
                    href="https://www.linkedin.com/in/ramy-ichrakieh-3657b315a/"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </div>
                <div className="row">.....</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* END FOOTER MIDDLE AREA  */}
      {/* FOOTER BOTTOM AREA  */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6  col-sm-12">
              <div className="copy-right-text">
                <p> &copy; {t("footer.copyright")}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  col-sm-12">
              <div className="footer-menu text-right">
                <a
                  href="https://imanportfolio.netlify.app/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isArabic ? "flex-end" : "flex-end",
                    gap: "10px",
                    color: "white",
                  }}
                >
                  <i className="icofont-code-alt"></i>
                  {t("footer.developedBy")}
                  <img
                    src={require("../images/signature.png")}
                    alt="Iman Bachat"
                    style={{
                      width: "20%",
                      marginLeft: isArabic ? "0" : "-35px",
                      marginRight: isArabic ? "-35px" : "0",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
