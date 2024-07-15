import "./Nav.css";
import React, { useEffect, useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const Nav = () => {

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
  }, [cartItems]);

  return (
    <nav>
      <Link className="logo" to="/">

      <h3>Sneaker City</h3>
      
      </Link>
      

      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">

        <Link to="/cart">
          <div className="cart">
            <AiOutlineShoppingCart className="nav-icons" />
            <span className="cart-count">{cartItems.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
