import React from 'react'
import { Inter } from 'next/font/google'
import Wrapper from '../components/Wrapper'

import Link from 'next/link'
import Image from 'next/image'
import getAllFIlms from '../service/getAllFilms'

export const metadata = {
  title: 'Discover',
}


export default async function Discover () {

  const data = await getAllFIlms()

  return (
    <>
      <Wrapper>
        <ul>
          {data.map ((element,index) => {
            return (
              <li key={index}><Link href={`/discover/${element.title}`}>
                {element.title}: {element.id}
                </Link></li>
            )
          })}
        </ul>
      </Wrapper>
    </>
  )
}

