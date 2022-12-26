import React from 'react'

const Container = (props) => {
  const {children, ...eth} = props
  return (
    <div className="container" {...eth}>
      {children}
    </div>
  )
}


export default Container

export const Separator = () => <div className="separator_line"/>
