import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import TextInput from '../../Fields/TextInput/TextInput'

function LoginForm({handleSubmit, logado}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

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
          handleSubmit(true);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  return (
  <div className={styles.login_content}>
    <h1>Login</h1>
    <form className={styles.login_form} onSubmit={handleLogin}>
      <TextInput label="RA" value={email} setter={setEmail} />

      <TextInput label="Senha" value={password} setter={setPassword} isPassword={true} />
      
      <button className={styles.button} type="submit" onClick={handleLogin}>Entrar</button>

    </form>
  </div>
  )
}

export default LoginForm