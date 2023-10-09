


import Link from 'next/link'
import React from 'react'
import Base_Card from './card_layout/base_card'
import SM_Card from './card_layout/sm_card'

const MovieBox = ({data}) => {
    // border-[1px] border-solid border-lime-400
    return (
        <Link href={`/discover/search/${data.id}`}>
            <SM_Card data={data}/>
        </Link >
    )
}

export default MovieBox




