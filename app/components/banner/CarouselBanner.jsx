"use client"
import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Element from './Element';




const CarouselBanner = ({ results }) => {

    const [swiper, setSwiper] = useState(null);
    // border-[0.3px] border-solid border-red-500
    return (
        <Swiper
            className={`flex h-full`}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            onSwiper={(swiper) => {
                setSwiper(swiper);
            }}
            onActiveIndexChange={(swiper) => {
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
                results.map((element, index) => {
                    return (
                        <SwiperSlide key={index} className={`relative w-[40px] h-full`}>
                            <Element
                                {...element}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default CarouselBanner
