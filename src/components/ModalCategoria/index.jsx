import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Categoria from '../../services/categoria'
import CategoriaUsuario from '../../services/categoriaUsuario'
require('./index.css')

const ModalCategoria = ({data}) => {
  const [show, setShow] = useState(false)
  const [categorias, setCategorias] = useState([])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const listaCategorias = () => {
    Categoria.lista().then(res => {
      setCategorias(res.data)
    }).catch(err => console.log(err))
  }

  const categoriaBindUsuario = body => {
    CategoriaUsuario.create(body).then(res => {

    }).catch(err => console.log(err))
  }

  return (
    <>
      <Button variant="info" onClick={() => {
        handleShow()
        listaCategorias()
      }} className="ml-3">
        Grupos
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Escolher Grupos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-categoria">
            {
              categorias.map(categoria => {
                return (
                  <div className="categoria-card" onClick={() => categoriaBindUsuario({ id_usuario: data,id_categoria: categoria.id })}>
                    <span>{categoria.descricao}</span>
                  </div>
                )
              })
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCategoria