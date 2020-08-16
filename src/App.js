import React, { useState } from 'react'
import './index.css'

/*
REACT CONTROLLED FORMS uses onchange
controllin
*/


const App=()=>{
 
        const [name,setName]=useState();
        const[name2,setName2]=useState();
        const[firstName,setFull]=useState();
        const[lastName,setLast]=useState();
    const UpdateLogin=(event)=>{
    setName(event.target.value);
    }
    const UpdatePass=(event)=>{
        setName2(event.target.value);
    }
    const UpdateFull=(event)=>{
        //this is to prevent default behaviour of form 
        event.preventDefault();
        setFull(name);
        setLast(name2);
    }
    return (
        <>
        <form onSubmit={UpdateFull}>
        <div>
    <h1>Hello {firstName} {lastName}</h1>
        <input  type="text" placeholder='Your Name' 
        onChange={UpdateLogin} value={name}>
        </input>
        <input  type="password" placeholder='Last Name' 
        onChange={UpdatePass} value={name2}>
        </input>
        <button type="submit">CLick Me</button>
        </div>
        </form>
        </>
    );

}
export default App;