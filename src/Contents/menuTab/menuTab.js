import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import "./custom.css"

const tabs=[
  {
    name:"Web"
  },
  {
    name:"IOT"
  },
  {
    name:"Fasion"
  },
  {
    name:"Food"
  },
  {
    name:"Cosmetics"
  },
  {
    name:"Robotics"
  },
  {
    name:"Waste"
  },
]
class MenuTab extends Component {
  render() {

    return(
      <div className="tabs is-boxed">
        <ul>
      {
        tabs.map((content, key) => (
          <Menu
          name={content.name}
          />
        ))
      }
      </ul>
      </div>
    )

  }



}


export default MenuTab;

const Menu = ({name}) => {
  return(
    <li className=" " >
      <a >
        <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
        <span>{name}</span>
      </a>
    </li>

  )
}
