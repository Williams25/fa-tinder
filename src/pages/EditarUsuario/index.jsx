import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import './index.css'

const EditarUsuario = props => {

  const preventFormSubmit = e => e.preventDefault()

  return (
    <div className="container-editar">
      <Menu />
      <div className="editar-form">
        <form onSubmit={preventFormSubmit}>
          <span>Alterar perfil</span>
          <label htmlFor="">E-mail</label>
          <input type="text" />
          <label htmlFor="">Senha</label>
          <input type="password" />

          <label htmlFor="">Data nascimento</label>
          <input type="date" />

          <label htmlFor="">Cidade</label>
          <input type="text" />

          <label htmlFor="">Graduação</label>
          <input type="text" />

          <label htmlFor="">Faculdade</label>
          <input type="text" />

          <label htmlFor="">Whatsapp</label>
          <input type="text" />

          <label htmlFor="">Foto de perfil</label>
          <input multiple type="file" />

          <div className="button-content">
            <Link to="/">Alterar</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditarUsuario