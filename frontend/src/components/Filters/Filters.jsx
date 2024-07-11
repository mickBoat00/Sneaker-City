import React from 'react'
import Button from '../Button/Button'
import "./Filters.css";

const Filters = ({handleClick}) => {
  return (
    <div>
        <h2 className="recommended-title">Filter Sneakers</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Sneakers" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
  )
}

export default Filters
