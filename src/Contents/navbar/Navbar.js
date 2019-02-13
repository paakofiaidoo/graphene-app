import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import "./costom.css"

const navmenu=[
  {
    name:"Showcase",
    url:"Showcase"
  },
  {
    name:"Brands",
    url:"Brands"

  },
  {
    name:"Hackaton",
    url:"Hackaton"

  },
  {
    name:"Adout us",
    url:"AboutUs"

  },
]

class Navbar extends Component {
  render() {
    const activeClass = this.state.isActive? "is-active" : null
    return(
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand ">
      <a className="navbar-item " href="/">
        <img src="/static/img/logo.png" alt="GRAPHENE" width="50px" height="50px"/>
      </a>
      <Hamburger toggleNavbar={this.toggleNavbar} activeClass={activeClass}/>
    </div>

    <div className={"navbar-menu " + activeClass}>
    {
      navmenu.map((content, key) => (
        <Navmenu
        name={content.name}
        url={content.url}
        />
      ))
    }

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
          <p className="control">
          <a className="bd-tw-button button" href="#">

            <img src="/static/img/shopping-cart.svg"/>
          </a>
          </p>
            <p className="control">

              <a className="bd-tw-button button" href="LogIn">

                <span>Log_in
                </span>
              </a>
            </p>
            <p className="control">
              <a className="button is-primary" href="JoinUs">

                <span>Join_Us </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
    )
  }

  constructor(props) {
   super(props)
   this.state = {
     isActive: false
   }
   this.toggleNavbar = this.toggleNavbar.bind(this)
 }
 toggleNavbar(){
   this.setState((prevState) => ({
     isActive: !prevState.isActive
   }))
 }
}
export default Navbar;


// Hamburger
const Hamburger = (props) => (
  <a
    role="button"
    className={"navbar-burger burger " + props.activeClass}
    aria-label="menu"
    aria-expanded="false"
    onClick={props.toggleNavbar}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
)

const Navmenu = ({name, url}) => {
  return(
    <div className="navbar-item ">
      <a className="navbar-item  texture" href={url}>
        {name}
      </a>
    </div>

  )
}
