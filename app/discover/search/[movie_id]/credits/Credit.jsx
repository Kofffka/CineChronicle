
import Base_Card from '@/app/components/card_layout/base_card'
import Link from 'next/link'
import React from 'react'
import Element from './Element'

const Credit = ({ credits }) => {
    const { page: page, cast: cast } = credits


    return (
      <div className={``}>
        <div className={`mb-4`}>
          <span className={`text-white text-2xl`}>Top Cast</span>
        </div>
        <div className='flex'>
          {cast.map((element, index) => {
            return (
              <div key={index} className={`relative w-max h-max border-2 border-solid border-red-500`}>
                <Element 
                {...element} 
                />
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Credit