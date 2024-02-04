import DiaSemana from './DiaSemana'
import styles from './GradeHoraria.module.css'

import { useTable } from 'react-table'

function GradeHoraria(){
    return(
        <div className={styles.tabela}>
            <DiaSemana nomeDia='Segunda-Feira'/>
            <DiaSemana nomeDia='Terça-Feira'/>
            <DiaSemana nomeDia='Quarta-Feira'/>
            <DiaSemana nomeDia='Quinta-Feira'/>
            <DiaSemana nomeDia='Sexta-Feira'/>
        </div>
        )
}

export default GradeHoraria