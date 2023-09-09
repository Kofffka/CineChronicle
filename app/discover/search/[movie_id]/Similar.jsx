import Base_Card from '@/app/components/card_layout/base_card'
import getSImilar from '@/app/service/api/movie/getMovies'
import Link from 'next/link'
import React from 'react'

const Similar = ({ similar }) => {

  const { page: page, results: results } = similar


  return (
    <>
      <div>Similar Movies for You</div>
      <div className='grid'>
        {results.map((element, index) => {
          return (
            <Link href={`/discover/search/${element.id}`} key={index} className={`grid-cols-3`}>
              <Base_Card {...element} />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Similar