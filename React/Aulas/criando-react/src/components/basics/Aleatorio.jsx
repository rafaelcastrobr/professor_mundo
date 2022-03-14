import React from "react";

export default props => {

  const {min, max} = props;
  const aleatorio = parseInt((Math.random() * (max - min)) + min)

  return (
  <div>
    <h2>Valor Aleatório</h2>
    <p><strong>O número aleatório é:</strong> {aleatorio}</p>
    <p><strong>O número mínimo é:</strong> {min}</p>
    <p><strong>O número máximo é:</strong> {max}</p>
    
  </div>
  )
}
