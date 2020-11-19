import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Login = lazy(() => import('../pages/Login'))
const CadastrarUsuario = lazy(() => import('../pages/CadastrarUsuario'))
const Home = lazy(() => import('../pages/Home'))
const Procurar = lazy(() => import('../pages/Procurar'))
const VerPerfil = lazy(() => import('../pages/VerPerfil'))
const EditarUsuario = lazy(() => import('../pages/EditarUsuario'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/cadastrar-usuario" component={CadastrarUsuario}/>
        <Route path="/home" component={Home}/>
        <Route path="/procurar" component={Procurar}/>
        <Route path="/ver-perfil" component={VerPerfil}/>
        <Route path="/editar" component={EditarUsuario}/>
      </Switch>
    </Suspense>
  </Router>
)

export default App