import React from 'react'
import './landing.css'

const Landing = props => {
  return (
    <div className="container-landing">
      <div className="title">
        <span>Fa❤Tinder</span>
      </div>

      {props.children}

    </div>
  )
}

export default Landing