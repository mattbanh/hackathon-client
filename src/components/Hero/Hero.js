// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Hero.scss";

// import required modules
import { Pagination } from "swiper";

function Hero() {
  const pagination = {
    clickable: true,
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide>
            <div className="hero-slide">
              <div className="hero-slide__text-container">
                <h1 className="hero-slide__title">Out with the old</h1>
                <a href="https://brainstation.io" className="hero-slide__link">
                  <div className="hero-slide__button">
                    <span className="hero-slide__button-text">
                      Download Now
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <img
                  src="https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
                  alt="balloons"
                  className="hero-slide__image"
                ></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide">
              <div className="hero-slide__text-container">
                <h1 className="hero-slide__subheader">EXCLUSIVE</h1>
                <span className="hero-slide__title">Avatar 2: The Game</span>
                <span className="hero-slide__text">
                  Available only on the EA App
                </span>
                <a href="https://brainstation.io" className="hero-slide__link">
                  <div className="hero-slide__button">
                    <span className="hero-slide__button-text">
                      Download Now
                    </span>
                  </div>
                </a>
              </div>
              <div className="hero-slide__image-container">
                <img
                  src="https://i.picsum.photos/id/1060/536/354.jpg?blur=2&hmac=0zJLs1ar00sBbW5Ahd_4zA6pgZqCVavwuHToO6VtcYY"
                  alt="balloons"
                  className="hero-slide__image"
                ></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-slide">
              <div className="hero-slide__text-container">
                <h1 className="hero-slide__title">
                  Enjoy the EA App mobile experience
                </h1>
                <ul className="hero-slide__list">
                  <li>Add friends</li>
                  <li>Install your games remotely</li>
                  <li>Unlock and share achievements</li>
                  <li>Get exclusive content</li>
                </ul>
              </div>
              <div>
                <img
                  src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
                  alt="balloons"
                  className="hero-slide__image"
                ></img>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default Hero;
