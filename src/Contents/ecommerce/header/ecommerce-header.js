import React, { Component } from 'react';
import './costom.scss'

class Header extends Component {
  render() {
    return (
      // <!-- NOTE: This is the off-canvas menu that appears when you click on the hamburger menu on smaller screens. Everything in the `.off-canvas` div belongs in `src/layouts/default.html`. Copy this section into the `default.html` file and remove it from this file.  -->
      <div class="off-canvas ecommerce-header-off-canvas position-left" id="ecommerce-header" data-off-canvas>

        // <!-- Close button -->
        <button class="close-button" aria-label="Close menu" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>

        <ul class="vertical menu">
          <li class="main-nav-link"><a href="categories.html">Category 1</a></li>
          <li class="main-nav-link"><a href="#">Category 2</a></li>
          <li class="main-nav-link"><a href="why.html">Category 3</a></li>
          <li class="main-nav-link"><a href="build.html">Category 4</a></li>
          <li class="main-nav-link"><a href="#">Category 5</a></li>
        </ul>

        <hr>

        // <!-- Menu -->
        <ul class="menu vertical">
          <li><a href="#">Help</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">My Account</a></li>
        </ul>

      </div>

      // <!-- NOTE: This is the header menu that appears at the top of your site. -->
      <div class="off-canvas-content" data-off-canvas-content>
        <div class="ecommerce-header-top show-for-large">
          <div class="row align-justify">
            <div class="ecommerce-header-top-message">
              Tagline Message Can Display Here
            </div>
            <div class="ecommerce-header-top-links">
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">My Account</a></li>
                <li><a href="#" target="_blank"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ecommerce-header show-for-large">
          <div class="row align-justify align-middle">
            <div class="shrink column">
              <ul class="vertical medium-horizontal menu">
                <li><a href="#"><img class="logo" src="https://placehold.it/160x50"></a></li>
                <li class="main-nav-link"><a href="categories.html">Category 1</a></li>
                <li class="main-nav-link"><a href="#">Category 2</a></li>
                <li class="main-nav-link"><a href="why.html">Category 3</a></li>
                <li class="main-nav-link"><a href="build.html">Category 4</a></li>
                <li class="main-nav-link"><a href="#">Category 5</a></li>
              </ul>
            </div>
            <div class="shrink column">
              <ul class="menu">
                <li><input type="search" placeholder="Search"></li>
                <li><button type="button" class="button search-button"></button></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ecommerce-header-mobile hide-for-large">
          <div class="ecommerce-header-mobile-left">
            <button class="menu-icon" type="button" data-toggle="ecommerce-header"></button>
            <form class="ecommerce-header-search-exandable">
              <input type="search" placeholder="Search"/>
            </form>
          </div>
          <div class="ecommerce-header-mobile-center">
            <a href="#"><img class="logo" src="https://placehold.it/130x30"></a>
          </div>
          <div class="ecommerce-header-mobile-right">
            <i class="fa fa-shopping-cart"></i>
          </div>
        </div>
      </div>

)
}
}
export default Header;
