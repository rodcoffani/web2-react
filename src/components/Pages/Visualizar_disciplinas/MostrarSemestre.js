import CardDisciplina from '../../Layout/CardDisciplina'

import styles from './MostrarSemestre.module.css'

function MostrarSemestres({grupo}){
    
    var disciplinas = grupo.disciplinas, requisitosArray

    return(
        <div className={styles.semestre}>
            <h2 className={styles.titulo_semestre}>{grupo.grupo}</h2>
            {
                disciplinas.map((disciplina) => {
                    requisitosArray = disciplina.pre_requisitos
                    console.log(requisitosArray)
                    return(<CardDisciplina nomeDisciplina={disciplina.nome} sigla={disciplina.sigla} categoria={disciplina.categoria} creditos={disciplina.creditos} requisito={requisitosArray}/>)
                })                
            }
        </div>
    )
}

export default MostrarSemestres