import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    let nome ='?'
    let idade = 0
    let nerd = false
    function FornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome= nomeParam
        idade= idadeParam
        nerd= nerdParam

        console.log(nomeParam, idadeParam, nerdParam);
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span> {nerd ? 'Verdadeiro' : 'falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={FornecerInformacoes}></IndiretaFilho>
        </div>
    )
}