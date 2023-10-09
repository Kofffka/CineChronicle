import React from 'react'
import Wrapper from '../components/Wrapper'

import Link from 'next/link'
import getDiscover from '../service/api/movie/getDiscover'
import Base_Card from '../components/card_layout/base_card'
import Section from '../components/Section'


export const metadata = {
  title: 'Discover',
}

export default async function Discover() {
  const { page: page, results: data } = await getDiscover("movie")




  return (
    <>
      <Wrapper>
        <Section>
          <div className={`w-full grid grid-cols-3  gap-6  `}>
            {data.map((element, index) => {
              return (
                  <Link key={index} href={`/discover/${element.id}`} className={`w-full relative overflow-hidden rounded-t-lg  `}>
                    <Base_Card
                      data={element}
                      slice_to={4}
                    />
                  </Link>
              )
            })}
          </div>
        </Section>
      </Wrapper>
    </>
  )
}



