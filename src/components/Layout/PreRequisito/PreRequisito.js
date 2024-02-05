import styles from '../CardDisciplina/CardDisciplina.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function PreRequisito({requisitos}){

    let contentRequisito = (<div>
        <span className={styles.requisitoDesktop}>Nenhum pré-requisito</span>
        <span className={styles.requisitoMobile}>Tem pré-requisito: <FontAwesomeIcon icon={faXmark} className={styles.xmark}/></span>
        </div>)

    if(requisitos.length !== 0){
        const requisitosArray = requisitos.map((requisito, index) =>
            index === requisitos.length - 1 ?
            <div key={index} className={styles.informacao}>{requisito}</div> :
            <div key={index} className={styles.informacao}>{requisito}, </div>
        )

        contentRequisito = (<div><div className={styles.requisitoDesktop}>Pré-requisitos:{requisitosArray}</div><span className={styles.requisitoMobile}>Tem pré-requisito: <FontAwesomeIcon icon={faCheck} className={styles.check}/></span></div>)
    }
    return <p className={styles.informacao}>{contentRequisito}</p>
}

export default PreRequisito