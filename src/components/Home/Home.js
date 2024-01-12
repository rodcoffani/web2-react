import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Container from '../Layout/Container';
import Header from '../Layout/Header';

import Visualizar_disciplinas from '../Pages/VisualizarDisciplinas';
import Organizar_semestres from '../Pages/OrganizarSemestres'; 

import styles from './Home.module.css'

function App() {
  return (
    <Router className={styles.router}>
      <Header></Header>
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
