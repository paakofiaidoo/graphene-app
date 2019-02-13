import React, { Component } from 'react';
import './costom.scss'

class ShoppingCartBtn extends Component {
  render() {
    return (
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">

    <button type="button" className="shopping-cart-button float-right" data-toggle="shopping-cart-dropdown">
      <i className="fa fa-shopping-cart"></i>
      <span className="text">Shopping Cart (3)</span>
    </button>
    <div className="shopping-cart-dropdown-pane">
      <div className="dropdown-pane bottom " id="shopping-cart-dropdown" data-dropdown data-hover="true" data-hover-pane="true">
        <div className="shopping-cart-item">
          <img src="https://placeimg.com/60/80/any">
          <div className="shopping-cart-item-name">
            <a>Style & Co Knit Blazer</a>
            <p><span className="shopping-cart-title">Color: </span>Blue</p>
            <p><span className="shopping-cart-title">Size: </span>M</p>
          </div>
          <div className="shopping-cart-item-price">
            <p className="shopping-cart-title">$24.99</p>
            <a href="#">Remove</a>
          </div>
        </div>

        <div className="shopping-cart-item">
          <img src="https://placeimg.com/60/80/any">
          <div className="shopping-cart-item-name">
            <a>Style & Co Knit Blazer</a>
            <p><span className="shopping-cart-title">Color: </span>Blue</p>
            <p><span className="shopping-cart-title">Size: </span>M</p>
          </div>
          <div className="shopping-cart-item-price">
            <p className="shopping-cart-title">$24.99</p>
            <a href="#">Remove</a>
          </div>
        </div>

        <div className="shopping-cart-item">
          <img src="https://placeimg.com/60/80/any">
          <div className="shopping-cart-item-name">
            <a>Style & Co Knit Blazer</a>
            <p><span className="shopping-cart-title">Color: </span>Blue</p>
            <p><span className="shopping-cart-title">Size: </span>M</p>
          </div>
          <div className="shopping-cart-item-price">
            <p className="shopping-cart-title">$24.99</p>
            <a href="#">Remove</a>
          </div>
        </div>

        <a href="#" className="button shopping-cart-checkout expanded">Checkout</a>

      </div>
    </div>

)
}
}

export default ShoppingCartBtn;
