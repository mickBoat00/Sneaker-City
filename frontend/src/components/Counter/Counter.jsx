import React from 'react'
import Button from '../Button/Button'
import './Counter.css'

const Counter = ({quantity, handleDecrement, handleIncrease, selectedSize}) => {
  return (
    <div className="qty-counter">
        <Button selectedSize={selectedSize } onClickHandler={handleDecrement} value="" title="-" />
        <div className='count'>{quantity}</div>
        <Button selectedSize={selectedSize} className={'increaseBtn'} onClickHandler={handleIncrease} value="" title="+" />
    </div>
  )
}

export default Counter
