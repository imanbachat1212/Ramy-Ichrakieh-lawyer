import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const timelineData = t("timeline", { returnObjects: true });

  return (
    <>
      <div className="breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 txtc  text-center ccase">
              <div className="brpt">
                <h2>{t("about.heroTitle")} </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="witr_section_title">
          <div className="witr_section_title_inner text-center">
            <h2>{t("about.title")}</h2>
            <h3>{t("about.subtitle")}</h3>
            <p>{t("about.description")}</p>
          </div>
        </div>
      </div>

      <div className="timeline-container" dir={isArabic ? "rtl" : "ltr"}>
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-dot"></div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-desc">{item.description}</div>
          </div>
        ))}
      </div>
      <div
        className="about-extra-wrapper container"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="about-extra-card text-center">
          <div className="extra-icon-wrapper">
            <div className="extra-icon">
              <i className="icofont-eye"></i>
            </div>
          </div>
          <div className="extra-text">
            <h5 className="extra-title">{t("about.vision")}</h5>
            <p className="extra-desc">{t("about.visionDesc")}</p>
          </div>
        </div>
        <div className="about-extra-card text-center">
          <div className="extra-icon-wrapper">
            <div className="extra-icon">
              <i className="ti-bookmark"></i>
            </div>
          </div>
          <div className="extra-text">
            <h5 className="extra-title">{t("about.mission")}</h5>
            <p className="extra-desc">{t("about.missionDesc")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
