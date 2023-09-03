;
import Section from "@/app/components/Section";
import getAllFIlms from "@/app/service/getAllFilms";
import getFilmsByTitle from "@/app/service/getFilmsByTitle";
import React from "react";
import Banner from "./Banner";
import Similar from "./Similar";
import StoryLine from "./StoryLine";
import TopCast from "./TopCast";


export async function generateStaticParams() {
    const res = await getAllFIlms()
    return res.map(post => {
        return {
            slug: post.title.toString()
        }
    })
}




export default async function Page({ params: { id } }) {

    const res = await getFilmsByTitle(id)

    let [data] = res
    let { title, year, cast, genres, extract, thumbnail } = data



    return (
        <div>
            <Banner
                title={title}
                year={year}
                genres={genres}
                thumbnail={thumbnail}
            />
            <Section>
                <StoryLine
                    extract={extract}
                />
                <TopCast
                    cast={cast}
                />
            </Section>
            <Similar
                genres={genres}
            />
        </div>

    )
}