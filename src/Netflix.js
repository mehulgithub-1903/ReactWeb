import React from 'react'
import Card from './Card'
import sData from './sData'

const Netflix =()=>{
    return(
      <>
        <Card 
        key={sData[2].id}
        imgsrc={sData[2].img_link}
        name ={sData[2].sname}  
        link={sData[2].net_link}/>
        <Card 
        key={sData[3].id}
        imgsrc={sData[3].img_link}
        name ={sData[3].sname}  
        link={sData[3].net_link}/>
      </>

    );
}

export default Netflix;


