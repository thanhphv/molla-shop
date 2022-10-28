import React from "react";
import Post from "./Post";
import { ArrowRightOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import "./blockPost.css";

const BlockPost = () => {
  const data1 = {
    src: "../../images/post-image/post_1.jpg",
    day: "Sep 22, 2022, 0 Comments",
    title: "Sed adipiscing odbrnare.",
    content:
      "Lorem ipsum dolor sit amet, consectetuer iscing elit. Phasellus hendrerit.Pelletesque aliquet nibh necurna blandit.",
  };

  const data2 = {
    src: "../../images/post-image/post_2.jpg",
    day: "May 12, 2022, 0 Comments",
    title: "Fusce lacifgbnia arcuet nulla.",
    content:
      "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis justo.",
  };

  const data3 = {
    src: "../../images/post-image/post_3.jpg",
    day: "May 19, 2022, 0 Comments",
    title: "Quisque volutpat mdbattis eros.",
    content:
      "Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
  };
  return (
    <div className="block-post-wrapper">
      <div className="container">
        <h2 className="title-section">From Our Block</h2>

        {/* <Post data={data1} />
          <Post data={data2} />
          <Post data={data3} /> */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            515: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Post data={data1} />
          </SwiperSlide>
          <SwiperSlide>
            <Post data={data2} />
          </SwiperSlide>
          <SwiperSlide>
            <Post data={data3} />
          </SwiperSlide>
        </Swiper>

        <div className="arrival-button">
          <button>
            <Link to="/blog">
              View more articles <ArrowRightOutlined />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockPost;
