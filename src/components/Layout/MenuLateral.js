import styles from "./MenuLateral.module.css"

import { Link } from 'react-router-dom'


function MenuLateral({ handleMenu, menuAberto}){
  return (
    <ul className={`${styles.menu_lateral} ${menuAberto ? styles.active : ''}`}>
      <li ><Link className={styles.link} to={'/VisualizarDisciplinas'} onClick={handleMenu}>Visualizar Disciplinas</Link></li>
      <li ><Link className={styles.link} to={'/OrganizarSemestres'} onClick={handleMenu}>Organizar Semestres</Link></li>
    </ul>
  )
}



export default MenuLateral