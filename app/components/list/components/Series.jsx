import getDiscover from '@/app/service/api/movie/getDiscover'
import Link from 'next/link'
import React from 'react'
import Base_Card from '../../card_layout/base_card'


export default async function Series() {

  let { page: page, results: data } = await getDiscover("tv")


  return (
    <div className={`relative`}>
      <div className={`mb-4`}>
        <Link href={`/discover/${"movies"}`}>
          <span className={`text-white text-2xl`}>
            Series
          </span>
        </Link>
      </div>
      <div className={`flex`}>

        {
          data.map((element, index) => {
            return (
              <Link key={index} href={`/discover/${`series`}`} className={`relative w-[400px] mr-4`}>
                <Base_Card
                  {...element}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

