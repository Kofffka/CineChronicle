import React from 'react'
import getAllFilms from '@/app/service/getAllFilms'


export default async function FilmList() {

    let data = await getAllFilms()

    return (
        <div></div>
    )
}

