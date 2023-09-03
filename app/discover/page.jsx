import React from 'react'
import { Inter } from 'next/font/google'
import Wrapper from '../components/Wrapper'
import getAllFilms from "../service/getAllFilms"
import Link from 'next/link'

export const metadata = {
  title: 'Discover',
}


export default async function Discover () {

  const data = await getAllFilms()

  return (
    <>
      <Wrapper>
        <ul>
          {data.map ((element,index) => {
            return (
              <li key={index}><Link href={`/discover/${element.id}`}>{element.title}</Link></li>
            )
          })}
        </ul>
      </Wrapper>
    </>
  )
}

