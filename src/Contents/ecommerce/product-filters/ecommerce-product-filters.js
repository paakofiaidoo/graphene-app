import React, { Component } from 'react';
import './costom.scss'


class ProductFilter extends Component {
  render() {
    return (
      <div className="product-filters">
        <ul className="mobile-product-filters vertical menu show-for-small-only" data-accordion-menu>
         <li>
           <a href="#"/><h2>Products</h2></a>
           <ul className="vertical menu" data-accordion-menu>
            <li className="product-filters-tab">
              <a href="#">Category</a>
              <ul className="categories-menu menu vertical nested is-active">
                 <a href="#" className="clear-all" id="category-clear-all">Clear All</a>
                 <li><input className="category-clear-selection" id="category-checkbox1" type="checkbox"/><label for="category-checkbox1">Category 1</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox2" type="checkbox"/><label for="category-checkbox2">Category 2</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox3" type="checkbox"/><label for="category-checkbox3">Category 3</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox4" type="checkbox"/><label for="category-checkbox4">Category 4</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox5" type="checkbox"/><label for="category-checkbox5">Category 5</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox6" type="checkbox"/><label for="category-checkbox6">Category 6</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox7" type="checkbox"/><label for="category-checkbox7">Category 7</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox8" type="checkbox"/><label for="category-checkbox8">Category 8</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox9" type="checkbox"/><label for="category-checkbox9">Category 9</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox10" type="checkbox"/><label for="category-checkbox10">Category 10</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox11" type="checkbox"/><label for="category-checkbox11">Category 11</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox12" type="checkbox"/><label for="category-checkbox12">Category 12</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox13" type="checkbox"/><label for="category-checkbox13">Category 13</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox14" type="checkbox"/><label for="category-checkbox14">Category 14</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox15" type="checkbox"/><label for="category-checkbox15">Category 15</label></li>
               </ul>
           </li>
           <li className="product-filters-tab">
              <a href="#">Size</a>
              <ul className="categories-menu menu vertical nested is-active">
                <a href="#" className="clear-all" id="size-clear-all">Clear All</a>
                <li><input id="size-checkbox1" type="checkbox"/><label for="size-checkbox1">Small</label></li>
                <li><input id="size-checkbox2" type="checkbox"/><label for="size-checkbox2">Medium</label></li>
                <li><input id="size-checkbox3" type="checkbox"/><label for="size-checkbox3">Large</label></li>
                <li><input id="size-checkbox3" type="checkbox"/><label for="size-checkbox3">X-Large</label></li>
                <li><input id="size-checkbox3" type="checkbox"/><label for="size-checkbox3">XX-Large</label></li>
              </ul>

            </li>
           <li className="product-filters-tab">
              <a href="#">Color</a>
              <ul className="categories-menu menu vertical nested">
                <a href="#" className="clear-all" id="color-clear-all">Clear All</a>
                <li><input id="color-checkbox1" type="checkbox"/><label for="color-checkbox1">All Color</label></li>
                <li><input id="color-checkbox2" type="checkbox"/><label for="color-checkbox2">Black</label></li>
                <li><input id="color-checkbox3" type="checkbox"/><label for="color-checkbox3">White</label></li>
                <li><input id="color-checkbox4" type="checkbox"/><label for="color-checkbox4">Grey</label></li>
                <li><input id="color-checkbox5" type="checkbox"/><label for="color-checkbox5">Red</label></li>
                <li><input id="color-checkbox6" type="checkbox"/><label for="color-checkbox6">Blue</label></li>
                <li><input id="color-checkbox7" type="checkbox"/><label for="color-checkbox7">Green</label></li>
                <li><input id="color-checkbox8" type="checkbox"/><label for="color-checkbox8">Purple</label></li>
                <li><input id="color-checkbox8" type="checkbox"/><label for="color-checkbox8">Multi-color</label></li>
              </ul>
            </li>
           <li className="product-filters-tab">
              <a href="#">Price</a>
              <ul className="categories-menu menu vertical nested">
                <a href="#" className="clear-all" id="price-clear-all">Clear All</a>
                <li><input id="price-checkbox1" type="checkbox"/><label for="price-checkbox1">Under $25</label></li>
                <li><input id="price-checkbox2" type="checkbox"/><label for="price-checkbox2">$25–$50</label></li>
                <li><input id="price-checkbox3" type="checkbox"/><label for="price-checkbox3">$50–$250</label></li>
                <li><input id="price-checkbox4" type="checkbox"/><label for="price-checkbox4">$250–$600</label></li>
                <li><input id="price-checkbox4" type="checkbox"/><label for="price-checkbox4">$600–$1,000</label></li>
              </ul>
            </li>
           </ul>
         </li>
       </ul>

       <h1 className="product-filters-header hide-for-small-only">Products</h1>
       <ul className="vertical menu hide-for-small-only" data-accordion-menu>
          <li className="product-filters-tab">
            <a href="#">Category</a>
            <ul className="categories-menu menu vertical nested is-active">
               <a href="#" className="clear-all" id="category-clear-all">Clear All</a>
               <li><input id="category-checkbox1" type="checkbox"/><label for="category-checkbox1">Category 1</label></li>
               <li><input id="category-checkbox2" type="checkbox"/><label for="category-checkbox2">Category 2</label></li>
               <li><input id="category-checkbox3" type="checkbox"/><label for="category-checkbox3">Category 3</label></li>
               <li><input id="category-checkbox4" type="checkbox"/><label for="category-checkbox4">Category 4</label></li>
               <li><input id="category-checkbox5" type="checkbox"/><label for="category-checkbox5">Category 5</label></li>
               <li><input id="category-checkbox6" type="checkbox"/><label for="category-checkbox6">Category 6</label></li>
               <li><input id="category-checkbox7" type="checkbox"/><label for="category-checkbox7">Category 7</label></li>
               <li><input id="category-checkbox8" type="checkbox"/><label for="category-checkbox8">Category 8</label></li>
               <li><input id="category-checkbox9" type="checkbox"/><label for="category-checkbox9">Category 9</label></li>
               <li><input id="category-checkbox10" type="checkbox"/><label for="category-checkbox10">Category 10</label></li>
               <li><input id="category-checkbox11" type="checkbox"/><label for="category-checkbox11">Category 11</label></li>
               <li><input id="category-checkbox12" type="checkbox"/><label for="category-checkbox12">Category 12</label></li>
               <li><input id="category-checkbox13" type="checkbox"/><label for="category-checkbox13">Category 13</label></li>
               <li><input id="category-checkbox14" type="checkbox"/><label for="category-checkbox14">Category 14</label></li>
               <li><input id="category-checkbox15" type="checkbox"/><label for="category-checkbox15">Category 15</label></li>
            </ul>
         </li>
         <li className="product-filters-tab">
            <a href="#">Size</a>
            <ul className="categories-menu menu vertical nested is-active">
              <a href="#" className="clear-all" id="size-clear-all">Clear All</a>
              <li><input id="size-checkbox1" type="checkbox"/><label for="size-checkbox1">Small</label></li>
              <li><input id="size-checkbox2" type="checkbox"/><label for="size-checkbox2">Medium</label></li>
              <li><input id="size-checkbox3" type="checkbox"/><label for="size-checkbox3">Large</label></li>
              <li><input id="size-checkbox3" type="checkbox"/><label for="size-checkbox3">X-Large</label></li>
              <li><input id="size-checkbox3" type="checkbox"/><label for="size-checkbox3">XX-Large</label></li>
            </ul>
         </li>
         <li className="product-filters-tab">
            <a href="#">Color</a>
            <ul className="categories-menu menu vertical nested">
              <a href="#" className="clear-all" id="color-clear-all">Clear All</a>
              <li><input id="color-checkbox1" type="checkbox"/><label for="color-checkbox1">All Color</label></li>
              <li><input id="color-checkbox2" type="checkbox"/><label for="color-checkbox2">Black</label></li>
              <li><input id="color-checkbox3" type="checkbox"/><label for="color-checkbox3">White</label></li>
              <li><input id="color-checkbox4" type="checkbox"/><label for="color-checkbox4">Grey</label></li>
              <li><input id="color-checkbox5" type="checkbox"/><label for="color-checkbox5">Red</label></li>
              <li><input id="color-checkbox6" type="checkbox"/><label for="color-checkbox6">Blue</label></li>
              <li><input id="color-checkbox7" type="checkbox"/><label for="color-checkbox7">Green</label></li>
              <li><input id="color-checkbox8" type="checkbox"/><label for="color-checkbox8">Purple</label></li>
              <li><input id="color-checkbox8" type="checkbox"/><label for="color-checkbox8">Multi-color</label></li>
            </ul>
         </li>
         <li className="product-filters-tab">
            <a href="#">Price</a>
            <ul className="categories-menu menu vertical nested">
              <a href="#" className="clear-all" id="price-clear-all">Clear All</a>
              <li><input id="price-checkbox1" type="checkbox"/><label for="price-checkbox1">Under $25</label></li>
              <li><input id="price-checkbox2" type="checkbox"/><label for="price-checkbox2">$25–$50</label></li>
              <li><input id="price-checkbox3" type="checkbox"/><label for="price-checkbox3">$50–$250</label></li>
              <li><input id="price-checkbox4" type="checkbox"/><label for="price-checkbox4">$250–$600</label></li>
              <li><input id="price-checkbox4" type="checkbox"/><label for="price-checkbox4">$600–$1,000</label></li>
            </ul>
          </li>
        </ul>
      </div>

)
}
}
export default ProductFilter;

//More (Expand) or Less (Collapse)
$('.categories-menu.menu.nested').each(function(){
  var filterAmount = $(this).find('li').length;
  if( filterAmount > 5){
    $('li', this).eq(4).nextAll().hide().addClass('toggleable');
    $(this).append('<li className="more">More</li>');
  }
});

$('.categories-menu.menu.nested').on('click','.more', function(){
  if( $(this).hasClass('less') ){
    $(this).text('More').removeClass('less');
  }else{
    $(this).text('Less').addClass('less');
  }
  $(this).siblings('li.toggleable').slideToggle();
});
