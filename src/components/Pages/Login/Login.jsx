// Página de Login com imagem de fundo e formulário de login

import React from 'react';
import './Login.css';

import LoginForm from '../../Layouts/Forms/LoginForm/LoginForm';

function Login() {
  return (
    <div className='login-container'>
      <div className="login-background">
        <div className="login-background-filter">
        </div>
      </div>
      <div className="login-form-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;