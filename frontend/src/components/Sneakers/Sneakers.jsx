import React from 'react'
import Products from "../../data/data";
import Card from '../Card/Card';

import "./Sneakers.css";

const Sneakers = () => {
  const brand = "Nike"
  const releaseDate = "01/05/2024"

  const result = Products.map(
    ({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        brand={brand}
        model={title}
        star={star}
        reviews={reviews}
        price={newPrice}
        releaseDate={releaseDate}
      />
    )
  );

  return (
    <>
      <section className="card-container">{result}</section>
    </>
  )
}

export default Sneakers
