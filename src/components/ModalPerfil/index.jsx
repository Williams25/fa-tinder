import React, { useState } from 'react'
import { Modal, Button, Container, Image } from 'react-bootstrap'
import CategoriasUsuario from '../../services/categoriaUsuario'
import 'bootstrap/dist/css/bootstrap.min.css'
import LogoWhatsapp from 'react-ionicons/lib/LogoWhatsapp'
require('./index.css')

const ModalPerfil = ({ data }) => {

  const [show, setShow] = useState(false)
  const [categorias, setCategorias] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const contato = whatsapp => {
    // eslint-disable-next-line
    location.href = `https://wa.me/${whatsapp}`
  }

  const listaCategorias = id => {
    CategoriasUsuario.lista(id).then(res => {
      setCategorias(res.data)
    }).catch(err => console.log(err))
  }

  return (
    <>
      <Button variant="primary" onClick={() => {
        handleShow()
        listaCategorias(data.id)
      }}>
        Ver perfil
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div className="container-img">
              <Image src={data.imagem.url} rounded fluid />
            </div>
            <hr />
            <p>Nome: {data.nome}</p>
            <p>Cidade: {data.cidade}</p>
            <p>Faculdade: {data.faculdade}</p>
            <p>Graduação: {data.graduacao}</p>
            <p>Descriçao: {data.descricao}</p>
            <p>Whatsapp: {data.whatsapp}</p>
            <p>Categorias: {
              categorias.length > 0 ?
                categorias.map(categoria => {
                  return (
                    <span key={categoria.categoria.id_categoria}>{' '}{categoria.categoria.descricao}{' '}</span>
                  )
                }) :
                'Sem categorias'
            }
            </p>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={() => contato(data.whatsapp)}>
            <div className="contato">
              <LogoWhatsapp fontSize="20px" color="#fff" />
              <span>Entrar em contato</span>
            </div>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalPerfil