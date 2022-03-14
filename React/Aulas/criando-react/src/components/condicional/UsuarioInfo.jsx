import React from "react";
import IF from "./IF";

export default props => {
  const usuario = props.usuario || 'Anonimo'
  return (
    <div>
      <IF test={usuario && usuario.nome}>
        Seja Bem Vindo <strong>{usuario.nome}</strong>
      </IF>
    
    </div>
  )
}