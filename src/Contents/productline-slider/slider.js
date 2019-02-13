import React, { Component } from 'react';
import CarouselSlider  from "react-carousel-slider";
import "./costom.css"

const products = {
                            "Scientists": {

                                "items":[
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
  }}

class Produtline extends Component {
  render() {

let itemsStyle = {
    padding: "0px",
    background: "white",
    margin:"0 30px",
    boxShadow: "1px 1px 1px 1px #9E9E9E",
    borderRadius: "4px"
};

let imgStyle = {
    height: "70%",
    borderBottom: "1px solid #9E9E9E"
};

let textBoxStyle = {
    width: "40%",
    top: "290px",
    color: "black",
    background: "transparent",
    fontSize: "14px",
    fontFamily: "Times New Roman"
};

let textBoxStyle2 = {
    width: "70%",
    top: "330px",
    color: "black",
    background: "transparent",
    fontSize: "12px",
    fontStyle: "italic"
};

let scientists = products.Scientists.items.map((item, index) =>
    <div key = {index} >
        <img style = {imgStyle} src = {item.image} ></img>
        <p style = {textBoxStyle} >{item.title}</p>
        <p style = {textBoxStyle2} >{item.prize}</p>
        <button>{item.button}</button>
    </div>
);

let btnWrapperStyle = {
    position: "relative",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    boxShadow: "1px 1px 1px 1px #9E9E9E",
    textAlign: "center"
}

let btnStyle = {
    display: "inline-block",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "36px"
}

let rBtnCpnt = (<div style = {btnWrapperStyle} >
    <div style = {btnStyle} className = "material-icons" >chevron_right</div>
</div>);

let lBtnCpnt = (<div style = {btnWrapperStyle} >
    <div style = {btnStyle} className = "material-icons" >chevron_left</div>
</div>);

let scientistsCard = (<CarouselSlider
    sliderBoxStyle = {{height: "450px", width: "80%", background: "transparent"}}
    accEle = {{dots: false}}
    slideCpnts = {scientists}
    itemsStyle = {itemsStyle}
    buttonSetting = {{placeOn: 'middle-outside'}}
    rBtnCpnt = {rBtnCpnt}
    lBtnCpnt = {lBtnCpnt}
/>);

return (<div style = {{position:"relative", margin: "0 auto", width: "80%"}} >
    {scientistsCard}
</div>);
             }

  }
  export default Produtline
