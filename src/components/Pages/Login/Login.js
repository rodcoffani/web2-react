// Página de Login com imagem de fundo e formulário de login

import React from 'react'
import styles from './Login.module.css'

import LoginForm from '../../Layouts/Forms/LoginForm/LoginForm'

function Login({handleSubmit, logado}) {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_background}>
        <div className={styles.login_background_filter}>
        </div>
      </div>
      <div className={styles.login_form_container}>
        <LoginForm handleSubmit={handleSubmit} logado={logado}/>
      </div>
    </div>
  )
}

export default Login;