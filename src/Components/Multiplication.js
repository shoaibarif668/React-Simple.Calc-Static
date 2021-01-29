import React from "react";
import {evaluate} from "mathjs";


function Multiplication(v1,v2){

    let ans1=evaluate(`${v1*v2}`)
    
    return(
        <div className="calc">
            <h3>Multiplication of {v1} & {v2} is: <span className="output4">{ans1}</span></h3>
        </div>
    )
}

export default Multiplication;