import Base_Card from '@/app/components/card_layout/base_card'
import getSimilar from '@/app/service/api/movie/getSimilar'

import Link from 'next/link'
import React from 'react'
import Carousel from '../../../components/Carousel'

const Similar = ({ similar }) => {

  const { page: page, results: results } = similar



  return (
    <>

      <div className={`mb-4`}>
        <span className={`text-white text-2xl`}>Similar Movies for You</span>
      </div>
      <div className='relative h-[200px]'>
        <Carousel results={results} />
      </div>
    </>
  )
}

export default Similar