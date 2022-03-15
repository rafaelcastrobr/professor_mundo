import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
  return (
    <div>
      <DiretaFilho nome="Fábio" idade={20} nerd={true} />
      <DiretaFilho nome="Fernanda" idade={12} nerd={false} />
      <DiretaFilho nome="Otavio" idade={10} nerd={false} />
    </div>
  )
}