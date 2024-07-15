import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import './CartItem.css'

const CartItem = ({cartItem, onDelete}) => {
  return (
    <div className="item">
        <img src={cartItem.sneaker.img}  alt={cartItem.sneaker.model}/>
        <div className="item-details">
            <div className="top">
                <h3>{cartItem.sneaker.brand} {cartItem.sneaker.model}</h3>
                <h3>Ghc {cartItem.sneaker.price * cartItem.quantity}</h3>
            </div>
            <p>Size {cartItem.selectedSize.size}</p>
            <p>Price {cartItem.sneaker.price}</p>
            <p>Quanity {cartItem.quantity}</p>
            <div className="actions" onClick={() => onDelete(cartItem.sneaker.id, cartItem.selectedSize.id )}>
                <a><FaTrashAlt/></a>
            </div>
        </div>
    </div>
  )
}

export default CartItem
