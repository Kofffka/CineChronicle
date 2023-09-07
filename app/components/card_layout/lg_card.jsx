import React from 'react'
import Image from 'next/image'
import { IMAGE_SIZE } from '@/app/const/size'
import { base_image_path } from '@/app/const/base_image_path'

const LG_Card = ({ title, genre_ids, backdrop_path, poster_path }) => {
    return (
        <div>
            <div className=''>
                <Image className={``} loading={"lazy"} width={IMAGE_SIZE.Backdrop.width} height={IMAGE_SIZE.Poster.height} src={base_image_path + `w${IMAGE_SIZE.Poster.width}` + backdrop_path} alt={`${title} poster`} fill={false} />
            </div>
            <div>
                <span>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default LG_Card