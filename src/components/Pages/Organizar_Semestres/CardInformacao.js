import styles from './CardInformacao.module.css'

function CardInformacao({texto}){

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    return(
        <p className={styles.card_informacao} id={texto} draggable="true" ondragstart={drag}>{texto}</p>
    )
}

export default CardInformacao