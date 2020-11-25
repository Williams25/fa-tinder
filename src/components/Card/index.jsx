import React from 'react'
import { Button, Image } from 'react-bootstrap'
import ModalPerfil from '../ModalPerfil'
import 'bootstrap/dist/css/bootstrap.min.css'
import Matchs from '../../services/match'
import './card.css'

const Card = ({data, id_usuario, color}) => {

  const createMatch = body => {
    Matchs.createMatch(body).then(res => {

    }).catch(err => console.error(err))
  }

  const apagarMatch = id => {
    Matchs.desfazer(id).then(res => {

    }).catch(err => console.error(err))
  }

  return (
    <div className="container-card">
      <div className="item-card">
        <div className="img-card">
          <Image src={data.imagem.url} rounded fluid />
        </div>
        <span>{data.nome}</span>
        <span>{data.cidade}</span>
        <div className="button">
          <Button variant={color} onClick={() => {
            if(color === 'warning') {
                // eslint-disable-next-line
              if(confirm('Metch com '+ data.nome)) createMatch({id_usuario: id_usuario, id_match: data.id})
            } else {
              // eslint-disable-next-line
              if(confirm('Desfazer metch com '+ data.nome)) {
                apagarMatch(data.match)
              }
            }
          }}>Match</Button>
          <ModalPerfil data={data} />
        </div>
      </div>
    </div>
  )
}

export default Card