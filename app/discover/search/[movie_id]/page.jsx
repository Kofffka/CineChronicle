import Section from '@/app/components/Section'
import getMovies from '@/app/service/api/movie/getMovies'
import React from 'react'
import Banner from './banner/Banner'
import Similar from './Similar'
import StoryLine from './banner/StoryLine'
import Credit from './credits/Credit'
import Recommendations from './Recommendations'

export default async function Page({ params: { movie_id } }) {


  const data = await getMovies("movie", movie_id,)

  const { credits: credits, similar: similar, recommendations: recommendations, videos: videos, images: images } = data




  return (
    <div>
      <div>
        <Banner
          {...data}
        />
      </div>
      <Section>
        <div>
          <Credit
            credits={...credits}
          />
        </div>
        <div>
          <Similar
            similar={...similar}
          />
        </div>
        <div>
          <Recommendations
            recommendations={...recommendations}
          />
        </div>
      </Section>
    </div>
  )
}
