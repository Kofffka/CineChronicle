import { base_image_path } from '@/app/const/base_image_path'
import { IMAGE_SIZE } from '@/app/const/size'
import Image from 'next/image'
import React from 'react'

const BackdropImage = ({ backdrop_path }) => {
    return (
        <>
            <Image className={` w-full h-full object-fill`} loading={"lazy"} width={IMAGE_SIZE.Backdrop.width} height={IMAGE_SIZE.Backdrop.height} src={base_image_path + `w${IMAGE_SIZE.Backdrop.width}` + backdrop_path} alt="Disney Poster" fill={false} />
        </>
    )
}

export default BackdropImage