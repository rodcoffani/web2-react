import MenuLateral from "../MenuLateral"
import NavBar from "../NavBar"

import { useState } from 'react'

function Header() {
    
    const [menuAberto, setMenuAberto] = useState(false) 
    
    return(
        <div className="absolute w-full h-full">
            <NavBar handleMenu={() => {setMenuAberto(!menuAberto)}}/>
            <MenuLateral handleMenu={() => {setMenuAberto(!menuAberto)}} menuAberto={menuAberto}/>
        </div> 
    )
}


export default Header