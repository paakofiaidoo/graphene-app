import React, { Component } from 'react';
import './costom.scss'

class Footer extends Component {
  render() {
    return (
<div className="ecommerce-footer">
  <div className="ecommerce-footer-links row">
    <div className="small-12 medium-12 large-6 columns">
      <div className="row ecommerce-footer-links-block">
        <div className="small-4 medium-4 large-4 columns">
          <h5>Categories</h5>
          <ul className="menu vertical">
            <li><a href="#">Category 1</a></li>
            <li><a href="#">Category 2</a></li>
            <li><a href="#">Category 3</a></li>
            <li><a href="#">Category 4</a></li>
            <li><a href="#">Category 5</a></li>
          </ul>
        </div>
        <div className="small-4 medium-4 large-4 columns more-categories">
          <ul className="menu vertical">
            <li><a href="#">Category 6</a></li>
            <li><a href="#">Category 7</a></li>
            <li><a href="#">Category 8</a></li>
            <li><a href="#">Category 9</a></li>
            <li><a href="#">Category 10</a></li>
          </ul>
        </div>
        <div className="small-4 medium-4 large-4 columns">
          <h5>Help</h5>
          <ul className="menu vertical">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Shipping &amp; Delivery</a></li>
          </ul>
        </div>
      </div>

    </div>
    <div className="small-12 medium-12 large-6 columns">
     <div className="row">
       <div className="small-4 medium-4 large-4 columns">
        <h5>My Account</h5>
        <ul className="menu vertical">
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">My Wishlist</a></li>
        </ul>
      </div>
      <div className="small-4 medium-4 large-4 columns">
        <h5>About</h5>
        <ul className="menu vertical">
          <li><a href="#">Company</a></li>
          <li><a href="#">Store Locator</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
      <div className="small-4 medium-4 large-4 columns">
        <h5>Social</h5>
        <ul className="menu vertical">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Youtube</a></li>
        </ul>
      </div>
     </div>
    </div>
  </div>
  <div className="ecommerce-footer-bottom-bar row">
    <div className="small-12 medium-5 columns">
      <ul className="bottom-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms &amp; Conditions</a></li>
      </ul>
    </div>
    <div className="small-12 medium-2 columns ecommerce-footer-logomark">
      <img src="https://placehold.it/50x50"/>
    </div>
    <div className="small-12 medium-5 columns">
      <div className="bottom-copyright">
        <span>©2017 Company Name. All rights reserved.</span>
      </div>
    </div>
  </div>
</div>
)
}
}
export default Footer;
