import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import TextInput from '../../Fields/TextInput/TextInput';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    console.log(email, password)
  }
  
  return (
  <div className='login-content'>
    <h1>Login</h1>
    <form className="login-form" onSubmit={handleLogin}>
      <TextInput label="RA" value={email} setter={setEmail} />

      <TextInput label="Senha" value={password} setter={setPassword} isPassword={true} />
      
      <button className="button" type="submit">Entrar</button>
      <Link className="back-link" to="/register">
        <span>Não tenho cadastro</span>
      </Link>
    </form>
  </div>
  )
}

export default LoginForm;