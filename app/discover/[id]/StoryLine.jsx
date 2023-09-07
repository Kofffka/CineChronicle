import React from 'react'

const StoryLine = ({overview}) => {
  return (
    <div>
      <div className={`mb-6`}>
        <span className={`text-xl`}>Story Line</span>
      </div>
      <div>
        <p className={`text-lg text-grey`}>{overview}</p>
      </div>
    </div>
  )
}

export default StoryLine