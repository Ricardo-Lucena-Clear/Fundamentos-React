import ReactDOM  from 'react-dom';
import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


ReactDOM.render(
    <div id="app">
       <Primeiro></Primeiro>
       <ComParametro 
       titulo= "Situação do Aluno" 
       aluno= "Pedro" 
       nota={9.3}/>
       <ComParametro 
       titulo= "Situação do Aluno" 
       aluno= "Maria" 
       nota={6.9}/>
       <Fragmento/>
        </div>,
    document.getElementById('root')
);