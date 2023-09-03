import getById from "@/app/service/getFilmsByCategory";
import React from "react";
import getAllFilms from "../../service/getAllFilms"

export async function generateStaticParams () {
    const res = await getAllFilms()

    return res.map (post => ({
        slug: post.id.toString()
    }))
}



export default async function Page ({params: {id}}) {

    const data = await getById(id) 

    return (
        <div>
            {data.title}
        </div>
    )
}