import { base_image_path } from '@/app/const/base_image_path'
import { IMAGE_SIZE } from '@/app/const/size'
import Image from 'next/image'
import React from 'react'

const PosterImage = ({poster_path}) => {
    return (
        <>
            <Image className={` w-full h-[80%] object-fill rounded-3xl`} loading={"lazy"} width={IMAGE_SIZE.Backdrop.width} height={IMAGE_SIZE.Poster.height} src={base_image_path + `w342` + poster_path} alt=" Poster" fill={false} />
        </>
    )
}

export default PosterImage