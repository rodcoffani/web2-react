import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Container from '../Layout/Container';
import NavBar from '../Layout/NavBar';

import Visualizar_disciplinas from '../Pages/VisualizarDisciplinas';
import Organizar_semestres from '../Pages/OrganizarSemestres'; 

function App() {
  return (
    <Router>
      <NavBar/>
      <Container>
        <Routes>
          <Route path='/VisualizarDisciplinas' element={<Visualizar_disciplinas/>}/>
          <Route path='/OrganizarSemestres' element={<Organizar_semestres/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
