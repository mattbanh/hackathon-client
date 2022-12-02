import "./Hero.scss";

import downloadMac from "../../assets/images/download-mac.png";
import downloadWindows from "../../assets/images/download-windows.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
        className="top-carousel-swiper"
      >
        <div>
          <SwiperSlide>
            <div className="hero-slide">
              <div className="hero-slide__container-one">
                <div className="hero-slide__text-container-one">
                  <h2 className="hero-slide__subheader">Out with the old</h2>
                  <h1 className="hero-slide__title">Join the EA App Today</h1>
                  <div className="hero-slide__download-container">
                    <img
                      src={downloadWindows}
                      alt="download for windows button"
                      className="hero-slide__download-icon"
                    ></img>
                    <img
                      src={downloadMac}
                      alt="download for mac button"
                      className="hero-slide__download-icon"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide">
              <div className="hero-slide__container-two">
                <div className="hero-slide__text-container-two">
                  <h1 className="hero-slide__title">EXCLUSIVE</h1>
                  <span className="hero-slide__text">Avatar 2: The Game</span>
                  <span className="hero-slide__text">
                    Available only on the EA App
                  </span>
                  <div className="hero-slide__cta">
                    <span>Pre-order</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default Hero;
