import styles from './QuadroInformacoes.module.css'

import CardInformacao from "./CardInformacao"

function QuadroInformacoes({semestreAnalisado, semestreAtual, creditosDisponiveis}){
    return(
        <div className={styles.quadro_informacoes}>
            <p className={styles.informacao}>Semestre em Análise: <CardInformacao texto={semestreAnalisado}/></p>
            <p className={styles.informacao}>Semestre Atual: <CardInformacao texto={semestreAtual}/></p>
            <p className={styles.informacao}>Créditos Disponíveis:  <CardInformacao texto={creditosDisponiveis}/></p>
        </div>
    )
}

export default QuadroInformacoes