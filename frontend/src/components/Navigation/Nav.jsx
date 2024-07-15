import "./Nav.css";
import React from 'react'
import { Link } from 'react-router-dom'
import Cart from "../Cart/Cart";

const Nav = () => {

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
          <Cart/>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
