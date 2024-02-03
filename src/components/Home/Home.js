import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Container from '../Layout/Container';
import Header from '../Layout/Header';

import VisualizarDisciplinas from '../Pages/Visualizar_disciplinas/VisualizarDisciplinas';
import OrganizarSemestres from '../Pages/Organizar_Semestres/OrganizarSemestres'; 
import Login from '../Pages/Login/Login'

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/VisualizarDisciplinas' element={<VisualizarDisciplinas/>}/>
          <Route path='/OrganizarSemestres' element={<OrganizarSemestres/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
