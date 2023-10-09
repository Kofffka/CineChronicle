import React from 'react'
import Image from 'next/image'
import { IMAGE_SIZE } from '@/app/const/size'
import { base_image_path } from '@/app/const/base_image_path'




const Base_Card = ({data}) => {

    const { title: title, name: name,  backdrop_path: backdrop_path, vote_average: vote_average, id: id } = data


    return (
        // w-full / 64
        <div className={``}>
            <div className='relative w-full mb-4'> 
                <Image className={`w-full h-[150px] object-fill`} loading={"lazy"} width={200} height={200} src={base_image_path + `w${IMAGE_SIZE.Poster.width}` + backdrop_path} alt={`${title} poster`} fill={false} />
                <div className="fade-effect__bottom"></div>
            </div>
            <div className={`mb-2 `}>
                <p className={`text-white text-[100%] `}>
                    {title || name}
                </p>
            </div>
            {/* <div>
                <ul className={`flex`}>
                    {
                        genre_data.slice(0, 2).map((element, index) => {
                            return (
                                <li key={index} className={`mr-4 text-sm-info`}>{element}</li>
                            )
                        })
                    }
                </ul>
            </div> */}
        </div>
    )
}

export default Base_Card