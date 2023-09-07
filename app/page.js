import './globals.css'
import Banner from './components/banner/Banner'
import Section from './components/Section'
import Brand from './components/brand/Brand'
import List from './components/list/List'



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
      <Section>
        <List />
      </Section>
    </>
  )
}

