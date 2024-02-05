import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import useToken from '../auth/useToken';

import Login from '../Pages/Login/Login';

import Container from '../Layout/Container/Container';
import Header from '../Layout/Header/Header';

import VisualizarDisciplinas from '../Pages/VisualizarDisciplinas/VisualizarDisciplinas';
import OrganizarSemestres from '../Pages/OrganizarSemestres/OrganizarSemestres';

function App() {
  const { token, setToken } = useToken();

  if (!token) { 
    return <Login setLogado={setToken} />;
  }

  return (
    <Router basename='web2-react'>
      <>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<VisualizarDisciplinas />} />
            <Route
              path='/OrganizarSemestres'
              element={<OrganizarSemestres />}
            />
          </Routes>
        </Container>
      </>
    </Router>
  );
}

export default App;
