import React, { useState } from 'react' 
import  "./Card.css" 
 
 
export const Card =({data}) =>{ 
      
  const [value, setValue] = useState(1) 
  const [pieces, setPieces] = useState(data.pieces) 
 
  function addition() { 
    setValue(value + 1) 
  } 
 
  function minus() { 
    setValue(value - 1) 
  } 
 
  function checkout() { 
    if(value < 0) { 
    } else { 
      setPieces(pieces - value) 
    } 
  } 
 
  
 
  return ( 
    // main tag 
    < div className="header"> 
      {/* img */} 
        <img src={data.img} className="img"/> 
      {/* title */} 
      <h3 className="title">{data.title}</h3> 
      {/* text */} 
      <p className="text">{data.text}</p> 
      {/* price */} 
      <p className="price">{data.price}</p> 
      {/* pieces */} 
      <p className="pieces">{pieces >= 0 ? pieces : 0} {"штук осталось"}</p> 
      {/* composition */} 
      <span className="composition">{data.composition}</span> 
      {/* input */} 
      <div className="btn"> 
          <input onClick={minus} className='minus' type='button' value='-'></input> 
          <input className="input" value={value}></input> 
          <input onClick={addition} className="addition" type='button' value='+'></input> 
      </div> 
      {/* add */} 
      <div className='add'> 
          <button onClick={checkout}>{data.add}</button> 
      </div> 
    </div> 
  ); 
}