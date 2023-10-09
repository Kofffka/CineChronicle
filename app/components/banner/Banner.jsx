
// import getMovie_List from '@/app/service/api/movie/getMovie_List';
import getMovie_List from '@/app/service/api/movie/getMovie_List';
import getTrending from '@/app/service/api/movie/getTrending';

import React from 'react'
import CarouselBanner from './CarouselBanner';

import Element  from './Element'



export const revalidate = 10;


export default async function Banner({ posts }) {

    let { results: data } = await getTrending("movie", "day")

    return (
        <>
            <div className={`mb-20`}>
                <CarouselBanner results={data} />
            </div>
        </>
    )
}

