import React from "react";
import _if from "./if";

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <if test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
            </if>
            <if test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Desconhecido</strong>!
            </if>
        </div>
    )
}