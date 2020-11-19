import React from 'react'
import Menu from '../../components/Menu'
import './index.css'

const VerPerfil = props => {
  return (
    <div className="container-home">
      <Menu />

      <div className="container-profile">
        <div className="profile">
          <div className="img-profile">
            <img src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" alt="" />

            <div className="info">
              <span>Nome:</span>
              <span>Descrição:</span>
              <span>Whatsapp:</span>
              <span>Data nascimento:</span>
              <span>Graduação:</span>
              <span>Faculdade:</span>
              <span>Cidade:</span>
              <button>Whatsapp</button>
              <button>Match</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerPerfil