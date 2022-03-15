import React from "react";

export default props => {
  return (
    <div>
      {props.nome} 
      <strong> {props.idade} Anos </strong> 
      {props.nerd ? 'Verdadeiro!' : 'Falso'}
    </div>
  )
}