

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Image from 'next/image'
import React from 'react'
import { IMAGE_SIZE } from '@/app/const/size'
import { base_image_path } from '@/app/const/base_image_path'

const Banner = ({ title, original_language, backdrop_path, popularity, release_date, video, media_type, genre_ids, vote_average }) => {

    console.log(title)

    return (
        <>
            <div>
                <div className='absolute w-full h-full'>
                    <Image className={` w-full h-full object-fill`} loading={"lazy"} width={IMAGE_SIZE.Backdrop.width} height={IMAGE_SIZE.Backdrop.height} src={base_image_path + `w${IMAGE_SIZE.Backdrop.width}` + backdrop_path} alt="Disney Poster" fill={false} />
                </div>




                <Section position={true} style="flex items-end ">
                    <div className="fade-effect__top"></div>
                    <div className="fade-effect__bottom"></div>

                    <div className={`w-[50%] z-10  text-left`}>


                        <div className={`mb-4`}>
                            <ul className={`flex`}>
                                <li className={` bg-black text-white rounded-lg px-2 py-1 mr-3`}>{media_type}</li>
                                <li className={` bg-black text-white rounded-lg px-2 py-1`}>{original_language}</li>
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
                                <p>
                                    {
                                        video ? "Watch Trailer" : "SignIn or SignUp"
                                    }
                                </p>
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