import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Container from '../Layout/Container';
import Header from '../Layout/Header';

import VisualizarDisciplinas from '../Pages/VisualizarDisciplinas';
import OrganizarSemestres from '../Pages/OrganizarSemestres'; 

import styles from './Home.module.css'

function App() {
  return (
    <Router className={styles.router}>
      <Header/>
      <Container>
        <Routes>
          <Route path='/VisualizarDisciplinas' element={<VisualizarDisciplinas/>}/>
          <Route path='/OrganizarSemestres' element={<OrganizarSemestres/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
