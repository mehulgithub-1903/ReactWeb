import React from "react"

const Images =(props)=> {
    return (
        <img src={props.imgsrc} className="card_img" alt={props.name}/>
    )
}   
export default Images;