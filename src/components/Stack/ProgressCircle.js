import React, {useState} from 'react'

const ProgressCircle = ({percent}) => {

  return (
    <div className="progress_wrapper">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6"/>
        <circle style={{strokeDashoffset: 100 - percent}} cx="60" cy="60" r="54" fill="none"
                pathLength="100"/>
      </svg>
      <h2>{percent}%</h2>
    </div>
  )
}


export default ProgressCircle