import React, { Component, Fragment } from 'react';
import 'bulma/css/bulma.css'
import Navbar from "../Contents/navbar/Navbar"
import Pagination from "../Contents/pagination/Pagination"
import Startupcard from "../Contents/card/startupcard"

class Brands extends Component {
  render() {
    return (
      <Fragment>

      <div className="nav">
      <hr className="bar"/>
        <Navbar/>
      </div>

        <div className="is-flex-mobile">
            <Startupcard/>
        </div>

      </Fragment>
    )
  }
}

export default Brands;
