import React from 'react'
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ img, brand, model, star, reviews, price, releaseDate }) => {
  return (
    <>
      <Link className='link' to="/1">
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
              <FiHeart className="heart-icon" />
            </div>
          </section>
        </div>
      </section>
      </Link>
    </>
  )
}

export default Card
