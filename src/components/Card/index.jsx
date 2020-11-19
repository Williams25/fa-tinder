import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'

const Card = props => {
  const history = useHistory()
  
  const hanldlePerfile = () => history.push('/ver-perfil')
  // 
  return (
    <div className="container-card">
      <div className="item-card">
        <div className="img-card">
          <img src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" alt="" />
        </div>
        <h3>Nome</h3>
        <div className="button">
          <button>Match</button>
          <button onClick={hanldlePerfile}>Ver Perfil</button>
        </div>
      </div>
    </div>
  )
}

export default Card