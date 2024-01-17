import styles from './CardDisciplina.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function CardDisciplina({nomeDisciplina, sigla, categoria, creditos, requisito}){

    const check = <FontAwesomeIcon icon={faCheck}/>

    return(
        <div className={styles.cartao_disciplina}>
            <h2 className={styles.nome_disciplina}>{nomeDisciplina}</h2>
            <div className={styles.informacoes_disciplina}>
                <p className={styles.informacao}>{sigla} - {categoria}</p>
                <p className={styles.informacao}>{creditos} créditos</p>
                <p className={styles.informacao}>Pré-requisito: {(requisito.length == 0) ? <FontAwesomeIcon icon={faCheck} className={styles.check}/> : <FontAwesomeIcon icon={faXmark} className={styles.xmark}/>} </p>
            </div>
        </div>
    )
}

export default CardDisciplina