import React from 'react'
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, brand, model, star, reviews, price, releaseDate }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={model} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{brand} {model}</h3>
          <section className="card-reviews">
            <span className="total-reviews">Released Date: {releaseDate}</span>
          </section>
          {/* <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section> */}
          <section className="card-price">
            <div className="price">
              Gh {price}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Card
