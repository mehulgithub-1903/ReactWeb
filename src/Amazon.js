import React from 'react'
import Card from './Card'
import sData from './sData'

const Amazon=()=>{

    return (
        <>
        <h1> :</h1>
        <Card 
        key={sData[0].id}
        imgsrc={sData[0].img_link}
        name ={sData[0].sname}  
        link={sData[0].net_link}/>
        <Card 
        key={sData[1].id}
        imgsrc={sData[1].img_link}
        name ={sData[1].sname}  
        link={sData[1].net_link}/>
        <Card 
        key={sData[4].id}
        imgsrc={sData[4].img_link}
        name ={sData[4].sname}  
        link={sData[4].net_link}/>
      </>
    );

}
export default Amazon;