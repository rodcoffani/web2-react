import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function PreRequisito({requisitos}){

    let contentRequisito = (<div>
        <span className="hidden md:flex md:flex-row md:flex-wrap md: md:gap-y-2.5">Nenhum pré-requisito</span>
        <span className="block md:hidden">Tem pré-requisito: <FontAwesomeIcon icon={faXmark} className="ml-1 text-base text-red-700 md:text-lg"/></span>
        </div>)

    if(requisitos.length !== 0){
        const requisitosArray = requisitos.map((requisito, index) =>
            index === requisitos.length - 1 ?
            <div key={index} className="flex text-xs md:text-base">{requisito}</div> :
            <div key={index} className="flex text-xs md:text-base">{requisito},&nbsp;</div>
        )

        contentRequisito = (<div><div className="hidden md:flex md:flex-row md:flex-wrap md: md:gap-y-2.5">Pré-requisitos:&nbsp;{requisitosArray}</div><span className="block md:hidden">Tem pré-requisito: <FontAwesomeIcon icon={faCheck} className="ml-1 text-base text-green-500"/></span></div>)
    }
    return <p className="flex text-xs md:text-base">{contentRequisito}</p>
}

export default PreRequisito