import { useState } from 'react'

import CardDisciplinasGrade from '../../Layout/CardDisciplinaGrade'

import styles from './MostrarDisciplinasGrade.module.css'

function MostrarDisciplinasGrade({grupo}){
    
    var disciplinas = grupo.disciplinas

    const [semestreFechado, setSemestreFechado] = useState(false)

    return(
        <div className={styles.semestre}>
            <button className={styles.titulo_semestre} onClick={() => setSemestreFechado(!semestreFechado)}>{grupo.grupo}</button>
            {!semestreFechado && (
                <div className={styles.grupo_disciplinas}>
                    {
                        disciplinas.map((disciplina) => {
                            return(<CardDisciplinasGrade nomeDisciplina={disciplina.nome}/>)
                        })                
                    }
                </div>
            )}
            {/* <button className={styles.titulo_semestre}>{grupo.grupo}</button> */}
        </div>
    )
}

export default MostrarDisciplinasGrade