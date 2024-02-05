import DiaSemana from './DiaSemana'
import styles from './GradeHoraria.module.css'

import { useTable } from 'react-table'

function GradeHoraria(){
    return(
        <div className={styles.tabela}>
            <DiaSemana nomeDia='Segunda'/>
            <DiaSemana nomeDia='Terça'/>
            <DiaSemana nomeDia='Quarta'/>
            <DiaSemana nomeDia='Quinta'/>
            <DiaSemana nomeDia='Sexta'/>
        </div>
        )
}

export default GradeHoraria