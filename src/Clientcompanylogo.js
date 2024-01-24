import React from "react";
import logoo from "./images/dazzlogo.png"
export default function Clientcompanylogo(){
    return(
        <div>
            <center>
            <img src={logoo} alt="clientcompany logo" width={250} height={100} style={{marginTop:20, marginBottom:20}}/>
            </center>
           
        </div>
    );
}