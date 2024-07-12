import "./Nav.css";
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="profile-container">
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
        //   onChange={handleInputChange}
        //   value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        {/* <a href="#">
          <FiHeart className="nav-icons" />
        </a> */}

        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
      </div>
    </nav>
  )
}

export default Nav
