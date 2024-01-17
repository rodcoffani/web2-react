import styles from "./VisualizarDisciplinas.module.css"

function VisualizarDisciplinas() {
    return (
        <div className={styles.cartao_disciplina}>
            <h2 className={styles.nome_disciplina}>Introdução ao Pensamento Algorítmico</h2>
            <div className={styles.informacoes_disciplina}>
                <p className={styles.informacao}>LD - Obreigatória</p>
                <p className={styles.informacao}>8 créditos</p>
                <p className={styles.informacao}>Não Possui Pré-Requisito</p>
            </div>
        </div>
    )
}

export default VisualizarDisciplinas