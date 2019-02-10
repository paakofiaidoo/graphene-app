import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content=[
        {
            "imgSrc": "/static/img/1.jpg",
            "title": "Niklas Koppernigk",
            "des": "19 February 1473 – 24 May 1543"
        },
        {
            "imgSrc": "/static/img/1.jpg",
            "title": "Galileo Galilei",
            "des": "15 February 1564 – 8 January 1642"
        },
        {
            "imgSrc": "/static/img/1.jpg",
            "title": "Michael Faraday",
            "des": "22 September 1791 – 25 August 1867"
        },
        {
            "imgSrc": "/static/img/1.jpg",
            "title": "Marie Curie",
            "des": "7 November 1867 – 4 July 1934"
        },
        {
            "imgSrc": "/static/img/1.jpg",
            "title": "Albert Einstein",
            "des": "14 March 1879 – 18 April 1955"
        }
    ]


class ProductSlider extends Component {
  render() {

return (


  <Slider>
    {content.map((article, index) => <div key={index}>
      <h2>{article.title}</h2>
      <div>{article.des}</div>
    </div>)}
  </Slider>

)}
};



export default ProductSlider;
