import React, { Component, Fragment } from 'react';
import 'bulma/css/bulma.css'
import "./Pages.css"
import Navbar from "../Contents/navbar/Navbar"


const joinus=[

  {
    type:"Email/Username",
    input:"alexsmith@gmail.com/e.g Alexsmith"
  },
  {
    type:"Password",
    input:"password"
  },

]

class LogIn extends Component {
  render() {
    return (
      <Fragment className="back">
      <hr className="bar"/>
        <div>
            <Navbar/>
        </div>


          <div class="field message card-content account is-secondary">
          {
            joinus.map((content, key) => (
              <Form
              type={content.type}
              input={content.input}
              />
            ))
          }

            <div class="field">
              <p class="control">
                <button class="button is-success">
                  Login
                </button>
              </p>
            </div>
          <a  href="/JoinUs">I do not have anccount</a>
          </div>

      </Fragment>
    )
  }
}

export default LogIn;

const Form = ({type, input}) =>{
  return(
    <div class="field">
      <label class="label">{type}</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder={input}/>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
  )
}
