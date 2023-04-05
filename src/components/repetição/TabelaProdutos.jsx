import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'


export default props => {
    function getLinhas(){
        return produtos.map((produtos, i) =>{
            return (
                <tr key={produtos.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produtos.id}</td>
                    <td>{produtos.nome}</td>
                    <td>R$ { produtos.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })

    }
    return (
        <div className="TabelaProdutos"> 
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                {getLinhas()}
                </tbody>
            </table>
        </div>
    )

}