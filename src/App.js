import React, { useState } from 'react'
import './index.css'

/*
REACT CONTROLLED FORMS uses onchange
controllin
*/


const App=()=>{
 
      const[fullName,setFullName] =useState({
          fname:'',
          lname:'',
          email:'',
      })

   const InputEvent=(event)=>{
  const {value,name} =event.target;

    setFullName((preValue)=>{
        if(name==="fname"){
            return{
                fname:value,
                lname:preValue.lname,
                email:preValue.email
            }
        }
        if(name==="lname"){
            return{
                fname:preValue.fname, 
                lname:value, 
                email:preValue.email   
            }
        } if(name==="email"){
            return{
                fname:preValue.fname, 
                lname:preValue.lname,
                email:value    
            }
        }

    });

   };
    
   const onSubmits=(event)=>{
    event.preventDefault();
    alert("form submitted")
   }
    return (
        <>
        <form onSubmit={onSubmits}>
        <div>
    <h1>Hello {fullName.fname} {fullName.lname} {fullName.email}</h1>
        <input  type="text" placeholder='Your Name' 
        onChange={InputEvent} name="fname" value={fullName.fname}>
        </input>
        <input  type="password" name="lname" placeholder='Last Name' 
        onChange={InputEvent} value={fullName.lname}>
        </input>
        <input  type="email" placeholder='Your Email' 
        onChange={InputEvent} name="email" value={fullName.email}>
        </input>
        <button type="submit">Click Me</button>
        </div>
        </form>
        </>
    );

}
export default App;