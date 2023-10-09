import getGenre from '@/app/lib/get_current_genre'
import getDiscover from '@/app/service/api/movie/getDiscover'
import Link from 'next/link'
import React from 'react'
import Base_Card from '../../card_layout/base_card'
import Carousel from '../../Carousel'
import CarouselList from '../../CarouselList'

export default async function Movies() {

  let { page: page, results: results } = await getDiscover("movie")


  return (
    <div className={`relative`}>
      <div className={`mb-4`}>
        <Link href={`/discover/${"movies"}`}>
          <span className={`text-white text-2xl`}>
            Movies
          </span>
        </Link>
      </div>
      <Carousel results={results}  />
    </div>
  )
}


// border-2 border-solid border-white overflow-hidden
// border-2 border-solid border-cyan-500


// {
//   data.map((element, index) => {
//     return (
//       <Link key={index} href={`/discover/${`search`}/${element.id}`} className={`relative w-[400px] mr-4`}>
//         <Base_Card
//           {...element}
//         />
//       </Link>
//     )
//   })
// }