import getMovie_List from '@/app/service/api/movie/getMovie_List'
import Link from 'next/link'
import React from 'react'
import Carousel from '../../Carousel'


export default async function Featured() {

    let { dates: dates, page: page, results: results } = await getMovie_List("upcoming")
  
  
    return (
      <div className={`relative`}>
        <div className={`mb-4`}>
          <Link href={`/discover/${"movies"}`}>
            <span className={`text-white text-2xl`}>
              Upcoming Movies
            </span>
          </Link>
        </div>
        <Carousel layouut={"lg_card"} results={results}  />
      </div>
    )
  }

