import Base_Card from '@/app/components/card_layout/base_card'
import Link from 'next/link'
import React from 'react'

const Recommendations = ({recommendations}) => {
    const { page: page, results: results } = recommendations


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

export default Recommendations