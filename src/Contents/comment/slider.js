import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./costom.css";
import "./animations.css"

const content=[
        {
            "image": "/static/img/ai-artificial-intelligence-astronomy-73910.jpg",
            "title": "Niklas Koppernigk",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "Buy Now",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/back-light-ball-ball-shaped-326168.jpg",
            "title": "Galileo Galilei",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "Buy Now",
		        "user": 'Bruno Vizovskyy',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/aqua-aquarium-art.jpg",
            "title": "Michael Faraday",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "Buy Now",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/art-ball-shaped-circle.jpg",
            "title": "Marie Curie",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "Buy Now",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/blur-charge-close-up.jpg",
            "title": "Albert Einstein",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "Buy Now",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        }
    ]

class Slider2 extends Component {


  render() {
return (

  <Slider className="slider-wrapper " onSlideChange={event => console.log(event.slideIndex)}>
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center`,
         }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>


)}
};



export default Slider2;
