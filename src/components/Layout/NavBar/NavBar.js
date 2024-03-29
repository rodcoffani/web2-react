import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function NavBar({handleMenu}){
  function logoutHandler() {
    sessionStorage.clear();
    window.location.reload();
  }

  return(
    <nav className={styles.navbar}>
    <button onClick={handleMenu} className={styles.icon_button} id='botao_menu'><FontAwesomeIcon icon={faBars}/></button>
    
    <Link to={'/'} className={styles.ufscar_logo}>UFSCAR</Link>

    <input type='text' placeholder='Buscar Disciplina' className={`${styles.search_bar} ${styles.desktop}`}/>
    <Link className={`${styles.link} ${styles.desktop}`} to={'/'}>Visualizar Disciplinas</Link>
    <Link className={`${styles.link} ${styles.desktop}`} to={'/OrganizarSemestres'}>Organizar Disciplinas</Link>
    <a href='#' className={`${styles.link} ${styles.desktop}`} onClick={logoutHandler}>Logout</a>
    

    <button className={styles.icon_button}><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
  </nav>
  )
}


export default NavBar