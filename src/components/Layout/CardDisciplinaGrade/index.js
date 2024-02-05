function CardDisciplinasGrade({nomeDisciplina}){

    function dragStartHandler(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }

    return(
        <div className="w-100 bg-[#D9D9D9] rounded-lg grid items-center justify-center" id={nomeDisciplina} draggable="true" onDragStart={dragStartHandler}>
            <h2 className="flex flex-col gap-y-[6px] m-1.5 px-1 border-l border-solid border-black">{nomeDisciplina}</h2>
        </div>
    )
}

export default CardDisciplinasGrade