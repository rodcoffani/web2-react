import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import TextInput from '../../Fields/TextInput/TextInput'

function LoginForm({handleSubmit, logado}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)
  }
  console.log(logado)
  return (
  <div className={styles.login_content}>
    <h1>Login</h1>
    <form className={styles.login_form} onSubmit={handleLogin}>
      <TextInput label="RA" value={email} setter={setEmail} />

      <TextInput label="Senha" value={password} setter={setPassword} isPassword={true} />
      
      <button className={styles.button} type="submit" onClick={handleSubmit}>Entrar</button>
      <Link className={styles.back_link} to="/register">
        <span>Não tenho cadastro</span>
      </Link>
    </form>
  </div>
  )
}

export default LoginForm