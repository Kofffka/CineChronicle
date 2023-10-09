import React from 'react'

const Action = ({ video }) => {
    return (
        <>
            <button className={`border rounded-md border-solid border-white py-3 px-4 mr-6 bg-[#00925D]`}>
                <i></i>
                <p>
                    {
                        video ? "Watch Trailer" : "Play Now"
                    }
                </p>
            </button>
            <button className={`border rounded-md border-solid border-white py-3 px-4`}>
                <i></i>
                <p>Add Watchlist</p>
            </button>
        </>
    )
}

export default Action