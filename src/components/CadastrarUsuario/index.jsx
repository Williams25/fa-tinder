import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Usuario from '../../services/usuario'
import './cadastrar.css'

const CadastrarUsuario = props => {

  const [nextItemForm, setNextItemForm] = useState(false)
  // eslint-disable-next-line
  const [images, setImages] = useState([])
  const [previewImages, setPreviewImages] = useState([])

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [cidade, setCidade] = useState('')
  const [graduacao, setGraduacao] = useState('')
  const [faculdade, setFaculdade] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [descricao, setDescricao] = useState('')
  const [erro, setErro] = useState('')

  const handleSelectImages = (event) => {
    if (!event.target.files) return

    const selectImages = Array.from(event.target.files)
    setImages(selectImages)

    const selectImagesPreview = selectImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectImagesPreview)
  }

  const handleForm = visible => setNextItemForm(visible)
  const preventFormSubmit = e => e.preventDefault()

  const cadastrar = () => {
    const data = new FormData()
    data.append('nome', nome)
    data.append('email', email)
    data.append('senha', senha)
    data.append('dataNascimento', dataNasc)
    data.append('cidade', cidade)
    data.append('graduacao', graduacao)
    data.append('faculdade', faculdade)
    data.append('whatsapp', whatsapp)
    data.append('descricao', descricao)
    data.append('imagens', images[0])
    console.log(data)
    Usuario.cadastrar(data).then(res => {
      const { message } = res.data
      if (message === 'Cadastrado') return setErro(message)
      setErro('Erro tente novamente')
    }).catch(err => setErro('Erro tente novamente'))
  }

  return (
    <div className="form">
      <form onSubmit={preventFormSubmit}>
        <span>Cadastrar-se</span>
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

                <label htmlFor="images">Clique para inserir foto de perfil</label>

                <div className="images-container">
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
        <div className="button-content">
          {
            !nextItemForm ?
              <button onClick={() => handleForm(true)}>Proximo</button>
              :
              <>
                <button onClick={() => handleForm(false)}>Voltar</button>
                <button onClick={cadastrar}>Cadastrar-se</button>
              </>
          }
          <Link to="/">Ir para Login</Link>
        </div>
      </form>
    </div>
  )
}

export default CadastrarUsuario