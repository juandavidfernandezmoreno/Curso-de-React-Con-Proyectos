import React from 'react'
import { PrimerComponente } from './PrimerComponente'

export const SegundoComponente = () => {
  return (
    <div>
    <h2>SegundoComponente</h2>
    <ul>
        <li>Dato 1</li>
        <li>Dato 2</li>
        <li>Dato 3</li>
    </ul>
    <PrimerComponente></PrimerComponente>
    </div>
  )
}
