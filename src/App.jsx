import React from "react";
import "./App.css"
import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repetição/ListaAlunos";
import TabelaProdutos from "./components/repetição/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicação/DiretaPai";
import IndiretaPai from "./components/comunicação/IndiretaPai";


export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#10 - Comunicação indireta" color="#985269">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação direta" color="#985239">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#3a9ad9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#ff4c65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componentes com filhos" color="#00C8F8">

                <Familia sobrenome="Cardoso">
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Henrique" />
                    <FamiliaMembro nome="Julio" />
                </Familia>

            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">

                <Aleatorio min={1} max={60} />

            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">

                <Fragmento />

            </Card>

            <Card titulo="#02 - Com parametro" color="#E8B71A">

                <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />

            </Card>

            <Card titulo="#01 - Primeiro" color="#588C73">

                <Primeiro></Primeiro>

            </Card>



        </div>


    </div >
);