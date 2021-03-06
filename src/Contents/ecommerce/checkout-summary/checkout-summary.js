import React, { Component } from 'react';
import './costom.scss'

class Chechout extends Component {
  render() {
    return (
      <div class="checkout-summary">
        <div class="checkout-summary-title">
          <h5>Your Order</h5>
          <h5>2 Items</h5>
        </div>

        <div class="checkout-summary-item">
          <img src="https://placeimg.com/100/80/any"/>
          <div class="item-name">
            <a>Comfy Knit Blazer</a>
            <p><span class="title">Color: </span>Blue</p>
            <p><span class="title">Size: </span>M</p>
          </div>
          <div class="item-price">
            <p class="title">$24.99</p>
            <a href="#">Remove</a>
          </div>
        </div>
        <div class="checkout-summary-item">
          <img src="https://placeimg.com/100/80/any"/>
          <div class="item-name">
            <a>Comfy Knit Blazer</a>
            <p><span class="title">Color: </span>Blue</p>
            <p><span class="title">Size: </span>M</p>
          </div>
          <div class="item-price">
            <p class="title">$24.99</p>
            <a href="#">Remove</a>
          </div>
        </div>
        <div class="checkout-summary-details">
          <div class="left">
            <p><strong>Subtotal:</strong></p>
            <p><strong>Tax:</strong></p>
            <p><strong>Total:</strong></p>
          </div>
          <div class="right">
            <p>$10.99</p>
            <p>$2.00</p>
            <p>$12.99</p>
          </div>
        </div>
        <button class="button expanded">Proceed to Checkout</button>
      </div>

)
}
}
export default Chechout;
