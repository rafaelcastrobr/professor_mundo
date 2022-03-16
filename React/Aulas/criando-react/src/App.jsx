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
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";
import Iframe from "./components/iframe/Iframe";

export default () => (
  <div id='app'>
    <h1>Fundamentos da Aplicação</h1>

    <div className="Cards">
      <Card titulo="#13-A - Testando Iframe" color="#23407c">
        <Iframe></Iframe>
      </Card>

      <Card titulo="#13 - Gerador Mega" color="#23407c">
        <Mega qtd={6}/>
      </Card>

      <Card titulo="#12 - Contador com Classe" color="#9dc700">
        <Contador numeroInicial={100} />
      </Card>

      <Card titulo="#11 - Componente Controlado" color="#c72a00">
        <Input/>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#c70039">
        <IndiretaPai/>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#c70039">
        <DiretaPai/>
      </Card>

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