import React from 'react'
import Movies from './components/Movies'
import Series from './components/Series'
// import getAllFilms from '@/app/service/getAllFilms'


export default async function List() {

    return (
        <>
            <div className={` mt-11  `}>
                <Movies />
            </div>
            <div className={` mt-11  `}>
                <Series />
            </div>
        </>

    )
}

