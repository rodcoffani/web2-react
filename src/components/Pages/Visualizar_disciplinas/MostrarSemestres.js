import { useEffect, useState } from "react"
import json from './../../../../public/disciplinas.json'

function MostrarSemestres(){
    const [disciplina, setDisciplina] = useState([])

    useEffect(() => {
        fetch(json, {
            headers: {
                Accept: "application/json"
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }, [])



    return(
        
    )

}

export default MostrarSemestres