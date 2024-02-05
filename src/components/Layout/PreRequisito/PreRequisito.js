import styles from '../CardDisciplina/CardDisciplina.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function PreRequisito({requisitos}){

    let contentRequisito = (<div>
        <span className={styles.informacao}>Tem pré-requisito: <FontAwesomeIcon icon={faXmark} className={styles.xmark}/></span>
        </div>)

    // {(requisitos.length > 0) ? <FontAwesomeIcon icon={faCheck} className={styles.check}/> : <FontAwesomeIcon icon={faXmark} className={styles.xmark}/>}

    if(requisitos.length !== 0){
        const requisitosArray = requisitos.map((requisito) =>
            <div className={styles.informacao}>{requisito}</div>
        )
        contentRequisito = (<div><div className={styles.requisitoDesktop}>{requisitosArray}</div><span className={styles.requisitoMobile}>Tem pré-requisito: <FontAwesomeIcon icon={faCheck} className={styles.check}/></span></div>)
    }
    return <p className={styles.informacao}>{contentRequisito}</p>
}

export default PreRequisito