import getSImilar from '@/app/service/api/movie/getSimilar'
import React from 'react'

const Similar = ({id}) => {

  const {results: data} = getSImilar(id)

  return (
    <div>Similar Movies for you</div>
  )
}

export default Similar