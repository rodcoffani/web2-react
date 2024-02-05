import styles from './DiaSemana.module.css'

function DiaSemana({nomeDia}){

    function allowDrop(e){
        e.preventDefault()
    }

    function drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.currentTarget.appendChild(document.getElementById(data));
    }

    return(
        <div className={styles.dia}>
            <div className={styles.nome_dia}>{nomeDia}</div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop}></div>
            <div className={styles.horarios} onDragOver={allowDrop} onDrop={drop}></div>
        </div>
    )
}

export default DiaSemana