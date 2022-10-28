import React from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import slide1 from '../../images/slide-1-2.png'
import slide2 from '../../images/slide-2-2.png'
SwiperCore.use([Pagination, Autoplay]);

const IntroSlide = () => {
    return (
        <>
            <Swiper
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                pagination={{
                    "clickable": true
                }}
                className="mySwiper">
                <SwiperSlide>
                    <div className="intro-slide">
                        <div className="intro-content">
                            <h3 className="intro-subtitle animate__animated animate__fadeInUp">TopSale Collection</h3>
                            <h1 className="intro-title animate__animated animate__fadeInUp">Best Lighting <br />Collection</h1>
                            <Link to="/shop" className="button animate__animated animate__fadeInUp animate__delay-1.5s">
                                <span>SHOP NOW</span>
                                <i class="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="intro-picture">
                            <img src={slide1} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="intro-slide-2">
                        <div className="intro-content">
                            <h3 className="intro-subtitle animate__animated animate__bounce">TopSale Collection</h3>
                            <h1 className="intro-title animate__animated animate__fadeInUp">Wood Cabinet <br />Collection</h1>
                            <Link to="/shop" className="button animate__animated animate__fadeInUp animate__delay-1.5s">
                                <span>SHOP NOW</span>
                                <i class="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="intro-picture">
                            <img src={slide2} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default IntroSlide
