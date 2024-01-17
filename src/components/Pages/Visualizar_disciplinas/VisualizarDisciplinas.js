import { useEffect, useState } from "react"
import disciplinas from './../../../disciplinas.json'
import CardDisciplina from "../../Layout/CardDisciplina"

import style from './VisualizarDisciplinas.module.css'

function VisualizarDisciplinas() {
    return (
        <div className={style.disciplinas}>
            {disciplinas.map((disciplina) => {
                return(<CardDisciplina nomeDisciplina={disciplina.nome} sigla={disciplina.sigla} categoria={disciplina.categoria} creditos={disciplina.creditos}/>)
            })}
        </div>
    )
}

export default VisualizarDisciplinas