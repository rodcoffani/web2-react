import { useState } from 'react'

import CardDisciplina from '../../Layout/CardDisciplina'

import styles from './MostrarSemestre.module.css'

function MostrarSemestres({grupo}){
    
    var disciplinas = grupo.disciplinas, requisitosArray

    // const [semestreFechado, setSemestreFechado] = useState(false)

    return(
        <div className={styles.semestre}>
            {/* <button className={styles.titulo_semestre} onClick={setSemestreFechado(!semestreFechado)}>{grupo.grupo}</button> */}
            <button className={styles.titulo_semestre}>{grupo.grupo}</button>
            <div>
                {
                    disciplinas.map((disciplina) => {
                        requisitosArray = disciplina.pre_requisitos
                        console.log(requisitosArray)
                        return(<CardDisciplina nomeDisciplina={disciplina.nome} sigla={disciplina.sigla} categoria={disciplina.categoria} creditos={disciplina.creditos} requisito={requisitosArray}/>)
                    })                
                }
            </div>
        </div>
    )
}

export default MostrarSemestres