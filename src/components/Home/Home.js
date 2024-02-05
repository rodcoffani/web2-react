import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';

import Login from '../Pages/Login/Login'

import Container from '../Layout/Container/Container';
import Header from '../Layout/Header/Header';

import VisualizarDisciplinas from '../Pages/VisualizarDisciplinas/VisualizarDisciplinas';
import OrganizarSemestres from '../Pages/OrganizarSemestres/OrganizarSemestres'; 

function App() {

  const [logado, setLogado] = useState(false)

  return (
    <Router>
      {!logado && <Login handleSubmit={(status) => setLogado(status)} logado={logado}/>}
      {logado && (
        <>
          <Header/>
          <Container>
            <Routes>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/' element={<VisualizarDisciplinas/>}/>
              <Route path='/OrganizarSemestres' element={<OrganizarSemestres/>}/>
            </Routes>
          </Container>
        </>
      )}
    </Router>
  )
}

export default App;
