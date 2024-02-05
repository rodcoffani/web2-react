import { Link } from 'react-router-dom'


function MenuLateral({ handleMenu, menuAberto}){
  return (
    <ul className={`fixed top-[10%] left-[-100%] h-full w-full bg-[#cccccc] items-center flex flex-col pt-[50px] z-10 gap-y-[15px] list-none md:w-1/2 md:left-[-50%] transition-all ease-in-out delay-200 ${menuAberto ? 'translate-x-full' : ''}`}>
      <li className="rounded-full bg-[#FFDAD8] hover:bg-[#E4C3C3] py-4 px-8"><Link className="no-underline text-base font-medium text-black" to={'/'} onClick={handleMenu}>Visualizar Disciplinas</Link></li>
      <li className="rounded-full bg-[#FFDAD8] hover:bg-[#E4C3C3] py-4 px-8"><Link className="no-underline text-base font-medium text-black" to={'/OrganizarSemestres'} onClick={handleMenu}>Organizar Semestres</Link></li>
    </ul>
  )
}



export default MenuLateral