import React, { useState } from 'react'
import './index.css'

const App=()=>{

const [text,setText]=useState("Click Me");
const [bc,setBc]=useState("yellow");
 const Change=()=>{
    setText("Ouch 😠");
 }
 const ChangeBg=()=>{
    let newBg ="purple"
    setBc(newBg);
}

    return(
        <>
        <button onMouseEnter={Change} onMouseLeave={ChangeBg} style={{backgroundColor:bc}}>{text}</button>
        </>

);
}
export default App;