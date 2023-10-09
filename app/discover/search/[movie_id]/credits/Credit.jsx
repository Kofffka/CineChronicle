
import Base_Card from '@/app/components/card_layout/base_card'
import Link from 'next/link'
import React from 'react'
import Carousel from './Carousel'
import Element from './Element'

const Credit = ({ credits }) => {
    const { page: page, cast: cast } = credits

    return (
      <div className={`mb-16`}>
        <div className={`mb-4`}>
          <span className={`text-white text-2xl`}>Top Cast</span>
        </div>
        <Carousel cast={cast} />
      </div>
    )
}

export default Credit