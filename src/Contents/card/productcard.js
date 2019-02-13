import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import "./costom.css"
import Rating2 from "../rating/rating4"
import Rating from 'react-rating';

const product = [
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"4"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"3"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"1"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"0"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"2"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"2"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"1"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"3"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"2"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"6"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"2"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$200.00",
    discription:"Product Description",
    "rating":"2"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$200.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/winner-avatar.svg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
]


class Productcard extends Component {

    render() {  return (
      <div className ="cool">
    {
      product.map((info, key) => (
        <Product
        image={info.image}
        name={info.name}
        prize={info.prize}
        discription={info.discription}
        rating={info.rating}
        />
      ))
    }
    </div>

                    )

                }
            };

export default Productcard;

const Product = ({image, name, prize, discription, rating }) => {
  return (
    <div className="productCard">
      <div className="tile is-parent ">
          <article className="  is-secondary producttile">
              <div className="content">
                  <figure className=" is-4by3">
                    <img className="hackImage" src={image}/>
                  </figure>
                  <h3 className="topic"><strong>{name}</strong></h3>
                  <span className="">{prize}</span>
                  <p className="subtitle">{discription} <a>...</a></p>

                        <Rating
                        stop={3}
                        emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                          'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                          'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
                        fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                          'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                          'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
                          fractions={2}/>
                    <div className="field is-grouped">
                      <p className="control">
                        <a className="bd-tw-button button" href="#">
                          <span>Buy Now</span>
                        </a>
                      </p>

                      <p className="control">
                        <a className="button is-primary" href="#">
                          <span>more info</span>
                        </a>
                      </p>

                    </div>
                </div>
            </article>
        </div>
        </div>

  )
}
