import React from 'react'
import img1 from "../images/redemption-bg.jpg"
import img2 from "../images/tech-root-bg.jpg"
import img3 from "../images/the-invisible-man-bg.jpg"
import img4 from "../images/complicated-project-bg.jpg"
import img5 from "../images/large_EN-US_THE_GUILTY_Main_Vertical_27x40_RGB_PRE.jpg"
import img6 from "../images/new-web-bg.jpg"
import Mainpagecontent from "./Mainpagecontent"
import "../App.css"


const Mainpage = () => {
  return (
    <div>
       <section id="movie-section">
          <Mainpagecontent img={img1} 
          movieName="The redemption" 
          movieAttr="A damaged ex-special forces soldier navigating London's criminal underworld seizes an opportunity to assume another man's identity." />
          <Mainpagecontent 
          img={img2} movieName="Africa's Tech Roots movieAttr" 
          movieAttr="An adaptation of Alex Haley's Roots. Chronicles the history of an African man and his descendants sold into slavery in America.<" />
          
          <Mainpagecontent img={img3} 
          movieName="The Invisible Man" 
          movieAttr="When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, ..." />
          
          <Mainpagecontent img={img4} 
          movieName="The Complicated Project" 
          movieAttr="A romantic comedy in which a divorced man (Baldwin) vies for the affection of ... When attending their son's college graduation, a couple reignite the spark in ..." />
          
          <Mainpagecontent img={img5} 
          movieName="Simply Javascript" 
          movieAttr="How to Create a Simple Movie App with Vanilla JavaScript. To get the latest movies, I will use The Movie Database and its excellent API." />
          
          <Mainpagecontent img={img6} 
          movieName="The New Web" 
          movieAttr="Find the list of latest Web Series from various OTT platforms like Netflix, Amazon Prime Video, ZEE5, Disney+ Hotstar and other with trailer, cast." />

      </section>
    </div>
  )
}

export default Mainpage