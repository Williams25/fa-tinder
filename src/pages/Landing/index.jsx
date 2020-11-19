import React from 'react'
import './index.css'

const Landing = props => {
  return (
    <div className="container">
      <div className="title">
        <span>Fa❤Tinder</span>
      </div>

      {props.children}

    </div>
  )
}

export default Landing