import React from 'react'

const Rated = ({vote_average}) => {



  return (
    <div className={`w-max bg-[#0c1207] text-white rounded-lg px-2 py-1`}>
        <span className={`mr-4`} >{vote_average.toString().substring(0, 3)}</span>
        <span>TMDB</span>
    </div>
  )
}

export default Rated