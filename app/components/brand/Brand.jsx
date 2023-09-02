

import Image from 'next/image'
import React from 'react'
import { BrandCollection } from './brandColletion'


const Brand = () => {
    return (
        <div className={`flex`}>
            {
                BrandCollection.map((element, index) => {
                    return (
                        <div className={`w-[40em] mr-6 border-[1px] border-solid border-black rounded-lg` } key={index}>
                            <Image className={`w-full`} width={300} height={300} src={element} alt={"logo"} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Brand