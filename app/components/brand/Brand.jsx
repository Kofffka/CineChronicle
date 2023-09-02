import React from 'react'
import { BrandCollection } from './brandColletion'


const Brand = () => {
    return (
        <div>
            {
                BrandCollection.map((element, index) => {
                    return (
                        <div className={``} key={index}>
                            <img src={element.src} alt={element.alt} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Brand