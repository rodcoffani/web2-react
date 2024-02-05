import styles from './OrganizarSemestres.module.css'

import QuadroInformacoes from "./QuadroInformacoes"
import DisciplinasSemestreEmAnalise from "./DisciplinasSemestreEmAnalise"
import GradeHoraria from './GradeHoraria'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Organizar_semestres() {

    var semestreAtual = '2023/2', creditosDisponiveis = '15/30'
    const [gradeHoraria, setGradeHoraria] = useState(false)
    const [semestreAnalisado, setSemestreAnalisado] = useState(1)


    return (
        <div className={styles.organizar_semestres}>
            <QuadroInformacoes semestreAtual={semestreAtual} creditosDisponiveis={creditosDisponiveis} handleSelect={setSemestreAnalisado}/>

            <button className={`${styles.botao_grade_horaria}`} onClick={() => (setGradeHoraria(!gradeHoraria))}><FontAwesomeIcon className={styles.icon} icon={faPlay}/>Grade Horária</button>

            <section className={`${styles.materias} ${gradeHoraria ? styles.grade_ativa : ''}`}>
                <DisciplinasSemestreEmAnalise semestreAnalisado={semestreAnalisado}/>
                {
                    window.innerWidth <= 750 ? (gradeHoraria ? <GradeHoraria/> : '') : <GradeHoraria/>             
                }
                {console.log(gradeHoraria)
}
            </section>

        </div>
    )
}

export default Organizar_semestres