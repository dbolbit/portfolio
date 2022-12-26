import React from 'react'
import logo from '../../img/Logo.png'

const Logo = (props) => {
  return (
    <div className="logo">
      <img height={60} src={logo} alt="logo"/>
      <span>db</span>
    </div>
  )
}


export default Logo