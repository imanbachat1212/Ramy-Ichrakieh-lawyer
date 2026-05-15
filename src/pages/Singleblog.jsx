import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogs from "../data/blogData";

function Singleblog() {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2>{isArabic ? "المقال غير موجود" : "Blog post not found"}</h2>
        <Link to="/" className="learn_btn adnbtn2" style={{ marginTop: "20px", display: "inline-block" }}>
          {isArabic ? "العودة للرئيسية" : "Back to Home"}
        </Link>
      </div>
    );
  }

  const title = isArabic ? post.titleAr : post.titleEn;
  const date = isArabic ? post.dateAr : post.dateEn;
  const author = isArabic ? post.authorAr : post.authorEn;
  const category = isArabic ? post.categoryAr : post.categoryEn;
  const content = isArabic ? post.contentAr : post.contentEn;

  return (
    <>
      {/* breadcrumb area */}
      <div className="breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 txtc text-center ccase">
              <div className="brpt">
                <h2>{title}</h2>
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
                    <span className="current">{isArabic ? "المقالات" : "Blog"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog content area */}
      <div
        className="witr-blog-side-area blog_area single_blog single_blog_page"
        dir={isArabic ? "rtl" : "ltr"}
        style={{ textAlign: isArabic ? "right" : "left" }}
      >
        <div className="container">
          <div className="row">
            {/* Main content */}
            <div className="col-lg-8 col-md-12">
              <div className="single_blog single_blog_grid singles">
                <div className="single_blog_thumb">
                  <img
                    src={post.image}
                    alt={title}
                    style={{ width: "100%", borderRadius: "8px", objectFit: "cover", maxHeight: "400px" }}
                  />
                </div>

                <div className="low-single-blog-details-inner">
                  <div className="low-single-blog-title">
                    <h2>{title}</h2>
                  </div>

                  <div className="low-blog-meta">
                    <div className="low-blog-meta-left">
                      <span>
                        <i className="fas fa-calendar-alt"></i> {date}
                      </span>
                      <span style={{ marginLeft: isArabic ? "0" : "16px", marginRight: isArabic ? "16px" : "0" }}>
                        <i className="fas fa-user"></i> {author}
                      </span>
                      <span style={{ marginLeft: isArabic ? "0" : "16px", marginRight: isArabic ? "16px" : "0" }}>
                        <i className="fas fa-tag"></i> {category}
                      </span>
                    </div>
                  </div>

                  <div className="low-single-blog-content">
                    <div className="single-blog-content">
                      {content.map((block, idx) => {
                        if (block.type === "paragraph") {
                          return <p key={idx}>{block.text}</p>;
                        }
                        if (block.type === "heading") {
                          return (
                            <div className="wp-block-group" key={idx}>
                              <div className="wp-block-group__inner-container">
                                <h2>{block.text}</h2>
                              </div>
                            </div>
                          );
                        }
                        if (block.type === "quote") {
                          return (
                            <blockquote key={idx}>
                              <p>{block.text}</p>
                              {block.cite && <footer>{block.cite}</footer>}
                            </blockquote>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>

                  {/* Share icons */}
                  <div className="low-blog-social">
                    <div className="low-single-icon">
                      <div className="low-single-icon-inner">
                        <a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
                        <a href="#" aria-label="WhatsApp"><i className="fa fa-whatsapp"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right content-widget pdsl">
              <div className="blog-left-side widget">
                {/* Recent Posts */}
                <div className="widget widget_recent_data">
                  <div className="single-widget-item">
                    <h2 className="widget-title">
                      {isArabic ? "مقالات حديثة" : "Recent Posts"}
                    </h2>
                    {blogs.map((b) => (
                      <div className="recent-post-item" key={b.id}>
                        <div className="recent-post-image">
                          <Link to={`/blog/${b.slug}`}>
                            <img
                              src={b.image}
                              alt={isArabic ? b.titleAr : b.titleEn}
                              style={{ width: "70px", height: "60px", objectFit: "cover", borderRadius: "4px" }}
                            />
                          </Link>
                        </div>
                        <div className="recent-post-text">
                          <h4>
                            <Link to={`/blog/${b.slug}`}>
                              {isArabic ? b.titleAr : b.titleEn}
                            </Link>
                          </h4>
                          <span className="rcomment">
                            {isArabic ? b.dateAr : b.dateEn}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="widget widget_categories">
                  <h2 className="widget-title">
                    {isArabic ? "التصنيفات" : "Categories"}
                  </h2>
                  <ul>
                    {blogs.map((b) => (
                      <li key={b.id}>
                        <Link to={`/blog/${b.slug}`}>
                          {isArabic ? b.categoryAr : b.categoryEn}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA box */}
                <div
                  className="widget"
                  style={{
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                    borderRadius: "8px",
                    padding: "24px",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="icofont-lawyer-alt-1"
                    style={{ fontSize: "40px", color: "#d0bf90", marginBottom: "12px", display: "block" }}
                  ></i>
                  <h3 style={{ color: "#d0bf90", marginBottom: "10px" }}>
                    {isArabic ? "هل تحتاج إلى مساعدة قانونية؟" : "Need Legal Help?"}
                  </h3>
                  <p style={{ fontSize: "14px", marginBottom: "16px" }}>
                    {isArabic
                      ? "تواصل مع مكتب إشراقية للمحاماة للحصول على استشارة مجانية."
                      : "Contact Ishraqieh Law Firm for a free consultation."}
                  </p>
                  <a
                    href="tel:+96103114402"
                    className="learn_btn adnbtn2"
                    style={{ display: "inline-block" }}
                  >
                    {t("contact2")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleblog;
