
import getBannerPost from '@/app/service/getBannerPost'
import React from 'react'
import { Section } from "../Section"

import { Element } from './Element'




export const revalidate = 10;


export default async function Banner({ posts }) {

    let data = await getBannerPost()



    return (
        <>
                {
                    data.map((element, index) => {
                        return (
                            <Element
                                key={index}
                                poster={element.Poster}
                                title={element.Title}
                                imdbID={element.imdbID}
                                imdbRating={element.imdbRating}
                                year={element.Year}
                                runtime={element.Runtime}
                                plot={element.Plot}
                                genre={element.Genre}
                                type={element.Type}
                            />
                        )
                    })
                }
        </>


    )
}
