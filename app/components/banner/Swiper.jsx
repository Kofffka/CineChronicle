"use client"

import { Swiper } from 'swiper/react';
import 'swiper/css';

export const SwiperComponent = ({children}) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}>
                
                {children}

        </Swiper>
    )
}


