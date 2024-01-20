import styles from './CardDisciplina.module.css'

import PreRequisito from './PreRequisito'

const windowWidthBiggerThan750 = (window.innerWidth > 750)

function CardDisciplina({nomeDisciplina, sigla, categoria, creditos, requisitos}){
    console.log(windowWidthBiggerThan750)

    return(
        <div className={styles.cartao_disciplina}>
            <h2 className={styles.nome_disciplina}>{nomeDisciplina}</h2>
            <div className={styles.informacoes_disciplina}>
                <p className={styles.informacao}>{sigla} - {categoria}</p>
                <p className={styles.informacao}>{creditos} créditos</p>
                <PreRequisito windowWidthBiggerThan750={windowWidthBiggerThan750} requisitos={requisitos}/>
            </div>
        </div>
    )
}

export default CardDisciplina