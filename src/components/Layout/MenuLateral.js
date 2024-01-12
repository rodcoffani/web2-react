import styles from "./MenuLateral.module.css"

function MenuLateral({ handleMenu }){
    return (
        <div className={`${styles.menu_lateral} + ${styles.active}`}>

        </div>
    )
}

const menu = document.getElementById("menu")

function mudarMenu() {
  if (menu.classList.contains("active") === true) 
    console.log("Fechar menu")
    // fecharMenu()
  else  
    console.log("Abrir menu")
    // abrirMenu()
}

export default MenuLateral