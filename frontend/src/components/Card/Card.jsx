import React from 'react'
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ id, img, brand, model, price, releaseDate }) => {
  return (
    <>
      <Link className='link' to={`${id}`}>
      <section className="card">
        <img src={img} alt={model} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{brand} {model}</h3>
          <section className="card-info">
            <span >Released Date: {releaseDate}</span>
          </section>
          <section className="card-price">
            <div className="price">
              Ghc {price}
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
