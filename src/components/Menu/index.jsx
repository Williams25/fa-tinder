import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Menu = props => {
  return (
    <nav className="container-menu">
      <div className="item-menu">
        <span>Fa❤Tinder</span>
        <Link to="home">Perfil</Link>
        <Link to="procurar">Procurar</Link>
        <Link to="">Sair</Link>
      </div>
    </nav>
  )
}

export default Menu