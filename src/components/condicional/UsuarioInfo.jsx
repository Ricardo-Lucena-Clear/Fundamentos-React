import React from "react";
import _if, { Else } from "./if.js"

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <if test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>Desconhecido</strong>!
                </Else>

            </if>


        </div>
    )
}