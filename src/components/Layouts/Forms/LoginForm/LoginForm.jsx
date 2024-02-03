import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import TextInput from '../../Fields/TextInput/TextInput';
import userEvent from '@testing-library/user-event';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utilize useNavigate para obter a função de navegação

  async function handleLogin(event) {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        'ra': email,
        'senha': password
      }),
    };

    fetch('http://localhost:8000/login', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Not ok');
        }
        return response.json();
      })
      .then(conteudo => {
        if (conteudo && conteudo.erro && conteudo.erro === "aluno não encontrado") {
          console.log('Aluno não encontrado');
        } else if (conteudo && conteudo.erro && conteudo.erro === "senha incorreta") {
          console.log('Senha incorreta');
        } else {
          navigate('/VisualizarDisciplinas/${email}');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className='login-content'>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <TextInput label="RA" value={email} setter={setEmail} />
        <TextInput label="Senha" value={password} setter={setPassword} isPassword={true} />
        <button className="button" type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginForm;
