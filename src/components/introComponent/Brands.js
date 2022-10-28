import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/swiper.min.css";
import brand1 from '../../images/brands/1.png'
import brand2 from '../../images/brands/2.png'
import brand3 from '../../images/brands/3.png'
import brand4 from '../../images/brands/4.png'
import brand5 from '../../images/brands/5.png'
import brand6 from '../../images/brands/6.png'
import brand7 from '../../images/brands/7.png'
import brand8 from '../../images/brands/8.png'
import brand9 from '../../images/brands/9.png'

import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


const Brands = () => {
    return (
        <>
            <Swiper
                slidesPerView={7}
                spaceBetween={30}
                pagination={{
                    "clickable": true
                }}
                breakpoints={{
                    // when window width is >= 640px
                    0: {
                        slidesPerView: 4,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 5,
                    },
                }}
                className="mySwiper">
                <SwiperSlide><img src={brand1} /></SwiperSlide>
                <SwiperSlide><img src={brand2} /></SwiperSlide>
                <SwiperSlide><img src={brand3} /></SwiperSlide>
                <SwiperSlide><img src={brand4} /></SwiperSlide>
                <SwiperSlide><img src={brand5} /></SwiperSlide>
                <SwiperSlide><img src={brand6} /></SwiperSlide>
                <SwiperSlide><img src={brand7} /></SwiperSlide>
                <SwiperSlide><img src={brand8} /></SwiperSlide>
                <SwiperSlide><img src={brand9} /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Brands
