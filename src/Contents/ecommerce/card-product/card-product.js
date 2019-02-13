import React, { Component } from 'react';
import './costom.scss'

class CardProduct extends Component {
  render() {
    return (
      <div class="card card-product">
        <div class="card-product-img-wrapper">
          <a class="button expanded">Add to Cart</a>
          <a href="#"><img src="https://demandware.edgesuite.net/sits_pod15/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw2dd1a5fe/product_images/0702497750034NEW_00_165.jpg?sw=215&sh=334&sm=fit"/></a>
        </div>
        <div class="card-section">
          <a href="#"><h3 class="card-product-name">Kickin with Kraken Tee</h3></a>
          <h5 class="card-product-price">$19.99</h5>
          <p class="card-product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere sem enim, accumsan convallis risus semper.</p>
        </div>
      </div>
)
}
}
export default CardProduct;
