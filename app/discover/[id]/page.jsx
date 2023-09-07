;
import Section from "@/app/components/Section";
import getDiscover from "@/app/service/api/movie/getDiscover";

import React from "react";
import Banner from "./Banner";
import Similar from "./Similar";
import StoryLine from "./StoryLine";


export async function generateStaticParams() {
    const {results:res} = await getDiscover("movie")

    return res.map(post => {
        return {
            slug: post.title.toString()
        }
    })
}




export default async function Page({ params: { id } }) {

    const {results:res} = await getDiscover("movie")
    console.log(res)



    return (
        <div>
            <Banner
                {...res}
            />
            <Section>
                <StoryLine
                {...res}
                />
                {/* <TopCast
                {...res}
                /> */}
            </Section>
            <Similar
                {...res}
            />
        </div>

    )
}