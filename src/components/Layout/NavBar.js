import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function NavBar({handleMenu}){
  return(
    <nav className={styles.navbar}>
    <button onClick={mudarMenu} className={styles.icon_button} id='botao_menu'><FontAwesomeIcon icon={faBars}/></button>

    <Link to={'/Visualizar_disciplinas'} className={styles.ufscar_logo}>UFSCAR</Link>

    <input type='text' placeholder='Buscar Disciplina' className={styles.search_bar}/>

    <button className={styles.icon_button}><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
  </nav>
  )

  function mudarMenu() {
    handleMenu()
  }
}


export default NavBar