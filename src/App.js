import React, { useState } from 'react'
import './index.css'
/*
REACT CONTROLLED FORMS uses onchange method to update the information
*/


const App=()=>{
 
    const [name,setName]=useState();
     const[fullName,setFull]=useState();
    const Update=(event)=>{
    setName(event.target.value);
    }
    const UpdateFull=()=>{
        setFull(name);
    }
    return (
        <>
        <div>
         <h1>Hello {fullName}</h1>
        <input width="100px" type="text" placeholder='Your Name' 
        onChange={Update} value={name}>
        </input>
        <button onClick={UpdateFull}>CLick Me</button>
        </div>
        </>
    );

}
export default App;