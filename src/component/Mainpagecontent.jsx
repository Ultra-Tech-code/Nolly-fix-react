import React from 'react'
import "../App.css"

const Mainpagecontent = (props) => {
  return (
        <div className="card">
            <img src={props.img} alt="The redemption" style={{width:"100%"}} />
                
            <h1>{props.movieName}</h1>
            <p className="price">#2,000</p>
            <p>{props.movieAttr}</p>
            <p><button className="btn btn-lg">like <i className="fas fa-heart"></i> <span className="counter" />0</button></p>
          </div> 
  )
}

export default Mainpagecontent