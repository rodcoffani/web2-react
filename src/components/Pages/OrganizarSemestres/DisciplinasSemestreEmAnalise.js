import { useEffect, useState } from 'react';
import MostrarDisciplinasGrade from '../VisualizarDisciplinas/MostrarDisciplinasGrade'
import styles from './DisciplinasSemestreEmAnalise.module.css'

function DisciplinasSemestreEmAnalise({semestreAnalisado}){
    const [grupos, setGrupos] = useState([]);

    function allowDrop(e){
        e.preventDefault()
    }

    function drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("id");
        e.currentTarget.appendChild(document.getElementById(data));
    }

    useEffect(() => {
        async function getMaterias() {
            const response = await fetch("http://localhost:8000/materias");
            const disciplinas_semestre = await response.json();
            setGrupos(disciplinas_semestre.materias);
        }

        getMaterias();
    }, []);

    return(
        <div className={styles.disciplinas_semestre} onDragOver={allowDrop} onDrop={drop} >
            {grupos && (<MostrarDisciplinasGrade grupo={grupos[semestreAnalisado - 1]}/>)}
            {!grupos && (<div>Carregando</div>)}
        </div>        
    )
}

export default DisciplinasSemestreEmAnalise