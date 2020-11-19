import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const CadastrarUsuario = props => {

  const [nextItemForm, setNextItemForm] = useState(false)
  // eslint-disable-next-line
  const [images, setImages] = useState([])
  const [previewImages, setPreviewImages] = useState([])
  
  const [email, setEmail] = useState('')
  const [senha,setSenha] = useState('')
  const [dataNasc,setDataNasc] = useState('')
  const [cidade, setCidade] = useState('')
  const [graduacao, setGraduacao] = useState('')
  const [faculdade, setFaculdade] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  

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
    console.log({
      email,
      senha,
      dataNasc,
      cidade,
      graduacao,
      faculdade,
      whatsapp,
      images
    })
  }

  return (
    <div className="form">
      <form onSubmit={preventFormSubmit}>
        <span>Cadastrar-se</span>
        {
          !nextItemForm ? (
            <>
              <label htmlFor="E-mail">E-mail</label>
              <input type="text" id="E-mail"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
              <label htmlFor="Senha">Senha</label>
              <input type="password" id="Senha" 
                value={senha}
                onChange={e=>setSenha(e.target.value)}
              />

              <label htmlFor="nascimento">Data nascimento</label>
              <input type="date" id="nascimento" 
                value={dataNasc}
                onChange={e=>setDataNasc(e.target.value)}
              />

              <label htmlFor="Cidade">Cidade</label>
              <input type="text" id="Cidade" 
                value={cidade}
                onChange={e=>setCidade(e.target.value)}
              />
            </>
          )
            :
            (
              <>
                <label htmlFor="Graduacao">Graduação</label>
                <input type="text" id="Graduacao" 
                  value={graduacao}
                  onChange={e=>setGraduacao(e.target.value)}
                />

                <label htmlFor="Faculdade">Faculdade</label>
                <input type="text" id="Faculdade" 
                  value={faculdade}
                  onChange={e=>setFaculdade(e.target.value)}
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