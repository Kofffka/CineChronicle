
import React from 'react'
import Image from 'next/image'
import { IMAGE_SIZE } from '@/app/const/size'
import { base_image_path } from '@/app/const/base_image_path'

const SM_Card = ({ data }) => {

    const { title: title, name: name,  backdrop_path: backdrop_path, vote_average: vote_average, id: id } = data

    return (
        <div className={`relative w-40px h-[40px] border-[1px] border-solid border-red-600`}>
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

export default SM_Card

