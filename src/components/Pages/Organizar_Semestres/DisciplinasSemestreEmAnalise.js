import MostrarSemestresGrade from '../Visualizar_disciplinas/MostrarDisciplinasGrade'
import styles from './DisciplinasSemestreEmAnalise.module.css'
import grupos from '../../../disciplinas.json'


function DisciplinasSemestreEmAnalise(){
    return(
        <div className={styles.disciplinas_semestre}>
            {grupos.map((grupo) => {
                return(<MostrarSemestresGrade grupo={grupo} key={grupo.grupo}/>)
            })}
        </div>        
    )
}

export default DisciplinasSemestreEmAnalise