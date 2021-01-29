import React from "react";
import {evaluate} from "mathjs";
function Division(v1,v2){

    
    let ans1=evaluate(`${v1/v2}`)
    ans1=ans1.toFixed(2);
    return(
        <div className="calc">
            <h3>Division of {v1} & {v2} is: <span className="output3">{ans1}</span></h3>
        </div>  
    )
}

export default Division;