import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";

const posts = [
  {
    img: team2,
    author: "Poket",
    date: "31 Oct 2022",
    title: "Industrial Branch Of Engineering.",
    href: "/low-single-blog.html",
  },
  {
    img: team1,
    author: "Poket",
    date: "31 Oct 2022",
    title: "It is a long established fact a reader will be",
    href: "/low-single-blog.html",
  },
  {
    img: team3,
    author: "Poket",
    date: "31 Oct 2022",
    title: "Carousel Of Colors In Cinq This Terre Beach.",
    href: "/low-single-blog.html",
  },
  {
    img: team2,
    author: "Poket",
    date: "31 Oct 2022",
    title: "Protected Your Roof From This Storm",
    href: "/low-single-blog.html",
  },
];

function Blog() {
  const { i18n } = useTranslation();
  const isArabic = i18n?.language === "ar";

  return (
    <div className="low_blog_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="witr_section_title">
              <div className="witr_section_title_inner text-center">
                <h2>Blog Post</h2>
                <h3>Recent Case Studies</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="blog_style_adn_2">
              {/* Wrap with dir so Swiper picks RTL/LTR correctly */}
              <div dir={isArabic ? "rtl" : "ltr"}>
                <Swiper
                  key={`blog-${i18n.language}`} // remount on language change
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                  }}
                >
                  {posts.map((post, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="single_blog_adn witr_ablog_7_a all_blog_color">
                        <div className="witr_ablog_7">
                          <div className="witr_ablog_thumb poket-blog-thumb_adn">
                            <a href={post.href}>
                              <img src={post.img} alt={post.title} />
                            </a>
                          </div>

                          <div className="witr_ablog_content">
                            <div className="witr_ablog_inner">
                              <div className="witr_blog_metan">
                                <span>
                                  <a href={post.href}>
                                    <i className="icofont-user-male"></i>{" "}
                                    {post.author}
                                  </a>
                                </span>
                                <span>
                                  <i className="icofont-ui-clock"></i>{" "}
                                  {post.date}
                                </span>
                              </div>

                              <h2>
                                <a href={post.href}>{post.title}</a>
                              </h2>

                              <div className="learn_more_adn">
                                <a
                                  className="learn_btn adnbtn2"
                                  href={post.href}
                                >
                                  Read More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* /dir wrapper */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
