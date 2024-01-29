import styles from './CardInformacao.module.css'

function CardInformacao({texto}){
    return(
        <p className={styles.card_informacao}>{texto}</p>
    )
}

export default CardInformacao