import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import "./costom.css"
import Rating2 from "../rating/rating4"
import Rating from 'react-rating';

const startup = [
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating:"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating:"4"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating:"3"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating:"1"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating:"0"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating:"2"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"2"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"1"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"3"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"2"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"6"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"2"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"$200.00",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"2"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"$200.00",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
  {
    image:"/static/img/logo.svg",
    name:"Name of startup",
    product:"examples of products or sevices",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "rating":"5"
  },
]


class Startupcard extends Component {

    render() {  return (
      <div >
    {
      startup.map((info, key) => (
        <Startup className="cool"
        image={info.image}
        name={info.name}

        discription={info.discription}
        rating={info.rating}
        />
      ))
    }
  </div>
                    )

                }
            };

export default Startupcard;

const Startup = ({image, name,  discription, rating }) => {
  return (
    <div className="productCard">
    <div className="tile is-parent ">
    <article className="tile  is-secondary producttile">
      <div className="content ">
      <figure className=" is-4by3">
        <img className="hackImage" src={image}/>
      </figure>
      <h3 className="topic"><strong>{name}</strong></h3>

        <p className="subtitle">{discription}</p>
        <a>...</a>
        <Rating
          stop={6}
          emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
            'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
            'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
          fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
            'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
            'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
            fractions={2} placeholderRating={rating}  />
        <div className="field is-grouped">
          <p className="control">



            <a className="bd-tw-button button" href="#">
              <span>View Profile</span>
            </a>
          </p>

          <p className="control">
            <a className="button is-primary" href="#p">

              <span>Order Product or Servics</span>
            </a>
          </p>

        </div>
      </div>
      </article>
      </div>
    </div>

  )
}
