import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import maktabImage from "../images/maktab.jpg";
import CountUp from "react-countup";

import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import { useTranslation } from "react-i18next";
// Dynamically import all images from the brands folder
const importAll = (r) => r.keys().map(r);
const brandImages = importAll(
  require.context("../images/brands", false, /\.(png|jpe?g|svg)$/)
);

const services = [
  { id: "criminalCases", icon: "icofont-handcuff" },
  { id: "civilCases", icon: " icofont-law-scales" },
  { id: "realEstateCases", icon: "icofont-building-alt" },
  { id: "familyCases", icon: "icofont-holding-hands" },
  { id: "militaryCases", icon: "icofont-cop-badge" },
  { id: "commercialCases", icon: "icofont-law-document" },
  { id: "bankruptcyCases", icon: "flaticon-money-2" },
  { id: "laborCases", icon: "flaticon-team" },
  { id: "arbitration", icon: "icofont-law" },
  { id: "contractDrafting", icon: "flaticon-contract" },
  { id: "legalConsulting", icon: "icofont-legal" },
  { id: "debtRecovery", icon: "flaticon-money" },
  { id: "ipProtection", icon: "flaticon-shield" },
  { id: "companyFormation", icon: "flaticon-connection" },
  { id: "associationFormation", icon: "icofont-group" },
  { id: "unionFormation", icon: "flaticon-care" },
  { id: "educationServices", icon: "flaticon-book" },
  { id: "pharmacyServices", icon: "icofont-medical-sign-alt" },
  { id: "courtRepresentation", icon: "icofont-lawyer-alt-1" },
];

function Low() {
  const [activeTab, setActiveTab] = useState("criminalCases");

  const { i18n, t } = useTranslation();
  const slides = t("hero_slides", { returnObjects: true });
  const isArabic = i18n.language === "ar";
  const [heroSlides, setHeroSlides] = useState(
    () => t("hero_slides", { returnObjects: true }) || []
  );

  useEffect(() => {
    setHeroSlides(t("hero_slides", { returnObjects: true }) || []);
  }, [i18n.language, t]);
  return (
    <>
      <div className="witr_swiper_area">
        <div className="swiper-container witr_active_id5">
          <div className="swiper-wrapper">
            {/* /* single slider */}
            <div
              className="swiper-slide d1 t1 m1 witr_swiper_height"
              style={{ backgroundImage: `url(${maktabImage})` }}
            >
              <div className="hero-wrapper">
                <Swiper
                  key={`hero-${i18n.language}`}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                >
                  {slides.map((text, index) => (
                    <SwiperSlide key={index}>
                      <h2 dangerouslySetInnerHTML={{ __html: text }} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slider_btn">
                  <div className="witr_btn_style">
                    <div className="witr_btn_sinner">
                      <a className="witr_btn" href="tel:+96103114402">
                        <i
                          className="flaticon-phone"
                          id="phone"
                          data-aos="zoom-out-up"
                          data-aos-once="false"
                        ></i>
                        {t("contact2")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="low_service_area">
        <div className="container">
          <div className="row service_inner">
            {/* /* single service  */}
            <div className="col-lg-4 col-md-6">
              <div className="em-service2 sleft all_color_service">
                <div className="em_service_content ">
                  <div className="em_single_service_text width_height_link_0 ">
                    <div className="service_top_image"></div>
                    <div
                      className="text_box witr_s_flex"
                      dir={isArabic ? "rtl" : "ltr"}
                      style={{
                        textAlign: isArabic ? "right" : "left",
                      }}
                    >
                      <div className="service_top_text all_icon_color">
                        <div className="em-service-icon">
                          {" "}
                          <i className="flaticon flaticon-pen"></i>
                        </div>
                      </div>
                      <div
                        className="em-service-inner"
                        style={{ paddingRight: isArabic ? "20px" : "0" }}
                      >
                        <div className="em-service-title">
                          <h3>{t("expert_attorneys")}</h3>
                        </div>
                        <div className="em-service-desc">
                          <p>{t("expert_attorneys_desc")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /* 02 single service  */}
            <div className="col-lg-4 col-md-6 service2_bg_color">
              <div className="em-service2 sleft all_color_service ">
                <div className="em_service_content ">
                  <div className="em_single_service_text">
                    <div className="service_top_image"></div>
                    <div
                      className="text_box witr_s_flex"
                      dir={isArabic ? "rtl" : "ltr"}
                      style={{
                        textAlign: isArabic ? "right" : "left",
                      }}
                    >
                      <div className="service_top_text all_icon_color">
                        <div className="em-service-icon">
                          {" "}
                          <i className="flaticon flaticon-project-management"></i>
                        </div>
                      </div>
                      <div
                        className="em-service-inner"
                        style={{ paddingRight: isArabic ? "20px" : "0" }}
                      >
                        <div className="em-service-title">
                          <h3>{t("case_dismissed")}</h3>
                        </div>
                        <div className="em-service-desc">
                          <p> {t("case_dismissed_desc")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /* 03 single service  */}
            <div className="col-lg-4 col-md-6">
              <div className="em-service2 sleft all_color_service">
                <div className="em_service_content ">
                  <div className="em_single_service_text width_height_link_0 ">
                    <div className="service_top_image"></div>
                    <div
                      className="text_box witr_s_flex"
                      dir={isArabic ? "rtl" : "ltr"}
                      style={{
                        textAlign: isArabic ? "right" : "left",
                      }}
                    >
                      <div className="service_top_text all_icon_color">
                        <div className="em-service-icon">
                          {" "}
                          <i className="flaticon flaticon-temporary-agency"></i>
                        </div>
                      </div>
                      <div
                        className="em-service-inner"
                        style={{ paddingRight: isArabic ? "20px" : "0" }}
                      >
                        <div className="em-service-title">
                          <h3>{t("performance")}</h3>
                        </div>
                        <div className="em-service-desc">
                          <p> {t("performance_desc")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /* about area  */}
      <div className="low_about_area">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="low_about_image_inner">
                <div className="single_image_area">
                  <div
                    className="single_image single_line_option  "
                    data-aos="flip-left"
                  >
                    <img src={require("../images/profile.jpg")} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className=" about_content_inner">
                <div className="witr_section_title">
                  <div
                    className="witr_section_title_inner"
                    dir={isArabic ? "rtl" : "ltr"}
                    style={{ textAlign: isArabic ? "right" : "left" }}
                  >
                    <h2 data-aos="fade-down" data-aos-delay="0">
                      {t("about_section.heading")}
                    </h2>
                    <h3 data-aos="fade-right" data-aos-delay="200">
                      {t("about_section.subheading")}
                    </h3>
                    <p data-aos="fade-right" data-aos-delay="400">
                      {t("about_section.description")}
                    </p>
                  </div>
                </div>
                <div className="em-service2 sleft all_color_service">
                  <div className="em_service_content ">
                    <div className="em_single_service_text width_height_link_0 ">
                      <div className="service_top_image"></div>
                      <div className="text_box witr_s_flex">
                        <div className="service_top_text all_icon_color">
                          <div className="em-service-icon">
                            {" "}
                            <i className="fas fa-quote-left"></i>
                          </div>
                        </div>
                        <div className="em-service-inner">
                          <div className="em-service-title"></div>
                          <div
                            className="em-service-desc"
                            dir={isArabic ? "rtl" : "ltr"}
                            style={{ textAlign: isArabic ? "right" : "left" }}
                          >
                            <p data-aos="fade-right" data-aos-delay="600">
                              <em>{t("about_section.quote")}</em>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  dir={isArabic ? "rtl" : "ltr"}
                  style={{ textAlign: isArabic ? "right" : "left" }}
                >
                  <p data-aos="fade-right" data-aos-delay="800">
                    {t("about_section.paragraph")}
                  </p>
                </div>
                <div className="about_bottom_img_inner">
                  <div className="single_image_area">
                    <div className="single_image single_line_option  ">
                      <div className="witr_button_area">
                        <div className="witr_btn_style mr">
                          <div className="witr_btn_sinner">
                            {" "}
                            <a
                              href="/about"
                              className="witr_btn"
                              id="about-btn"
                              style={{
                                marginTop: "-50px",
                                marginRight: "-100px",
                              }}
                              data-aos="fade-up"
                              data-aos-delay="1000"
                            >
                              {t("about_section.readmore")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* low Services */}
      <div className="services-section py-5" id="services-section  ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div
                  className="witr_section_title_inner text-center"
                  id="practice"
                >
                  <h2 data-aos="fade-up" data-aos-delay="0">
                    {" "}
                    {t(`services.title`)}
                  </h2>
                  <h3 data-aos="fade-up" data-aos-delay="200">
                    {t(`services.subtitle`)}
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row justify-content-center">
                {services.map((service, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 mb-4 text-center"
                    key={index}
                  >
                    <button
                      className={`custom-service-box ${
                        activeTab === service.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(service.id)}
                      data-aos="fade-right"
                      data-aos-delay="0"
                    >
                      <div className="service-icon mb-2">
                        <i className={` ${service.icon}`}></i>
                      </div>
                      <div className="service-label">
                        {t(`services.tabs.${service.id}`)}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /* low team area  */}
      <div className="low_team_area" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2 data-aos="fade-down" data-aos-delay="0">
                    {t("team.title")}
                  </h2>
                  <h3 data-aos="fade-right" data-aos-delay="200">
                    {t("team.subtitle")}
                  </h3>
                </div>
              </div>
              <div
                className="witr_team_area_c post_team10_area post_team11_area"
                id="TEAM"
              >
                <div className="row team_active">
                  {/* Member 1 */}
                  <div
                    className="witr_all_mb_30 col-md-4 col-sm-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="team-part all_color_team">
                      <div className="witr_team_section">
                        <img src={require("../images/team2.jpg")} alt="" />
                        <div className="team_o_icons all_team_icon_o_color">
                          <ul className="witr_pots_team_s">
                            <li>
                              <a href="#">
                                <i className="icofont-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icofont-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icofont-pinterest"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="witr_team_content post_team_p11 all_content_bg_color text-center">
                          <h5>
                            <a href="#">{t("team.members.rami.name")}</a>
                          </h5>
                          <span>{t("team.members.rami.role")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member 2 */}
                  <div
                    className="witr_all_mb_30 col-md-4 col-sm-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="team-part all_color_team">
                      <div className="witr_team_section">
                        <img src={require("../images/ghinwa.jpg")} alt="" />
                        <div className="team_o_icons all_team_icon_o_color">
                          <ul className="witr_pots_team_s">
                            <li>
                              <a href="#">
                                <i className="icofont-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icofont-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icofont-pinterest"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="witr_team_content post_team_p11 all_content_bg_color text-center">
                          <h5>
                            <a href="#">{t("team.members.ghinwa.name")}</a>
                          </h5>
                          <span>{t("team.members.ghinwa.role")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member 3 */}
                  <div
                    className="witr_all_mb_30 col-md-4 col-sm-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="team-part all_color_team">
                      <div className="witr_team_section">
                        <img src={require("../images/team3.jpg")} alt="" />
                        <div className="team_o_icons all_team_icon_o_color">
                          <ul className="witr_pots_team_s">
                            <li>
                              <a href="#">
                                <i className="icofont-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icofont-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icofont-pinterest"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="witr_team_content post_team_p11 all_content_bg_color text-center">
                          <h5>
                            <a href="#">{t("team.members.tomas.name")}</a>
                          </h5>
                          <span>{t("team.members.tomas.role")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /* call action area  */}
      <div
        className="call_action_area"
        data-aos="fade-up-right"
        data-aos-delay="200"
      >
        <div className="container">
          <div className="row call_inner align-items-center">
            {/* Icon Section */}
            <div className="col-12 col-md-2 text-center mb-3 mb-md-0">
              <img
                src={require("../images/icon-1.png")}
                alt="support"
                className="img-fluid"
                style={{ maxWidth: "80px" }}
              />
            </div>

            {/* Text + Button Section */}
            <div className="col-12 col-md-10 witr_all_pd0 text-center text-md-start">
              <div className="all_cal_color">
                <div className="cal_to_toggole d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div
                    className="poket_content col_content_width_100"
                    dir={isArabic ? "rtl" : "ltr"}
                    style={{
                      textAlign: isArabic ? "right" : "left",
                      paddingTop: "10px",
                    }}
                  >
                    <h2 className="mb-2 mb-md-0">{t("callSection.title")}</h2>
                  </div>
                  <div className="poket_button no_margin">
                    <a className="btn btn-dark rounded-pill px-4 py-2" href="#">
                      {t("callSection.cta")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /* low testimonial area  */}
      <div className="low_testimonial_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-left">
                  <h2
                    dir={isArabic ? "rtl" : "ltr"}
                    style={{
                      textAlign: isArabic ? "right" : "left",
                    }}
                    data-aos="fade-left"
                    data-aos-delay="0"
                  >
                    {t("testimonial.title")}
                  </h2>
                  <h3 data-aos="fade-left" data-aos-delay="200">
                    {t("testimonial.subtitle")}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="testimonial_active ">
                {/* /* single testimonial  */}
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  navigation
                  autoplay={{ delay: 2000 }}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1, // 👈 On mobile
                    },
                    768: {
                      slidesPerView: 2, // 👈 On tablets and above
                    },
                  }}
                >
                  <SwiperSlide>
                    {/* Testimonial 1 */}
                    <div className="witr_testi_itemt testi-width all_color_testimonial guttergs">
                      <div className="em_single_testimonial witr_testi_s_9">
                        <div className="test-part mt-50 ">
                          <ul>
                            <li>
                              <div className="execllent_toggol">
                                <div className="em_crating">
                                  <i className="icofont-star active"></i>
                                  <i className="icofont-star active"></i>
                                  <i className="icofont-star active"></i>
                                  <i className="icofont-star active"></i>
                                  <i className="icofont-star active"></i>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="em_testi_content">
                          <div className="em_testi_text">
                            <p>
                              Following best practices and pro edu izations in
                              the industry, our cles disinf a reader will be
                              distracted discretion admiration in particular.
                            </p>
                          </div>
                        </div>
                        <div className="em_test_thumb">
                          <img src={require("../images/test1.png")} alt="" />
                        </div>
                        <div className="em_testi_title">
                          <h2>
                            Nihidan Alex <span>UX Designer</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    {/* /* 02 single testimonial  */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="witr_testi_itemt testi-width all_color_testimonial guttergs">
                        <div className="em_single_testimonial witr_testi_s_9">
                          <div className="test-part mt-50 ">
                            <ul>
                              <li>
                                <div className="execllent_toggol">
                                  <div className="em_crating">
                                    <i className="icofont-star active"></i>{" "}
                                    <i className="icofont-star active"></i>{" "}
                                    <i className="icofont-star active"></i>{" "}
                                    <i className="icofont-star active"></i>{" "}
                                    <i className="icofont-star active"></i>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="em_testi_content">
                            <div className="em_testi_text">
                              <p>
                                Following best practices and pro edu izations in
                                the industry, our cles disinf a reader will be
                                distracted discretion admiration in particular.
                              </p>
                            </div>
                          </div>
                          <div className="em_test_thumb">
                            <img src={require("../images/test2.png")} alt="" />
                          </div>
                          <div className="em_testi_title">
                            <h2>
                              Poral Dawson <span>Diroctore</span>
                            </h2>
                          </div>
                          <div className="em_testi_logo">
                            <div className="em_testilogo_inner"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    {/* /* 03 single testimonial  */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="witr_testi_itemt testi-width all_color_testimonial guttergs">
                        <div className="em_single_testimonial witr_testi_s_9">
                          <div className="test-part mt-50 ">
                            <ul>
                              <li>
                                <div className="execllent_toggol">
                                  <div className="em_crating">
                                    <i className="icofont-star active"></i>{" "}
                                    <i className="icofont-star active"></i>{" "}
                                    <i className="icofont-star active"></i>{" "}
                                    <i className="icofont-star active"></i>{" "}
                                    <i className="icofont-star active"></i>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="em_testi_content">
                            <div className="em_testi_text">
                              <p>
                                Following best practices and pro edu izations in
                                the industry, our cles disinf a reader will be
                                distracted discretion admiration in particular.
                              </p>
                            </div>
                          </div>
                          <div className="em_test_thumb">
                            <img src={require("../images/test3.png")} alt="" />
                          </div>
                          <div className="em_testi_title">
                            <h2>
                              Rebecca Stevens <span>CEO &amp; Funder</span>
                            </h2>
                          </div>
                          <div className="em_testi_logo">
                            <div className="em_testilogo_inner"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /* info area  */}

      <div
        className="merged-stats-section "
        dir={isArabic ? "ltr" : "rtl"}
        style={{
          textAlign: isArabic ? "right" : "left",
        }}
      >
        <div className="container">
          <div className="col-lg-8 m-auto text-center">
            <h2 className="merge-title" data-aos="zoom-out" data-aos-delay="0">
              <div
                dangerouslySetInnerHTML={{ __html: t("mergedStats.subtitle") }}
              />
            </h2>
            <h1
              className="merge-subtitle"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              {t("mergedStats.title")}
            </h1>
          </div>
          <div className="row align-items-center">
            <div
              className={`stats-boxes col-lg-6 ${
                isArabic ? "ltr-box" : "rtl-box"
              }`}
            >
              <div
                className="stats-box"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h3>
                  <CountUp
                    start={0}
                    end={94}
                    duration={2}
                    suffix="%"
                    enableScrollSpy
                    scrollSpyDelay={100}
                  />
                </h3>
                <p>{t("mergedStats.successRate")}</p>
              </div>

              <div
                className="stats-box"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h3>
                  <CountUp
                    start={0}
                    end={70}
                    duration={2}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={100}
                  />
                </h3>
                <p>{t("mergedStats.legalCases")}</p>
              </div>

              <div
                className="stats-box"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h3>
                  <CountUp
                    start={0}
                    end={488}
                    duration={2}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={100}
                  />
                </h3>
                <p>{t("mergedStats.consultations")}</p>
              </div>

              <div
                className="stats-box"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h3>
                  <CountUp
                    start={0}
                    end={11}
                    duration={2}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={100}
                  />
                </h3>
                <p>{t("mergedStats.attorneys")}</p>
              </div>
            </div>

            <div className="merged-details col-lg-6 ">
              <div className="detail-item">
                <h4 data-aos="fade-left">{t("mergedStats.detail1.title")}</h4>
                <p
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-easing="linear"
                >
                  {t("mergedStats.detail1.desc")}
                </p>
              </div>
              <div className="detail-item">
                <h4 data-aos="fade-left" data-aos-delay="400">
                  {t("mergedStats.detail2.title")}
                </h4>
                <p
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-easing="linear"
                >
                  {t("mergedStats.detail2.desc")}
                </p>
              </div>
              <div className="detail-item">
                <h4 data-aos="fade-left" data-aos-delay="600">
                  {t("mergedStats.detail3.title")}
                </h4>
                <p
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-easing="linear"
                >
                  {t("mergedStats.detail3.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /* low brand area  */}
      <div className="low_brand_area">
        <div className="container ">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            freeMode={true}
            className="mySwiper"
          >
            {brandImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="slide_items">
                  <a href="#">
                    <img src={img} alt={`Brand ${index}`} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* /* contact area css  */}
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
              <div className="map-box mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d105304.73719676417!2d35.7522296380439!3d34.432519766114936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1521f761d502f5f9%3A0x8b878d24f8fbc622!2sTripoli!3m2!1d34.4325474!2d35.8346308!5e0!3m2!1sen!2slb!4v1744192326359!5m2!1sen!2slb"
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ borderRadius: "10px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /* low blog area  */}
      {/* <!-- low blog area --> */}
      <div className="low_blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2>{t("newsSection.title")}</h2>
                  <h3>{t("newsSection.subtitle")}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="blog_style_adn_2">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  breakpoints={{
                    0: {
                      slidesPerView: 1, // 👈 On mobile
                    },
                    768: {
                      slidesPerView: 2, // 👈 On tablets and above
                    },
                  }}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                >
                  <SwiperSlide>
                    <div className="single_blog_adn witr_ablog_7_a all_blog_color">
                      <div className="witr_ablog_7">
                        <iframe
                          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Framy.ichrakieh1%2Fposts%2Fpfbid02qy1Htzx6kzFnDKhVdQYQa2RePrDgKUwyjGzizdUrQUhXVcFCaXxpa3yfgLohPwMsl&show_text=true&width=500"
                          width="90%"
                          height="481"
                          style={{ border: "10px", overflow: "hidden" }}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen={true}
                        ></iframe>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single_blog_adn witr_ablog_7_a all_blog_color">
                      <div className="witr_ablog_7">
                        <iframe
                          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Framy.ichrakieh1%2Fposts%2Fpfbid0whScd9GE9YBjFCm9dog4ToQr9h7N82XYUDdwCNr8v6A7nM5et4TTCrdew3XMaqKil&show_text=true&width=500"
                          width="90%"
                          height="481"
                          style={{ border: "10px", overflow: "hidden" }}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen={true}
                        ></iframe>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Low;
