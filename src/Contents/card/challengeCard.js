import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import "./costom.css"


const winner = [
  {
    topic:"Challenge for the Month",
    icon:"/static/img/close-up-code-codes-239898.jpg",
    title:"",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
]

class HackChallenge extends Component {

    render() {  return (
      <div>
    {
      winner.map((info, key) => (
        <Hackcard
          topic={info.topic}
          icon={info.icon}
          title={info.title}
          subtitle={info.subtitle}
        />
      ))
    }
  </div>
                    )

                }
            };



export default HackChallenge;

const Hackcard = ({ topic, icon, title, subtitle }) => {
  return (
    <div className="tile is-parent hackCard ">
    <article className="tile is-child notification is-success">
      <div className="content">
      <h1 className="topic"><strong>{topic}</strong></h1>
      <figure className="is-4by3 ">
        <img className="hackImage" src={icon}/>
      </figure>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      </article>
    </div>

  )
}
