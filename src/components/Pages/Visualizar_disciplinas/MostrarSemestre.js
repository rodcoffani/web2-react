import { useState } from 'react'

import CardDisciplina from '../../Layout/CardDisciplina'

import styles from './MostrarSemestre.module.css'

function MostrarSemestres({grupo}){
    
<<<<<<< Updated upstream:src/components/Pages/Visualizar_disciplinas/MostrarSemestre.js
    var disciplinas = grupo.disciplinas, requisitosArray

=======
>>>>>>> Stashed changes:src/components/Pages/VisualizarDisciplinas/MostrarDisciplinasGrade.js
    const [semestreFechado, setSemestreFechado] = useState(false)
    
    return(
        <div className={styles.semestre}>
<<<<<<< Updated upstream:src/components/Pages/Visualizar_disciplinas/MostrarSemestre.js
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
=======
            <div className={styles.grupo_disciplinas}>
                {grupo && 
                    grupo.disciplinas.map((disciplina) => {
                        return(<CardDisciplinasGrade nomeDisciplina={disciplina.nome} siglaDisciplinas={disciplina.sigla} key={disciplina.codigo}/>)
                    })                
                }
                {!grupo && (<div>Carregando</div>)}
            </div>
>>>>>>> Stashed changes:src/components/Pages/VisualizarDisciplinas/MostrarDisciplinasGrade.js
        </div>
    )
}

export default MostrarSemestres