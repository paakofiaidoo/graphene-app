import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Slider from 'react-animated-slider';
import Rating from 'react-rating';
import 'react-animated-slider/build/horizontal.css';
import "./costom.css";
import "./animations.css"

const topBrands=[
        {
            "image": "/static/img/ai-artificial-intelligence-astronomy-73910.jpg",
            "title": "Name of Start-Up",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "View Our Profile",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png',
            "rating":"5"
        },
        {
            "image": "/static/img/back-light-ball-ball-shaped-326168.jpg",
            "title": "Name of Start-Up",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "View Our Profile",
		        "user": 'Bruno Vizovskyy',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/aqua-aquarium-art.jpg",
            "title": "Name of Start-Up",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "View Our Profile",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/art-ball-shaped-circle.jpg",
            "title": "Name of Start-Up",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "View Our Profile",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        },
        {
            "image": "/static/img/blur-charge-close-up.jpg",
            "title": "Name of Start-Up",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "button": "View Our Profile",
		        "user": 'company name',
		        "userProfile": 'https://i.imgur.com/4KeKvtH.png'
        }
    ]

class Brandslider extends Component {


  render() {
return (

  <Slider autoplay={3000} className="slider-wrapper ">
			{topBrands.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center`,
         }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>

						<button className="slidebtn">{item.button}</button>
            <Rating
              stop={6}
              emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
              fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
                fractions={2}

            />
					</div>
					<section className="floor">
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
            <a className="showlink">Click Here For More</a>
					</section>
				</div>
			))}
		</Slider>


)}
};



export default Brandslider;
