import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './menu.css'

const Menu = props => {
  const history = useHistory()
  const removeStorage = () => {
    localStorage.removeItem('usuario')
    localStorage.removeItem('imagem')
    history.push('/')
  }

  return (
    <nav className="container-menu">
      <div className="item-menu">
        <span>Fa❤Tinder</span>
        <Link to="home">Perfil</Link>
        <Link to="procurar">Procurar</Link>
        <Link to="/" onClick={removeStorage}>Sair</Link>
      </div>
    </nav>
  )
}

export default Menu