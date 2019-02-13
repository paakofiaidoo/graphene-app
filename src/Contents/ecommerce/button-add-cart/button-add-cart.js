import React, { Component } from 'react';
import './costom.scss'
import 'bulma/css/bulma.css'

function successalert() {
  alert("Added to cart, Yay!")
}

class AddCartBtn extends Component {
  render() {
    return (
      <div>
      <button
        onClick={successalert}
        data-addCart
        class="button button-add-cart is-secondary">
      <span>Add To Cart</span>
      </button>
      </div>
)
}}

export default AddCartBtn;
