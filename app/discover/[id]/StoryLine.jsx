import React from 'react'

const StoryLine = ({extract}) => {
  return (
    <div>
      <div className={`mb-6`}>
        <span className={`text-xl`}>Story Line</span>
      </div>
      <div>
        <p className={`text-lg text-grey`}>{extract}</p>
      </div>
    </div>
  )
}

export default StoryLine