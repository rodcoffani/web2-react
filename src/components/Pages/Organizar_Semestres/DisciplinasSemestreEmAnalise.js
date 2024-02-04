import MostrarDisciplinasGrade from '../Visualizar_disciplinas/MostrarDisciplinasGrade'
import styles from './DisciplinasSemestreEmAnalise.module.css'
import grupos from '../../../disciplinas.json'


function DisciplinasSemestreEmAnalise(){
    return(
        <div className={styles.disciplinas_semestre}>
            {grupos.map((grupo) => {
                return(<MostrarDisciplinasGrade grupo={grupo} key={grupo.grupo}/>)
            })}
        </div>        
    )
}

export default DisciplinasSemestreEmAnalise