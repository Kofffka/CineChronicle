"use client"
import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Element from './Element';

const Carousel = ({ cast }) => {
    const [swiper, setSwiper] = useState(null);

    // border-[0.3px] border-solid border-red-500
    return (
        <Swiper
            className={`flex h-max`}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3.5}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            onSwiper={(swiper) => {
                console.log(swiper)
                setSwiper(swiper);
            }}
            onActiveIndexChange={(swiper) => {
                console.log("active index is", swiper.activeIndex);
            }}
        >
            {/* <div className="button-wrapper">
                <button
                    className="button"
                    onClick={() => {
                        swiper.slidePrev();
                    }}
                >
                    Prev Slide
                </button>
                <button
                    className="button"
                    onClick={() => {
                        swiper.slideNext();
                    }}
                >
                    Next Slide
                </button>
            </div> */}

            {
                cast.map((element, index) => {
                    return (
                        <SwiperSlide key={index} className={`w-[237px] h-full border-[0.3px] border-solid border-slate-500  px-2`}>
                            <Element {...element} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Carousel
