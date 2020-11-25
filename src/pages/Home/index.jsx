import React, { useState, useEffect } from 'react'
import Menu from '../../components/Menu'
import Card from '../../components/Card'
import ScrollHorizontal from '../../components/ScrollHorizontal'
import { useHistory } from 'react-router-dom'
import Usuario from '../../services/usuario'
import Match from '../../services/match'
import CategoriasUsuario from '../../services/categoriaUsuario'
import ModalEditar from '../../components/ModalEditar'
import ModalCategoria from '../../components/ModalCategoria'
import { Button } from 'react-bootstrap'
import './home.css'

const Home = props => {
  const history = useHistory()

  const [perfilUser, setPerfilUser] = useState([])
  const [pessoas, setPessoas] = useState([])
  const [categorias, setCategorias] = useState([])
  const [idUsuario, setIdUsuario] = useState('')
  const [burguer, setBurguer] = useState(false)

  const perfil = () => {
    let id
    try {
      id = JSON.parse(localStorage['usuario'])
      setIdUsuario(id)
    } catch (error) {
      return history.push('/')
    }
    Usuario.perfil(id).then(res => {
      let data = res.data
      localStorage['imagem'] = JSON.stringify(data[0].imagem.id)
      setPerfilUser(data)

    }).catch(err => console.error(err))
  }

  const listaMatch = () => {
    let id
    try {
      id = JSON.parse(localStorage['usuario'])
    } catch (error) {
      return history.push('/')
    }
    Match.match(id).then(res => {
      setPessoas(res.data)
    }).catch(err => console.error(err))
  }

  const listaCategorias = () => {
    let id
    try {
      id = JSON.parse(localStorage['usuario'])
      setIdUsuario(id)
    } catch (error) {
      return history.push('/')
    }
    CategoriasUsuario.lista(id).then(res => {
      setCategorias(res.data)
    }).catch(err => console.error(err))
  }

  useEffect(() => {
    perfil()
    listaMatch()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container-home">
      <Menu />

      <div className="container-profile">
        <div className="profile">
          {
            perfilUser.map(user => {
              return (
                <div className="img-profile">
                  <div className="info">
                    <img key={user.id} src={user.imagem.url} alt="" />
                    <span>Nome: {user.nome}</span>
                    <span>Descrição: {user.descricao}</span>
                    <span>Whatsapp: {user.whatsapp}</span>
                    <span>Data nascimento: {user.dataNascimento}</span>
                    <Button variant="warning" onClick={() => {
                      listaCategorias()
                      setBurguer(!burguer)
                    }}>Ver grupos</Button>
                    {
                      burguer &&
                      categorias.map(categoria => {
                        return (
                          <span key={categoria.categoria.id_categoria}>{' '}{categoria.categoria.descricao}{' '}</span>
                        )
                      })
                    }
                    <div className="mt-2">
                      <ModalEditar data={user} />
                      <ModalCategoria data={idUsuario} />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="subtitle">
          <span>Meus Matchs - {pessoas.length}</span>
        </div>

        <ScrollHorizontal>
          {
            pessoas.map(pessoas => {
              return (
                <Card
                  key={pessoas.id}
                  data={pessoas}
                  id_usuario={idUsuario}
                  color={'danger'}
                />
              )
            })
          }
        </ScrollHorizontal>
      </div>
    </div>
  )
}

export default Home