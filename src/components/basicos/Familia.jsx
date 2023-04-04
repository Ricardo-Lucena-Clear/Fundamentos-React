import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props =>{
    return(
        <div>
            <FamiliaMembro nome="João" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Henrique" {...props}/>
            <FamiliaMembro nome="Julio" sobrenome="Lima"/>   

        </div>
    )
}