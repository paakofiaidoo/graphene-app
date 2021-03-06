import React, { Component } from 'react';
import './costom.scss'

class ProductDetails extends Component {
  render() {
    return (
      <div class="row align-center">
        <div class="product-details column medium-6 center-text-for-small-only">
          <h1>Product Name</h1>
          <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id magna ac quam semper.deta</p>
            <div class="row">
              <div class="column small-12 large-6">
                <h6 class="product-color-title">Colors</h6>
                  <form class="product-option-selection">
                    <input type="radio" name="radios" value="red" id="radio1" checked/>
                    <label for="radio1" class=" dark-hollow expand"><img src="https://placehold.it/30x30"/></label>
                    <input type="radio" name="radios" value="blue" id="radio2"/>
                    <label for="radio2" class=" dark-hollow expand"><img src="https://placehold.it/30x30"/></label>
                    <input type="radio" name="radios" value="yellow" id="radio3"/>
                    <label for="radio3" class=" dark-hollow expand"><img src="https://placehold.it/30x30"/></label>
                    <input type="radio" name="radios" value="orange" id="radio4"/>
                    <label for="radio4" class=" dark-hollow expand"><img src="https://placehold.it/30x30"/></label>
                    <input type="radio" name="radios" value="green" id="radio5"/>
                    <label for="radio5" class=" dark-hollow expand"><img src="https://placehold.it/30x30"/></label>
                  </form>
              </div>
              <div class="column small-12 large-6">
                <h6 class="product-color-title">Size</h6>
                  <form class="product-option-selection">
                      <label>
                      <select>
                        <option value="husker">Small</option>
                        <option value="starbuck">Medium</option>
                        <option value="hotdog">Large</option>
                        <option value="apollo">X-Large</option>
                        <option value="apollo">XX-Large</option>
                      </select>
                    </label>
                  </form>
              </div>
            </div>
            <div class="product-details-add-to-cart">
              <p><span class="in-stock">In Stock</span> <span class="dim-text">(Only 3 left in Stock)</span></p>
              <hr/>
              <p class="price">$19.99</p>
              <p> <span>Qty:</span> <input class="qty" type="text" value="1"/> </p>
              <button class="button expanded">Add to Cart</button>
            </div>
            <p class="shipping">Available for Free Ground Shipping &amp; Return</p>
        </div>
      </div>

)
}
}
export default ProductDetails;
