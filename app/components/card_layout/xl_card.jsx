
import React from 'react'
import Image from 'next/image'
import { IMAGE_SIZE } from '@/app/const/size'
import { base_image_path } from '@/app/const/base_image_path'

const XL_Card = ({ title, genre_ids, backdrop_path, poster_path }) => {
    return (
        <div>
            <div className=''>
                <Image className={`w-full h-[150px] object-fill`} loading={"lazy"} width={200} height={200} src={base_image_path + `w${IMAGE_SIZE.Poster.width}` + backdrop_path} alt={`${title} poster`} fill={false} />
                <div className="fade-effect__bottom"></div>
            </div>
            <div>
                <span>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default XL_Card  

