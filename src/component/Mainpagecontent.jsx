import React from 'react'
import "../App.css"
import { useState } from 'react'

const Mainpagecontent = (props) => {
  const[count, setcount] = useState(0)

  let increment=()=>{
    setcount(count + 1)
    
  };
  return (
        <div className="card">
            <img src={props.img} alt="The redemption" style={{width:"100%"}} />
                
            <h1>{props.movieName}</h1>
            <p className="price">#2,000</p>
            <p>{props.movieAttr}</p>
            <p><button onClick={increment} className="btn btn-lg"> like <i className="fas fa-heart"></i> {count}</button></p>
          </div> 
  )
}

export default Mainpagecontent