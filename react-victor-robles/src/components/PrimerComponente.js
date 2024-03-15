import React, {useState} from 'react'

export const PrimerComponente = () => {

    let cursos = [
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]

    const [vble1, setVble1] = useState("holi 1");
    const [vble2, setVble2] = useState("holi 2");

    const changeVbles = (sampleLabel) => {
        setVble1(vble1 + sampleLabel);
        setVble2(vble2 + sampleLabel);
    }

  return (
    <div>
    <h1>PrimerComponente</h1>
    <h2><strong className={vble1.length > 10 ? 'green': 'red'}>{vble1}</strong></h2>
    <h2><strong className={vble1.length > 10 ? 'yellow': 'purple'}>{vble2}</strong></h2>

    <input type="text" onChange={e => changeVbles(e.target.value)}></input>

    <button onClick={ e => changeVbles("samples")}>Cambiar cositas</button>

    <h2>Cursos:</h2>

    <ul>
        {
            cursos.map((curso, index) => {
                return <li key={index}>{curso}</li>
            })
        }
    </ul>
    </div>
  )
}
