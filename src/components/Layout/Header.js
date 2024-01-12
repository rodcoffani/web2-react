import styles from './Header.module.css'
import menuStyles from './MenuLateral.module.css'

import MenuLateral from "./MenuLateral"
import NavBar from "./NavBar"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    
    const [menuAberto, setMenuAberto] = useState(false) 
    
    const teste = menuAberto ? 'aberto' : 'fechado'

    return(
        <div className={styles.header}>
            <NavBar handleMenu={() => {setMenuAberto(!menuAberto)}}/>
            <menu className={`${menuStyles.menu_lateral} ${menuAberto ? menuStyles.active : ''}`}>
                <ul>
                <li><Link to={'/VisualizarDisciplinas'} onClick={() => {setMenuAberto(!menuAberto)}}>Visualizar Disciplinas</Link></li>
                <li><Link to={'/OrganizarSemestres'} onClick={() => {setMenuAberto(!menuAberto)}}>Organizar Semestres</Link></li>
                </ul>
            </menu>
        </div> 
    )
}


export default Header