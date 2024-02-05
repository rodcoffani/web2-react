import styles from './CardDisciplinasGrade.module.css'

function CardDisciplinasGrade({nomeDisciplina}){

    function dragStartHandler(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }

    return(
        <div className={styles.cartao_disciplina} id={nomeDisciplina} draggable="true" onDragStart={dragStartHandler}>
            <h2 className={styles.nome_disciplina}>{nomeDisciplina}</h2>
        </div>
    )
}

export default CardDisciplinasGrade