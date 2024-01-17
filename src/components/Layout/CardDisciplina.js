import styles from './CardDisciplina.module.css'

function CardDisciplina({nomeDisciplina, sigla, categoria, creditos, requisito}){
    return(
        <div className={styles.cartao_disciplina}>
            <h2 className={styles.nome_disciplina}>{nomeDisciplina}</h2>
            <div className={styles.informacoes_disciplina}>
                <p className={styles.informacao}>{sigla} - {categoria}</p>
                <p className={styles.informacao}>{creditos} créditos</p>
                <p className={styles.informacao}>{`${(requisito != null) ? 'Possui Pré-Requisito' : 'Não Possui Pré-Requisito'}`}</p>
            </div>
            {console.log(requisito)}
        </div>
    )
}

export default CardDisciplina