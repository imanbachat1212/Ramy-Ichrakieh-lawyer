import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <>
      <div
        className="contact-section"
        dir={isArabic ? "rtl" : "ltr"}
        id="contact"
      >
        <div className="container">
          <h2
            className="contact-title text-center"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            {t("contactSection.title")}
          </h2>
          <h2
            className="contact-title text-center contact-subtitle"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {t("contactSection.subtitle")}
          </h2>

          <div className="contact-wrapper row">
            {/* Contact Form */}
            <div className="col-lg-6 form-container">
              <form
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <h5
                  dir={isArabic ? "rtl" : "ltr"}
                  style={{
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {t("contactSection.subtitle2")}
                </h5>
                <input type="text" placeholder={t("contactSection.name")} />
                <input type="text" placeholder={t("contactSection.phone")} />
                <input type="email" placeholder={t("contactSection.email")} />
                <textarea placeholder={t("contactSection.message")}></textarea>
                <button type="submit">{t("contactSection.send")}</button>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div
              className="col-lg-6 info-map"
              dir={isArabic ? "rtl" : "ltr"}
              style={{
                textAlign: isArabic ? "right" : "left",
              }}
              data-aos="fade-right"
            >
              <div className="info-box">
                <h5>{t("contactSection.infoTitle")}</h5>

                <p>
                  <i
                    className="icofont-phone"
                    dir={isArabic ? "rtl" : "ltr"}
                    style={{
                      textAlign: isArabic ? "right" : "left",
                    }}
                  ></i>{" "}
                  {t("contactSection.phoneNumber")}
                </p>
                <p>
                  <i
                    className="icofont-email"
                    dir={isArabic ? "rtl" : "ltr"}
                    style={{
                      textAlign: isArabic ? "right" : "left",
                    }}
                  ></i>
                  info@alramilawfirm.com
                </p>
              </div>
              <div
                className="office-locations mt-4"
                dir={isArabic ? "rtl" : "ltr"}
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <h4
                  style={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#d0bf90",
                  }}
                >
                  {t("contactSection.locations.title")}
                </h4>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    {t("contactSection.locations.lebanon")}
                  </li>
                  <li>{t("contactSection.locations.uae")}</li>
                </ul>
              </div>
              <div
                className="working-hours-box mt-3 p-3 rounded"
                style={{
                  color: "#fff",
                  borderRadius: "8px",
                  lineHeight: "1.8",
                }}
              >
                <h5 style={{ color: "#d0bf90", marginBottom: "0.5rem" }}>
                  {t("footer.workingHours")}
                </h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>{t("footer.mondayFriday")}</li>
                  <li>{t("footer.saturday")}</li>
                  <li>{t("footer.sunday")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact map area  */}
      <div className="low_site_map_area contact_map_area">
        <div className="container-fluid witr_all_pd0">
          <div className="row">
            <div className="col-lg-12">
              <div className="map_area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d105304.73719676417!2d35.7522296380439!3d34.432519766114936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1521f761d502f5f9%3A0x8b878d24f8fbc622!2sTripoli!3m2!1d34.4325474!2d35.8346308!5e0!3m2!1sen!2slb!4v1744192326359!5m2!1sen!2slb"
                  title="Lebanon Tripoli"
                  aria-label="Lebanon, Tripoli"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
