import { useEffect, useState } from 'react';
import MostrarDisciplinasGrade from '../VisualizarDisciplinas/MostrarDisciplinasGrade'
import styles from './DisciplinasSemestreEmAnalise.module.css'

function DisciplinasSemestreEmAnalise(){
    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        async function getMaterias() {
            const response = await fetch("http://localhost:8000/materias");
            const disciplinas_semestre = await response.json();
            setGrupos(disciplinas_semestre);
        }

        getMaterias();
    }, []);

    return(
        <div className={styles.disciplinas_semestre}>
            {grupos.map((grupo) => {
                return(<MostrarDisciplinasGrade grupo={grupo} key={grupo.grupo}/>)
            })}
        </div>        
    )
}

export default DisciplinasSemestreEmAnalise