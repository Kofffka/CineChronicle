
import React from 'react'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Element from './banner/Element';
import Base_Card from './card_layout/base_card';
import Link from 'next/link';


const CarouselList = ({ data }) => {
    // const [swiper, setSwiper] = useState(null);

    return (
        <div className={`flex`}>
            {
                data.map((element, index) => {
                    return (
                        <div key={index} className={`relative w-[200px] border-[0.3px] border-solid border-slate-500`}>
                            <Link href={`/discover/search/${element.id}`}>
                                <Base_Card {...element} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CarouselList
