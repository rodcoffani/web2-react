import styles from './DiaSemana.module.css'

function DiaSemana({nomeDia}){

    function allowDrop(e){
        e.preventDefault()
    }

    function drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("id");
        e.currentTarget.appendChild(document.getElementById(data));
    }

    function dragStartHandler(ev) {
        ev.dataTransfer.setData("id", ev.target.id);
    }

    return(
        <div className={styles.dia}>
            <div className={styles.nome_dia}>{nomeDia}</div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop} onDragStart={dragStartHandler}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop} onDragStart={dragStartHandler}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop} onDragStart={dragStartHandler}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop} onDragStart={dragStartHandler}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop} onDragStart={dragStartHandler}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop} onDragStart={dragStartHandler}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop} onDragStart={dragStartHandler}></div>
        </div>
    )
}

export default DiaSemana