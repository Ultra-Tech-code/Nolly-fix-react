import "../App.css"
import img from "../images/NollyFlix__2_-removebg-preview.png"
import React from 'react'

export const Header = () => {
  return (
    <div>   
        <div className="showcase">
          <div className="showcase-top">
              <img src={img} alt="nollyfix" />
              <a href="#" class="btn btn-rounded">Sign In</a>
          </div>
          <div className="showcase-content">
              <h1>Unlimited movies, TV shows,<br/> and more.</h1>
              <p>Watch anywhere. Cancel anytime.</p>
              <a href="#" class="btn btn-xl">
              Watch Free for 30 Days <i className="fas fa-chevron-right btn-icon"></i> 
              </a>
          </div>
        </div>
        <section className="tabs">
        <div className="container">
            <div id="tab-1" class="tab-item tab-border">
                <i className="fas fa-door-open fa-3x"></i>
                <p className="hide-sm">HOT AND TRENDING MOVIES</p>
            </div>
        </div>
    </section>

    </div>

  )
}

export default Header
