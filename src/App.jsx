import React from "react";
import "./App.css"
import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";


export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo="#04 - Desafio Aleatorio">

<Aleatorio min={1} max={60} />

</Card>

<Card titulo="#03 - Fragmento">

<Fragmento />

</Card>

<Card titulo="#02 - Com parametro">

<ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />

</Card>

<Card titulo="#01 - Primeiro">

<Primeiro></Primeiro>

</Card>



        </div>

        
    </div>
);