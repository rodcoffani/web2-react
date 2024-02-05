import styles from './QuadroInformacoes.module.css'

import CardInformacao from "./CardInformacao"

function QuadroInformacoes({semestreAtual, creditosDisponiveis, handleSelect}){

    return(
        <div className={styles.quadro_informacoes}>
            <div className={styles.semestre_analisado}>
                <p className={styles.informacao}>Semestre em Análise: </p>
                <select className={styles.select_semestre} name='SemestreSelecionado' onChange={e => (handleSelect(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                </select>
            </div>
            <p className={styles.informacao}>Semestre Atual: <CardInformacao texto={semestreAtual}/></p>
            <p className={styles.informacao}>Créditos Disponíveis:  <CardInformacao texto={creditosDisponiveis}/></p>
        </div>
    )
}

export default QuadroInformacoes