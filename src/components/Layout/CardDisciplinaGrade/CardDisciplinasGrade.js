import styles from './CardDisciplinasGrade.module.css'

function CardDisciplinasGrade({nomeDisciplina, siglaDisciplinas}){

    function dragStartHandler(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }

    return(
        <div className={styles.cartao_disciplina} id={nomeDisciplina} draggable="true" onDragStart={dragStartHandler}>
            <h2 className={`${styles.nome_disciplina} ${styles.mobile}`}>{siglaDisciplinas}</h2>
            <h2 className={`${styles.nome_disciplina} ${styles.desktop}`}>{siglaDisciplinas}</h2>
        </div>
    )
}

export default CardDisciplinasGrade