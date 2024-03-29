import { useState } from 'react'

import CardDisciplina from '../../Layout/CardDisciplina/CardDisciplina'

import styles from './MostrarSemestre.module.css'

function MostrarSemestres({grupo}){
    
    var disciplinas = grupo.disciplinas, requisitosArray
    const [semestreFechado, setSemestreFechado] = useState(false)
    
    return(
        <div className={styles.semestre}>
            <button className={styles.titulo_semestre} onClick={() => setSemestreFechado(!semestreFechado)}>{grupo.grupo}</button>
            {!semestreFechado && (
                <div className={styles.grupo_disciplinas}>
                    {
                        disciplinas.map((disciplina) => {
                            requisitosArray = disciplina.pre_requisitos
                            return(<CardDisciplina nomeDisciplina={disciplina.nome} sigla={disciplina.sigla} categoria={disciplina.categoria} creditos={disciplina.creditos} requisitos={requisitosArray}/>)
                        })                
                    }
                </div>
            )}
            {/* <button className={styles.titulo_semestre}>{grupo.grupo}</button> */}
        </div>
    )
}

export default MostrarSemestres