import React from 'react'

const Information = ({ release_date, genres }) => {
    console.log(genres)
    return (
        <>
            <ul className={`flex`}>
                <li className={`mr-4 text-sm-info`}>{release_date}</li>
                <ul className={`flex`}>
                    {
                        genres.map((element, index) => {
                            return (
                                <li key={index} className={`mr-4 text-sm-info`}>{element.name}</li>
                            )
                        })
                    }
                </ul>
            </ul>
        </>
    )
}

export default Information