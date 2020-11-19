import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Login = props => {

  const preventFormSubmit = e => e.preventDefault()

  return (
    <div className="form">
      <form onSubmit={preventFormSubmit}>
        <span>Login</span>
        <label htmlFor="">E-mail</label>
        <input type="text" />
        <label htmlFor="">Senha</label>
        <input type="text" />

        <div className="button-content">
          <Link to="home">Login</Link>
          <Link to="cadastrar-usuario">Cadastrar-se</Link>
        </div>
      </form>
    </div>
  )
}

export default Login