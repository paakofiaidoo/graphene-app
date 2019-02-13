import React, { Component } from 'react';
import './costom.scss'

class PricingTable extends Component {
  render() {
    return (
      <ul className="pricing-table">
        <li className="title">Enterprise</li>
        <li className="price">$99.99</li>
        <li className="description">An awesome description</li>
        <li>42 Rad Features</li>
        <li>7GB of Power</li>
        <li><a className="button" href="#">Buy Now</a></li>
      </ul>
)
}
}
export default PricingTable;
