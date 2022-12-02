// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./TopCarousel.scss";

// import required modules

import topPoint1 from "../../assets/images/top-point-1.png";
import topPoint2 from "../../assets/images/top-point-2.png";
import topPoint3 from "../../assets/images/top-point-3.png";

function TopCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        initialSlide="1"
        className="top-carousel-swiper"
      >
        <div>
          <SwiperSlide>
            <div className="top-carousel-slide">
              <div className="top-carousel-slide__image-container">
                <img
                  src={topPoint1}
                  alt="balloons"
                  className="top-carousel-slide__image"
                ></img>
              </div>
              <div className="top-carousel-slide__text-container">
                <h2 className="top-carousel-slide__title">
                  Designed for speed
                </h2>
                <p className="top-carousel-slide__description">
                  The fast, optimized platform makes it easier than ever to
                  discover, download, and play. So jumping into your game takes
                  less time and fewer clicks.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="top-carousel-slide">
              <div className="top-carousel-slide__image-container">
                <img
                  src={topPoint2}
                  alt="balloons"
                  className="top-carousel-slide__image"
                ></img>
              </div>
              <div className="top-carousel-slide__text-container">
                <h2 className="top-carousel-slide__title">Built to connect</h2>
                <p className="top-carousel-slide__description">
                  Link your EA Account with your favorite gaming platforms to
                  import friends lists and play together.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="top-carousel-slide">
              <div className="top-carousel-slide__image-container">
                <img
                  src={topPoint3}
                  alt="balloons"
                  className="top-carousel-slide__image"
                ></img>
              </div>
              <div className="top-carousel-slide__text-container">
                <h2 className="top-carousel-slide__title">
                  Discovery at your fingertips
                </h2>
                <p className="top-carousel-slide__description">
                  See what your friends are playing, find EA’s newest releases,
                  and add them to your collection within a few clicks.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default TopCarousel;
