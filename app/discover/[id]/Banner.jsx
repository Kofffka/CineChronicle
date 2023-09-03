

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Image from 'next/image'
import React from 'react'

const Banner = ({ title, year, genres, thumbnail }) => {

    return (
        <>
            <div>
                <div className='absolute w-full h-full'>
                    <Image className={` w-full h-full object-contain`} loading={"lazy"} width={1920} height={1080} src={thumbnail} alt="Disney Poster" fill={false} />
                </div>




                <Section position={true} style="flex items-end ">
                    <div className="fade-effect__top"></div>
                    <div className="fade-effect__bottom"></div>

                    <div className={`w-[50%] z-10  text-left`}>

                        <div className={`mb-4`}>
                            <ul className={`flex`}>
                                <li className={` bg-black text-white rounded-lg px-2 py-1 mr-3`}>{year}</li>
                            </ul>
                        </div>

                        <div className={`mb-4`}>
                            <span className={`text-white text-4xl`}>
                                {title}
                            </span>
                        </div>

                        <div className={`mb-20`}>
                            <button className={`border rounded-md border-solid border-white py-3 px-4 mr-6 bg-[#00925D]`}>
                                <i></i>
                                <p>Watch Trailer</p>
                            </button>
                            <button className={`border rounded-md border-solid border-white py-3 px-4`}>
                                <i></i>
                                <p>Add Watchlist</p>
                            </button>
                        </div>
                    </div>
                </Section>

            </div>
        </>
    )

}

export default Banner