import styles from "./MenuLateral.module.css"

import { Link } from 'react-router-dom'


function MenuLateral({ handleMenu, menuAberto}){
  function logoutHandler() {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <ul className={`${styles.menu_lateral} ${menuAberto ? styles.active : ''}`}>
      <li><Link className={styles.link} to={'/'} onClick={handleMenu}>Visualizar Disciplinas</Link></li>
      <li><Link className={styles.link} to={'/OrganizarSemestres'} onClick={handleMenu}>Organizar Semestres</Link></li>
      <li><a href='#' className={`${styles.desktop} ${styles.link}`} onClick={logoutHandler}>Logout</a></li>
    </ul>
  )
}



export default MenuLateral