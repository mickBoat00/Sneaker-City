import React, { useContext, useEffect } from 'react'
import CartContext from '../../context/CartContext';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    useEffect(() => {
    }, [cartItems]);


  return (
    <div className="cart">
        <AiOutlineShoppingCart className="nav-icons" />
        <span className="cart-count">{cartItems.length}</span>
    </div>
  )
}

export default Cart
