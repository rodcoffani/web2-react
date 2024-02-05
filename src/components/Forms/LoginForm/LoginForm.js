import React, { useState } from 'react';
import { MessageBanner } from '../../messageBanner';
import styles from './LoginForm.module.css';
import TextInput from '../TextInput/TextInput';

async function loginUser(credentials) {
  return fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function LoginForm({ setLogado }) {
  const [ra, setRA] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      ra,
      password,
    });

    if (!response.success) {
      setErrorMessage('Not OK');
    }

    setLogado(response.token);
  };

  return (
    <div className={styles.login_content}>
      <h1>Login</h1>
      {errorMessage && <MessageBanner type='error' content={errorMessage} />}
      <form className={styles.login_form} onSubmit={handleLogin}>
        <TextInput label='RA' value={ra} setter={setRA} />

        <TextInput
          label='Senha'
          value={password}
          setter={setPassword}
          isPassword={true}
        />

        <button className={styles.button} type='submit'>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
