import React, { Component, Fragment } from 'react';
import 'bulma/css/bulma.css'
import "./Pages.css"
import Navbar from "../Contents/navbar/Navbar"


const joinus=[
  {
    type:"Fullname",
    input:"e.g Alex Smith"
  },
  {
    type:"Username",
    input:"e.g Alexsmith"
  },
  {
    type:"Email",
    input:"e.g. alexsmith@gmail.com"
  },
  {
    type:"Password",
    input:"type password"
  },
  {
    type:"Confim-Password",
    input:"re-type password"
  },
]

class JoinUs extends Component {
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
            <div class="control">
              <label class="checkbox">
                <input type="checkbox"/>
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
            <label class="checkbox">
              <input type="checkbox"/>
              I subscreibe to frequent newsletters
            </label>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" href="/">Submit</button>
            </div>
            <div class="control">
              <button class="button is-text" href="/">Cancel</button>
            </div>
          </div>
          <a  href="/LogIn">I already have anccount</a>
          </div>

      </Fragment>
    )
  }
}

export default JoinUs;

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
