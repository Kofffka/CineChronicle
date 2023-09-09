import React from 'react'

const Tagline = ({ tagline }) => {

    return (
        <>
            {tagline && <q className={`text-grey text-3xl`}>
                {tagline}
            </q>}
        </>
    )
}

export default Tagline