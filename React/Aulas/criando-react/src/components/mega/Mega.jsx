import React, {useState} from "react";
import './Mega.css'
export default props => {

  function gerarNumeroNaoContido(min, max, array) {
    let aleatorio = parseInt((Math.random() * (max+1 - min)) + min)
    return array.includes(aleatorio) ? 
    gerarNumeroNaoContido(min, max, array) : 
    aleatorio
  }

  function gerarNumeros(qtd) {
    const numeros = Array(qtd)
      .fill(0)
      .reduce(nums => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        return [ ...nums, novoNumero]
      }, [])
      .sort((n1, n2) => n1 - n2)

    return numeros
  }

  const [qtd, setQtd] = useState(props.qtd || 6) 
  const numerosIniciais = gerarNumeros(qtd)
  const [numeros, setNumeros] = useState(numerosIniciais)
  
  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        <label>Qtd de Números</label>
        <input type="number" value={qtd} 
          onChange={e => setQtd(+e.target.value)}/>
      </div>
      <button onClick={_ => setNumeros(gerarNumeros(qtd))}>
        Gerar Números
        </button>
    </div>
  )
}