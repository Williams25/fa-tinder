import React from 'react'
import Menu from '../../components/Menu'
import Card from '../../components/Card'
import ScrollHorizontal from '../../components/ScrollHorizontal'
import { useHistory } from 'react-router-dom'
import './index.css'

const Home = props => {
  const history = useHistory()

  const handleToEditar = () => history.push('/editar')

  return (
    <div className="container-home">
      <Menu />

      <div className="container-profile">
        <div className="profile">
          <div className="img-profile">
            <img src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" alt="" />

            <div className="info">
              <span>Nome:</span>
              <span>descrição:</span>
              <span>Whatsapp:</span>
              <span>Data nascimento:</span>
              <button onClick={handleToEditar}>Editar Perfil</button>
            </div>
          </div>
        Meus Matchs
        </div>
        <ScrollHorizontal>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollHorizontal>
      </div>
    </div>
  )
}

export default Home