import styles from './CardDisciplina.module.css'

import PreRequisito from './PreRequisito'

function CardDisciplina({nomeDisciplina, sigla, categoria, creditos, requisitos}){

    return(
        <div className={styles.cartao_disciplina}>
            <h2 className={styles.nome_disciplina}>{nomeDisciplina}</h2>
            <div className={styles.informacoes_disciplina}>
                <p className={styles.informacao}>{sigla} - {categoria}</p>
                <p className={styles.informacao}>{creditos} créditos</p>
                <PreRequisito requisitos={requisitos}/>
            </div>
        </div>
    )
}

export default CardDisciplina