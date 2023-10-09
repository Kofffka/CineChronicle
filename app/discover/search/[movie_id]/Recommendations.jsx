import Base_Card from '@/app/components/card_layout/base_card'
import getSimilar from '@/app/service/api/movie/getSimilar'

import Link from 'next/link'
import React from 'react'
import Carousel from '../../../components/Carousel'

const Recommendations = ({ recommendations }) => {
  
  const { page: page, results: results } = recommendations

  return (
    <>
      <div className={`mb-4`}>
        <span className={`text-white text-2xl`}>Recomentadions Movies for You</span>
      </div>
      <div className='relative h-[200px]'>
        <Carousel results={results} />
      </div>
    </>
  )
}

export default Recommendations