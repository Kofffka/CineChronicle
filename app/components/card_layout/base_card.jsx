import React from 'react'
import Image from 'next/image'
import { IMAGE_SIZE } from '@/app/const/size'
import { base_image_path } from '@/app/const/base_image_path'
import getGenre from '@/app/lib/get_current_genre'



const Base_Card = ({ title, name, genre_ids, backdrop_path, poster_path }) => {
    const genre_data = getGenre(genre_ids)
    return (
        // w-full / 64
        <>
            <div className='relative  w-full h-auto'> 
                <Image className={``} loading={"lazy"} width={IMAGE_SIZE.Backdrop.width} height={IMAGE_SIZE.Backdrop.height} src={base_image_path + `w${IMAGE_SIZE.Backdrop.width}` + backdrop_path} alt={`${title} poster`} fill={false} />
                <div className="fade-effect__bottom"></div>
            </div>
            <div className={`mb-2 `}>
                <p className={`text-white text-[100%] `}>
                    {title || name}
                </p>
            </div>
            <div>
                <ul className={`flex`}>
                    {
                        genre_data.slice(0, 2).map((element, index) => {
                            return (
                                <li key={index} className={`mr-4 text-sm-info`}>{element}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Base_Card