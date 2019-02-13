import React, { Component, Fragment } from 'react';
import 'bulma/css/bulma.css'
import "./Pages.css"
import Navbar from "../Contents/navbar/Navbar"
import MenuTab from "../Contents/menuTab/menuTab"
import ProductSlider from "../Contents/product-slider/slider"
import Productcard from "../Contents/card/productcard"
import Produtline from "../Contents/productline-slider/slider"
import Ecommenceslider from "../Contents/ecommerce/product-slider/ecommerce-product-slider"
import CardProduct from "../Contents/ecommerce/card-product/card-product"
import ProductDetails from "../Contents/ecommerce/product-details/ecommerce-product-details"
import Chechout from "../Contents/ecommerce/checkout-summary/checkout-summary"
class Showcase extends Component {
  render() {
    return (
      <Fragment>
      <hr className="bar"/>
        <div>
            <Navbar/>
        </div>
        <div>
        <ProductSlider/>
        </div>

        <div>
        <Ecommenceslider/>
        </div>
        <div>

        </div>
        <div >

        </div>
        <div>
        <ProductDetails/>
        </div>
        <div>
        <Chechout/>
        </div>
      </Fragment>
    )
  }
}

export default Showcase;
