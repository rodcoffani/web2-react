import styles from './Header.module.css'
import menuStyles from './MenuLateral.module.css'

import MenuLateral from "./MenuLateral"
import NavBar from "./NavBar"

function Header() {
    const menu = document.getElementById("menu")
    
    function mudarMenu() {
        if (menu.classList.contains("menu_lateral")) 
            console.log("Fechar menu")  
            // fecharMenu()
        else  
            console.log("Abrir menu")
            // abrirMenu()
    }
    
    return(
        <div className={styles.header}>
            <NavBar handleMenu={mudarMenu}/>
            <div className={`${menuStyles.menu_lateral} + ${menuStyles.active}`} id='menu'>

            </div>
        </div>
    )
}


export default Header