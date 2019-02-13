import React, { Component } from 'react';
import AddCartBtn from "../button-add-cart/button-add-cart"
import BtnGroupOption from "../button-group-option/button-group-option"
import './costom.scss'
import 'bulma/css/bulma.css'

const product = [
  {
    image:"/static/img/product 1.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"5"
  },
  {
    image:"/static/img/service 2.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"5"
  },
  {
    image:"/static/img/product 2.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"4"
  },
  {
    image:"/static/img/service 4.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"5"
  },
  {
    image:"/static/img/product 3.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"3"
  },
  {
    image:"/static/img/service 5.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"5"
  },
  {
    image:"/static/img/product 4.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"1"
  },
  {
    image:"/static/img/product 5.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"0"
  },
  {
    image:"/static/img/product 6.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"2"
  },
  {
    image:"/static/img/product 7.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/service 3.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"5"
  },
  {
    image:"/static/img/product 8.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"2"
  },
  {
    image:"/static/img/product 9.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"1"
  },
  {
    image:"/static/img/service 1.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"3"
  },
  {
    image:"/static/img/product 1.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"5"
  },
  {
    image:"/static/img/service 2.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"5"
  },
  {
    image:"/static/img/product 2.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"4"
  },
  {
    image:"/static/img/service 4.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"5"
  },
  {
    image:"/static/img/product 3.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"3"
  },
  {
    image:"/static/img/service 5.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"5"
  },
  {
    image:"/static/img/product 4.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"1"
  },
  {
    image:"/static/img/product 5.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"0"
  },
  {
    image:"/static/img/product 6.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    rating:"2"
  },
  {
    image:"/static/img/product 7.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"5"
  },
  {
    image:"/static/img/service 3.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"5"
  },
  {
    image:"/static/img/product 8.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"2"
  },
  {
    image:"/static/img/product 9.jpeg",
    name:"Name of Product",
    prize:"$500.00",
    discription:"Product Description",
    "rating":"1"
  },
  {
    image:"/static/img/service 1.jpeg",
    name:"Name of Service",
    prize:"$500.00",
    discription:"Service Description",
    "rating":"3"
  },
]

class Ecommenceslider extends Component {
  render() {
    return (
      <div className="ecommerce-product-slider " role="region" aria-label="Favorite Space Pictures">



            <div className="">
            {
              product.map((info, key) => (
                <Ecommerce
                image={info.image}
                name={info.name}
                prize={info.prize}
                discription={info.discription}

                />
              ))
            }

            </div>


      </div>
)
}
}

export default Ecommenceslider;

const Ecommerce  = ({image, name, prize, discription }) => {
  return (
<div className="column   arrange">
  <div className="product-card">
    <div className="product-card-thumbnail">
      <a href="#"><img src={image}/></a>
    </div>
    <h2 className="product-card-title"><a href="#">{name}</a></h2>
    <span className="product-card-desc">{discription}</span>
    <span className="product-card-price">{prize}</span><span className="product-card-sale">$12.99</span>
    <div className="product-card-colors">
      <AddCartBtn/>
      <BtnGroupOption/>

    </div>
  </div>
</div>
)}
