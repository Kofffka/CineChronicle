import { base_image_path } from '@/app/const/base_image_path'
import Image from 'next/image'
import React from 'react'

const Element = ({ original_name, profile_path, character }) => {
    // border-[1px] border-solid border-lime-400
    return (
        <div className={`flex py-2`}>
            <div className={`relative w-[56px] h-[56px] mr-4`}>
                <div className={`rounded-[50%] overflow-hidden border-[1px] border-solid border-white`}>
                    <Image className={`w-[56px] h-[56px]`} width={300} height={300}  src={base_image_path + `w780` + profile_path} alt={`${original_name}`} />
                </div>
            </div>

            <div>
                <div>
                    <span className={`text-white text-base whitespace-nowrap`}>{original_name}</span>
                </div>
                <div>
                    <span className={`text-slate-500 text-base`}>{character}</span>
                </div>

            </div>
        </div>
    )
}

export default Element




