import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const topProduct=[
        {
            "image": "/static/img/ai-artificial-intelligence-astronomy-73910.jpg",
            "title": "Name of Product",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "prize": "$56.00",
            "button": "Buy Now",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/back-light-ball-ball-shaped-326168.jpg",
            "title": "Name of Product",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "prize": "$56.00",
            "button": "Order Yours Now",
		        "user": 'Bruno Vizovskyy',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/aqua-aquarium-art.jpg",
            "title": "Name of Product",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "prize": "$56.00",
            "button": "Patronise Now",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/art-ball-shaped-circle.jpg",
            "title": "Name of Product",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "prize": "$56.00",
            "button": "Order Services Now",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/blur-charge-close-up.jpg",
            "title": "Name of Product",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "prize": "$56.00",
            "button": "Buy Now",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        }
    ]


class ProductSlider extends Component {
  render() {

return (


  <Slider autoplay={5000} className="slider-wrapper ">
			{topProduct.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center`,
         }}
				>
					<div className="inner slidecard">
          <h1>{item.title}</h1>
          <button>{item.button}</button>
            <span className="prize">{item.prize}</span>
					</div>
				</div>
			))}
		</Slider>


)}
};



export default ProductSlider;
