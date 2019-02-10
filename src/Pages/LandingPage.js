import React, { Component, Fragment } from 'react'
import 'bulma/css/bulma.css'
import "./Pages.css"
import Rating2 from "../Contents/rating/rating4";
import Navbar from "../Contents/navbar/Navbar"
import Intro from "../Contents/intro/Intro"
import Brandslider from "../Contents/brand-slider/slider"
import Showcaseslider from "../Contents/showcase-slider/slider"
import Winnercard from "../Contents/card/winnercard"
import HackChallenge from "../Contents/card/challengeCard"
import Chatroom from "../Contents/livechat/livechat"

class LandingPage extends Component {
  render() {


    return (

      <Fragment>

          <div className="nav">
          <hr className="bar"/>
            <Navbar/>
          </div>

          <div className="intro">
            <Intro/>
          </div>

          <div className="slid">
          <h1 className="sec-header">Top Start Up Products</h1>
            <Showcaseslider />
          </div>

          <h1 className="sec-header">Hackathon</h1>
          <div className="hackathon is-flex-mobile">
              <div>
                <Winnercard/>
              </div>
              <div>
                <HackChallenge/>
              </div>
              <div>
                  <Chatroom/>
              </div>
          </div>

          <div>
          <h1 className="sec-header">Top Start Up</h1>
            <Brandslider className="slid"/>
          </div>

        <Rating2/>
      </Fragment>

    )
  }
}

export default LandingPage;
