import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

import "./Sneakers.css";

const Sneakers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/sneakers/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const result = data.map(
    ({ id, img,brand, model, price, releaseDate }) => (
      <Card
        key={id}
        id={id}
        img={img}
        brand={brand}
        model={model}
        price={price}
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
