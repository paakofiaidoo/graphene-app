import React, { Component, Fragment } from 'react';
import 'bulma/css/bulma.css'
import Navbar from "../Contents/navbar/Navbar"
import Pagination from "../Contents/pagination/Pagination"

class Brands extends Component {
  render() {
    return (
      <Fragment>
        <header>
            <Navbar/>
        </header>

        <div>

        </div>
        <div>
            <Pagination/>
        </div>
      </Fragment>
    )
  }
}

export default Brands;
