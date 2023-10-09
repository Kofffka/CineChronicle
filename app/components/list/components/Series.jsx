import getDiscover from '@/app/service/api/movie/getDiscover'
import Link from 'next/link'
import React from 'react'
import Base_Card from '../../card_layout/base_card'
import Carousel from '../../Carousel'
import CarouselList from '../../CarouselList'


export default async function Series() {

  let { page: page, results: results } = await getDiscover("tv")


  return (
    <div className={`relative`}>
      <div className={`mb-4`}>
        <Link href={`/discover/${"series"}`}>
          <span className={`text-white text-2xl`}>
            Series
          </span>
        </Link>
      </div>
      <Carousel results={results} />
    </div>
  )
}

