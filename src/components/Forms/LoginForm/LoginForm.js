import React, { useState } from 'react';
import { MessageBanner } from '../../messageBanner';
import styles from './LoginForm.module.css';
import TextInput from '../TextInput/TextInput';

function LoginForm({ handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleLogin(event) {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        ra: email,
        senha: password,
      }),
    };

    try {
      const response = await fetch('http://localhost:8000/login', requestOptions);
      if (!response.ok) {
        throw new Error('Not ok');
      }

      const conteudo = await response.json();

      if (conteudo && conteudo.erro && conteudo.erro === 'aluno não encontrado') {
        console.log('Aluno não encontrado');
        setErrorMessage('RA não encontrado');
      } else if (conteudo && conteudo.erro && conteudo.erro === 'senha incorreta') {
        console.log('Senha incorreta');
        setErrorMessage('Senha incorreta');
      } else {
        handleSubmit(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Erro ao realizar o login');
    }
  }

  return (
    <div className={styles.login_content}>
      <h1>Login</h1>
      {errorMessage && <MessageBanner type='error' content={errorMessage} />}
      <form className={styles.login_form} onSubmit={handleLogin}>
        <TextInput label='RA' value={email} setter={setEmail} />

        <TextInput label='Senha' value={password} setter={setPassword} isPassword={true} />

        <button className={styles.button} type='submit'>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;