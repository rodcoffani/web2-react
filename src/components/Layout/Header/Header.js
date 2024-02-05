import styles from './Header.module.css'

import MenuLateral from "../MenuLateral/MenuLateral"
import NavBar from "../NavBar/NavBar"

import { useState } from 'react'

function Header() {
    
    const [menuAberto, setMenuAberto] = useState(false) 
    
    return(
        <div className={styles.header}>
            <NavBar handleMenu={() => {setMenuAberto(!menuAberto)}}/>
            <MenuLateral handleMenu={() => {setMenuAberto(!menuAberto)}} menuAberto={menuAberto}/>
        </div> 
    )
}


export default Header