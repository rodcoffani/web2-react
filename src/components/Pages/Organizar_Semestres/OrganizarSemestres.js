import styles from './OrganizarSemestres.module.css'

import QuadroInformacoes from "./QuadroInformacoes"
import DisciplinasSemestreEmAnalise from "./DisciplinasSemestreEmAnalise"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


function Organizar_semestres() {

    var semestreAnalisado = '2024/2', semestreAtual = '2023/2', creditosDisponiveis = '15/30'

    return (
        <div className={styles.organizar_semestres}>
            <QuadroInformacoes semestreAnalisado={semestreAnalisado} semestreAtual={semestreAtual} creditosDisponiveis={creditosDisponiveis}/>

            <button className={styles.botao_grade_horaria}><FontAwesomeIcon className={styles.icon} icon={faPlay}/>Grade Horária</button>

            <DisciplinasSemestreEmAnalise/>
        </div>
    )
}

export default Organizar_semestres