import styles from './CardDisciplinasGrade.module.css'

function CardDisciplinasGrade({nomeDisciplina, siglaDisciplinas, codigoDisciplina}){
    function dragStartHandler(ev) {
        ev.dataTransfer.setData("id", ev.target.id);
    }

    return(
        <div className={styles.cartao_disciplina} id={codigoDisciplina} key={codigoDisciplina}  draggable="true" onDragStart={dragStartHandler}>
            <h2 className={`${styles.nome_disciplina} ${styles.mobile}`}>{siglaDisciplinas}</h2>
            <h2 className={`${styles.nome_disciplina} ${styles.desktop}`}>{nomeDisciplina}</h2>
        </div>
    )
}

export default CardDisciplinasGrade