import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import "./costom.css"

const services = [
  {
    icon:"/static/img/ecommence.svg",
    title:"ecommence",
    subtitle:"Digital Market for yor start-up products"
  },
  {
    icon:"/static/img/branding.svg",
    title:"Company Branding Platform",
    subtitle:"A platform for start-ups to brand themselves and their products"
  },
  {
    icon:"/static/img/solution.svg",
    title:"Solution Forum",
    subtitle:"A hackathon based solution generator to bring new IDEAs and start-ups"
  }
]
class Intro extends Component {
    render() {
        return (
          <div className = " head jump hero is-bold" >
            <div className = "hero-head">
              <h1 className = "introTitle">GRAPHENE </h1>
              <h2 className = "introSubtitle">Digital Market for Start Ups</h2>
            </div>

            <div className="field is-grouped searchbar">

                <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Find a repository"/>
                </p>

                <p className="control">
                    <a className="button is-info">
                        Search
                    </a>
                </p>

              </div>

            <div className = "introAbout">
                {
                  services.map((service, key) => (
                    <Service
                      icon={service.icon}
                      title={service.title}
                      subtitle={service.subtitle}
                    />
                  ))
                }
            </div>
          </div >

        )
    }
}

export default Intro;

const Service = ({ icon, title, subtitle }) => {
  return (
    <div className = " aboutCard">
        <img className="aboutsvg" src={icon}/>
        <h2 className="aboutTitle"><strong>{title}</strong></h2>
        <p className="aboutSubtitle">{subtitle}</p>
    </div>
  )
}
