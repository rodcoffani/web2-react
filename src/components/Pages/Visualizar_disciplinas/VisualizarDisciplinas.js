import { useEffect, useState } from "react"

import grupos from './../../../disciplinas.json'

import MostrarSemestres from './MostrarSemestre'

import style from './VisualizarDisciplinas.module.css'

function VisualizarDisciplinas() {

    let disciplinasArray, requisitosArray

    return (
        <div className={style.disciplinas}>
            {grupos.map((grupo) => {
                disciplinasArray = grupo.disciplinas
                return(<MostrarSemestres grupo={grupo}/>)
            })}
        </div>
    )
}

export default VisualizarDisciplinas