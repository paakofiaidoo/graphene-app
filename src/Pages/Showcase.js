import React, { Component, Fragment } from 'react';
import 'bulma/css/bulma.css'
import "./Pages.css"
import Navbar from "../Contents/navbar/Navbar"
import MenuTab from "../Contents/menuTab/menuTab"
import ProductSlider from "../Contents/product-slider/slider"
import Productcard from "../Contents/card/productcard"


class Showcase extends Component {
  render() {
    return (
      <Fragment>
      <hr className="bar"/>
        <div>
            <Navbar/>
        </div>

        <div  className= "">
          <Productcard/>
        </div>
        <div>
          <Productcard/>
        </div>
      </Fragment>
    )
  }
}

export default Showcase;
