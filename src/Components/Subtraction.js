import React from "react";
import {evaluate} from "mathjs";

function Subtraction(v1,v2){

    let ans1=evaluate(`${v1-v2}`)
    
    return(
        <div className="calc">
            <h3>Subtraction of {v1} & {v2} is: <span className="output2">{ans1}</span></h3>
        </div>
    )
}
export default Subtraction;