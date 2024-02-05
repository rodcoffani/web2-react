import styles from './OrganizarSemestres.module.css'

import QuadroInformacoes from "./QuadroInformacoes"
import DisciplinasSemestreEmAnalise from "./DisciplinasSemestreEmAnalise"
import GradeHoraria from './GradeHoraria'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Organizar_semestres() {

    var semestreAnalisado = '2024/2', semestreAtual = '2023/2', creditosDisponiveis = '15/30'
    const [gradeHoraria, setGradeHoraria] = useState(false)

    return (
        <div className={styles.organizar_semestres}>
            <QuadroInformacoes semestreAnalisado={semestreAnalisado} semestreAtual={semestreAtual} creditosDisponiveis={creditosDisponiveis}/>

            <button className={`${styles.botao_grade_horaria}`} onClick={() => (setGradeHoraria(!gradeHoraria))}><FontAwesomeIcon className={styles.icon} icon={faPlay}/>Grade Horária</button>

            <section className={`${styles.materias} ${gradeHoraria ? styles.grade_ativa : ''}`}>
                <DisciplinasSemestreEmAnalise/>
                {
                    window.innerWidth <= 750 ? (gradeHoraria ? <GradeHoraria/> : '') : <GradeHoraria/>             
                }
            </section>

        </div>
    )
}

export default Organizar_semestres