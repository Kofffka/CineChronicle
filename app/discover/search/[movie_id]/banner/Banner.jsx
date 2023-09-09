

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Image from 'next/image'
import React from 'react'
import { IMAGE_SIZE } from '@/app/const/size'
import { base_image_path } from '@/app/const/base_image_path'
import Information from './Information'
import Action from './Action'
import Title from './Title'
import TopInfo from './TopInfo'
import PosterImage from './PosterImage'
import BackdropImage from './BackdropImage'
import Tagline from './Tagline'
import Rated from './Rated'
import StoryLine from './StoryLine'


const Banner = ({ title, tagline, status, overview, vote_average, original_language, backdrop_path, poster_path, genres, release_date, video }) => {

    return (
        <>
            <div>
                <div className='absolute w-full h-full'>
                    <BackdropImage backdrop_path={backdrop_path} />
                </div>

                <Section position={true} style="">
                    <div className="fade-effect__top"></div>
                    <div className="fade-effect__bottom"></div>
                    <div className={`w-full h-full flex  z-10`}>
                        <div className={`relative  w-96 flex items-center overflow-hidden mr-14`}>
                            <PosterImage poster_path={poster_path} />
                        </div>
                        <div className={`relative flex grow items-end w-[50%] z-10  text-left`}>
                            <div>
                                <div className={`mb-4`}>
                                    <TopInfo original_language={original_language} status={status}/>
                                </div>
                                <div className={`mb-4`}>
                                    <Title title={title} />
                                </div>
                                <div className={`mb-4`}>
                                    <Tagline tagline={tagline} />
                                </div>

                                <div className={`mb-4`}>
                                    <Rated vote_average={vote_average} />
                                </div>

                                <div className={`mb-6`}>
                                    <StoryLine overview={overview} />
                                </div>

                                <div className={`mb-4`}>
                                    <Information release_date={release_date} genres={genres}/>
                                </div>

                                <div className={`mb-20`}>
                                    <Action video={video}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

            </div>
        </>
    )

}

export default Banner