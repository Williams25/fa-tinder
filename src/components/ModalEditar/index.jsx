import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Usuario from '../../services/usuario'
import ImagemUp from '../../services/imagem'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const ModalEditar = ({ data }) => {

  const [show, setShow] = useState(false);
  const [nextItemForm, setNextItemForm] = useState(false)
  // eslint-disable-next-line
  const [images, setImages] = useState([])
  const [previewImages, setPreviewImages] = useState([])
  // eslint-disable-next-line
  const [nome, setNome] = useState(data.nome)
  // eslint-disable-next-line
  const [email, setEmail] = useState(data.email)
  const [senha, setSenha] = useState(data.senha)
  const [dataNasc, setDataNasc] = useState(data.dataNascimento)
  const [cidade, setCidade] = useState(data.cidade)
  const [graduacao, setGraduacao] = useState(data.graduacao)
  const [faculdade, setFaculdade] = useState(data.faculdade)
  const [whatsapp, setWhatsapp] = useState(data.whatsapp)
  const [descricao, setDescricao] = useState(data.descricao)
  // eslint-disable-next-line
  const [idUsuario, setIdUsuario] = useState(data.id)
  const [erro, setErro] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleForm = visible => setNextItemForm(visible)
  const preventFormSubmit = e => e.preventDefault()
  const handleSelectImages = (event) => {
    if (!event.target.files) return

    const selectImages = Array.from(event.target.files)
    setImages(selectImages)

    const selectImagesPreview = selectImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectImagesPreview)
  }

  const alterar = () => {
    Usuario.altera({
      "id": idUsuario,
      "nome": nome,
      "dataNascimento": dataNasc,
      "cidade": cidade,
      "graduacao": graduacao,
      "faculdade": faculdade,
      "whatsapp": whatsapp,
      "email": email,
      "senha": senha,
      "descricao": descricao
    }).then(res => {
      const { message } = res.data
      setErro(message)
    }).catch(err => setErro('Erro, tente novamente'))
  }

  const alterarImagem = () => {
    let data = new FormData()
    data.append('imagens', images[0])
    data.append('id_usuario', idUsuario)
    if (previewImages.length > 0) {
      ImagemUp.upload(data).then(res => {
      }).catch(err => console.error(err.message))
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar perfil
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={preventFormSubmit}>
            {
              !nextItemForm ? (
                <>
                  <label htmlFor="Nome">Nome</label>
                  <input type="text" id="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                  <label htmlFor="E-mail">E-mail</label>
                  <input type="email" id="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label htmlFor="Senha">Senha</label>
                  <input type="password" id="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                  />

                  <label htmlFor="nascimento">Data nascimento</label>
                  <input type="date" id="nascimento"
                    value={dataNasc}
                    onChange={e => setDataNasc(e.target.value)}
                  />

                  <label htmlFor="Cidade">Cidade</label>
                  <input type="text" id="Cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                  />

                  <label htmlFor="des">Descrição</label>
                  <textarea name="" id="des"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                  >

                  </textarea>
                </>
              )
                :
                (
                  <>
                    <label htmlFor="Graduacao">Graduação</label>
                    <input type="text" id="Graduacao"
                      value={graduacao}
                      onChange={e => setGraduacao(e.target.value)}
                    />

                    <label htmlFor="Faculdade">Faculdade</label>
                    <input type="text" id="Faculdade"
                      value={faculdade}
                      onChange={e => setFaculdade(e.target.value)}
                    />

                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input type="text" id="whatsapp"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />


                    <div className="images-container">
                      <label htmlFor="images">Clique para inserir foto de perfil</label>
                      {
                        previewImages.map(image => {
                          return (
                            <img key={String(image)} src={String(image)} alt={String(image)} />
                          )
                        })
                      }
                    </div>

                    <input multiple type="file" id="images" onChange={handleSelectImages} />
                  </>
                )
            }
            <div className="erro">
              <span>
                {erro}
              </span>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          {
            !nextItemForm ?
              <Button variant="warning" onClick={() => handleForm(true)}>Proximo</Button>
              :
              (
                <>
                  <Button variant="info" onClick={() => handleForm(false)}>Voltar</Button>
                  <Button variant="primary" onClick={() => {
                    alterar()
                    alterarImagem()
                  }}>Salvar</Button>
                </>
              )
          }
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalEditar