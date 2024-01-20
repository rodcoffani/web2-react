import styles from './CardDisciplina.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function PreRequisito({windowWidthBiggerThan750, requisitos}){

    
    if(windowWidthBiggerThan750)
        requisitos.map((requisito) => {
            <p className={styles.informacao}>{requisito}</p>
        })
    else    
        return <p className={styles.informacao}>Pre-requisito: {(requisitos.length > 0) ? <FontAwesomeIcon icon={faCheck} className={styles.check}/> : <FontAwesomeIcon icon={faXmark} className={styles.xmark}/>}</p>
}

export default PreRequisito