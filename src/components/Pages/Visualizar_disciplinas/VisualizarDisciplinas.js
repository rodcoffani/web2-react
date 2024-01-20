import { useEffect, useState } from "react"

import grupos from './../../../disciplinas.json'

import MostrarSemestres from './MostrarSemestre'

import style from './VisualizarDisciplinas.module.css'

function VisualizarDisciplinas() {

    let disciplinasArray, requisitosArray

    return (
        <div className={style.disciplinas}>
            {grupos.map((grupo) => {
                return(<MostrarSemestres grupo={grupo} key={grupo.grupo}/>)
            })}
        </div>
    )
}

export default VisualizarDisciplinas