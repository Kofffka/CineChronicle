import './globals.css'
import { Inter } from 'next/font/google'
import Banner from './components/banner/Banner'
import Section from './components/Section'
import getBannerPost from './service/getBannerPost'
import Brand from './components/brand/Brand'



export const metadata = {
  title: 'CineChronicle',
}



export default async function Home() {




  return (
    <>
      <Section modify={false} position={true}>
        <Banner />
      </Section>
      <Section>
        <Brand />
      </Section>
    </>
  )
}

