import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function NavBar({handleMenu}){
  return(
    <nav className="fixed h-[10%] z-20 w-full bg-[#E82436] py-2.5 grid grid-cols-[20%_60%_20%] items-center justify-center select-none md:grid-cols-[20%_40%_20%_20%]">
    <button onClick={handleMenu} className="border-0 bg-transparent text-white text-2xl md:hidden" id='botao_menu'><FontAwesomeIcon icon={faBars}/></button>
    
    <Link to={'/'} className="text-white flex justify-center text-3xl no_underline">UFSCAR</Link>

    <input type='text' placeholder='Buscar Disciplina' className={`border-0 rounded-3xl w-[90%] outline-0 p-[12px_0_12px_15px] hidden md:block`}/>
    <Link className={`md:w-[70%] no-underline text-center text-white rounded-3xl p-2 hover:shadow-[0_0_5px_1px] hover:shadow-white hidden md:block`} to={'/OrganizarSemestres'}>Organizar Disciplinas</Link>
    <Link className={`md:w-[70%] no-underline text-center text-white rounded-3xl p-2 hover:shadow-[0_0_5px_1px] hover:shadow-white hidden md:block`} to={'/'}>Visualizar Disciplinas</Link>
    

    <button className="border-0 bg-transparent text-white text-2xl md:hidden"><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
  </nav>
  )
}


export default NavBar