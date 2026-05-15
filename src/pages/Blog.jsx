import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import blogs from "../data/blogData";

function Blog() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n?.language === "ar";

  return (
    <>
      {/* breadcrumb */}
      <div className="breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 txtc text-center ccase">
              <div className="brpt">
                <h2>{t("newsSection.title")}</h2>
              </div>
              <div className="breadcumb-inner">
                <ul>
                  <li>
                    <Link to="/">{t("home")}</Link>
                  </li>
                  <li>
                    <i className="icofont-thin-right"></i>
                  </li>
                  <li>
                    <span className="current">{t("newsSection.title")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog grid */}
      <div className="low_blog_area" style={{ padding: "60px 0" }}>
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
                <div dir={isArabic ? "rtl" : "ltr"}>
                  <Swiper
                    key={`blog-page-${i18n.language}`}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500 }}
                    loop
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1200: { slidesPerView: 3 },
                    }}
                  >
                    {blogs.map((post) => (
                      <SwiperSlide key={post.id}>
                        <div className="single_blog_adn witr_ablog_7_a all_blog_color">
                          <div className="witr_ablog_7">
                            <div className="witr_ablog_thumb poket-blog-thumb_adn">
                              <Link to={`/blog/${post.slug}`}>
                                <img
                                  src={post.image}
                                  alt={isArabic ? post.titleAr : post.titleEn}
                                  style={{
                                    width: "100%",
                                    height: "220px",
                                    objectFit: "cover",
                                  }}
                                />
                              </Link>
                            </div>

                            <div className="witr_ablog_content">
                              <div className="witr_ablog_inner">
                                <div className="witr_blog_metan">
                                  <span>
                                    <i className="icofont-user-male"></i>{" "}
                                    {isArabic ? post.authorAr : post.authorEn}
                                  </span>
                                  <span>
                                    <i className="icofont-ui-clock"></i>{" "}
                                    {isArabic ? post.dateAr : post.dateEn}
                                  </span>
                                </div>

                                <h2>
                                  <Link to={`/blog/${post.slug}`}>
                                    {isArabic ? post.titleAr : post.titleEn}
                                  </Link>
                                </h2>

                                <p
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    marginBottom: "12px",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                  }}
                                >
                                  {isArabic ? post.excerptAr : post.excerptEn}
                                </p>

                                <div className="learn_more_adn">
                                  <Link
                                    className="learn_btn adnbtn2"
                                    to={`/blog/${post.slug}`}
                                  >
                                    {t("newsSection.readMore")}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
