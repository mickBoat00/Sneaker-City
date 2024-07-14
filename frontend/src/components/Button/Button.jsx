import React from 'react'
import './Button.css'

const Button = ({selectedSize, onClickHandler, value, title, className}) => {
  return (
    <button disabled={selectedSize === null } onClick={onClickHandler} value={value} className={`btns ${className}`} >
      {title}
    </button>
  );
}

export default Button
