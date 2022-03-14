import React from "react";
import './App.css'

import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragment from './components/basics/Fragment';
import Aleatorio from './components/basics/Aleatorio';
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default () => (
  <div id='app'>
    <h1>Fundamentos da Aplicação</h1>

    <div className="Cards">
      <Card titulo="#08 - Renderização Condicional" color="#00A36C">
        <ParOuImpar numero={21}/>
        <UsuarioInfo usuario={{ nome: 'Rafael' }}></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Tabela Produtos" color="#023020">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repeticao" color="#6082B6">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com filhos" color="#483C32">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Fábio" />
          <FamiliaMembro nome="Cássio" />
          <FamiliaMembro nome="Márcio" /> 
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatorio" color="#9A2A2A">
        <Aleatorio max={100} min={1} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#966919">
        <Fragment />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#C04000">
        <ComParametro
          nome="Rafael Castro"
          nota={9}
        />
      </Card>

      <Card titulo="#01 - Primeiro Component" color="#808000">
        <Primeiro />
      </Card>

    </div>

  </div>
)