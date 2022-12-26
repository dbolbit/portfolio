import React from 'react'
import ProgressCircle from "./ProgressCircle"

const StackItem = ({data}) => {
  const {name, percent, img} = data
  return (
    <div className="stack_position">
      <h3>{name}</h3>
      <img height={100} src={img}/>
      <ProgressCircle percent={percent}/>
    </div>
  )
}


export default StackItem