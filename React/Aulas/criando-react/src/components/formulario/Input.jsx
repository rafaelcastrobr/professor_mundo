import React, { useState } from "react";
import './Input.css'

export default props => {

  const [valor, setValor] = useState('Inicial');

  function quandoMudar(e) {
    setValor(e.target.value)
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <input value={valor} placeholder="Inicial" onChange={quandoMudar} />
        <input value={valor} placeholder="Valor" readOnly />
        <input value={undefined} placeholder="Mone" />
      </div>

    </div>
  )
}