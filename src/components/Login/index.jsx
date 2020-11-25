import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Usuario from '../../services/usuario'
import './login.css'

const Login = props => {
  const history = useHistory()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleToLogin = () => {
    Usuario.login(usuario, senha).then(res => {
      let data = res.data
      if (String(data).length > 0) {
        localStorage['usuario'] = JSON.stringify(data[0].id)
        history.push('home')
      } else {
        setErro('Falha na autenticação')
      }
    }).catch(err => setErro('Falha na autenticação'))
  }

  const preventFormSubmit = e => e.preventDefault()

  return (
    <div className="form">
      <form onSubmit={preventFormSubmit}>
        <span>Login</span>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
        <div className="erro">
          <span>
            {erro}
          </span>
        </div>
        <div className="button-content">
          <button onClick={handleToLogin}>Login</button>
          <Link to="cadastrar-usuario">Cadastrar-se</Link>
        </div>
      </form>
    </div>
  )
}

export default Login