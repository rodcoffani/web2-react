import PreRequisito from '../PreRequisito'

function CardDisciplina({nomeDisciplina, sigla, categoria, creditos, requisitos}){

    return(
        <div className="grid w-full bg-[#D9D9D9] rounded-lg items-center grid-cols-[45%_55%] md:grid-cols-1 md:grid-rows-[40%_60%] md:min-h-40">
            <h2 className="text-center px-[5px] text-sm font-semibold md:font-semibold md:text-base md:m-0 md:p-[5px] md:flex md:items-center md:justify-center">{nomeDisciplina}</h2>
            <div className="flex flex-col gap-y-1.5 m-1.5 px-1 border-l border-solid border-black md:border-t md:border-l-0 md:pt-2.5 md:items-center md:h-full">
                <p className="flex text-xs md:text-base">{sigla} - {categoria}</p>
                <p className="flex text-xs md:text-base">{creditos} créditos</p>
                <PreRequisito requisitos={requisitos}/>
            </div>
        </div>
    )
}

export default CardDisciplina