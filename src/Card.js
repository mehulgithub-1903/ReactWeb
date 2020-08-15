import React from 'react';
import Images from './images.js';
  
function Card(props){
return(
    <div className="card hvr-shrink"> 
  <Images imgsrc={props.imgsrc}/>
<div className="card_data">
    <span>Netflix Original Series</span>
<h1>{props.name}</h1>
<button className="hvr-float"><a href={props.link}>Watch Out</a></button>
</div>
</div>
);
}
export default Card;