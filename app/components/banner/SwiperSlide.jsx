import { SwiperSlide } from "swiper/react"
import "swiper/css"



export const SwiperSlideComponent = ({children}) => {
    return (
        <SwiperSlide>
            {children}
        </SwiperSlide>
    )
}