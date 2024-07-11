import React from 'react'
import './CartPage.css'
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  return (
    <div class="container">
        <div class="left-side">
            <h1>Cart</h1>
            <div class="item">
                <img src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg"  alt="Nike Dunk Low Retro"/>
                <div class="item-details">
                    <div className="top">
                        <h3>Nike Dunk Low Retro</h3>
                        <h3>$115.00</h3>
                    </div>
                    <p>Men's Shoes</p>
                    <p>University Red/White/Obsidian</p>
                    <p>Size M 13 / W 14.5</p>
                    <p>Quantity 1</p>
                    <div class="actions">
                        <a><FaTrashAlt/></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg"  alt="Nike Dunk Low Retro"/>
                <div class="item-details">
                    <div className="top">
                        <h3>Nike Dunk Low Retro</h3>
                        <h3>$115.00</h3>
                    </div>
                    <p>Men's Shoes</p>
                    <p>University Red/White/Obsidian</p>
                    <p>Size M 13 / W 14.5</p>
                    <p>Quantity 1</p>
                    <div class="actions">
                        <a><FaTrashAlt/></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg"  alt="Nike Dunk Low Retro"/>
                <div class="item-details">
                    <div className="top">
                        <h3>Nike Dunk Low Retro</h3>
                        <h3>$115.00</h3>
                    </div>
                    <p>Men's Shoes</p>
                    <p>University Red/White/Obsidian</p>
                    <p>Size M 13 / W 14.5</p>
                    <p>Quantity 1</p>
                    <div class="actions">
                        <a><FaTrashAlt/></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-side">
            <h2>Summary</h2>
            <div class="summary-details">
                <p>Subtotal: $915.00</p>
                <p>Estimated Shipping & Handling: $8.00</p>
                <p>Estimated Tax: -</p>
                <p>Total: $923.00</p>
            </div>
            <button class="checkout">Checkout</button>
            <button class="paypal">PayPal</button>
        </div>
    </div>
  )
}

export default CartPage
