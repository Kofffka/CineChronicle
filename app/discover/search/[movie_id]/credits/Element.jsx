import { base_image_path } from '@/app/const/base_image_path'
import Image from 'next/image'
import React from 'react'

const Element = ({original_name, profile_path, character}) => {
  return (
    <>
        <div className={`relative w-full`}>
            <Image className={`w-full`} width={300} height={300} src={base_image_path + `w780` + profile_path} alt={`${original_name}`} />
        </div>
        <div>
            <div>
                <span>{original_name}</span>
            </div>
            <div>
                <span>{character}</span>
            </div>

        </div>
    </>
  )
}

export default Element