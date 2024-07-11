import React from 'react'
import './DetailPage.css'
import Button from '../../components/Button/Button'

const DetailPage = () => {
    function handleClick(){

    }
  return (
    <div class="container">
        <div class="images">
            <img src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="Side View"/>
        </div>
        <div class="details">
            
            <h1>Air Jordan 13 - Dune Red</h1>
            <h2>$200.00</h2>
            <p>The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's "Black Cat" alter ego.</p>
            <p><b>Release Date:</b> 01/05/2024</p>
            <div class="sizes">
                <div>M 7 / W 8.5 <span class="stock">(5 left)</span></div>
                <div>M 7.5 / W 9 <span class="stock">(3 left)</span></div>
                <div>M 8 / W 9.5 <span class="stock">(4 left)</span></div>
                <div>M 8.5 / W 10 <span class="stock">(2 left)</span></div>
                <div>M 9 / W 10.5 <span class="stock">(1 left)</span></div>
                <div>M 9.5 / W 11 <span class="stock">(6 left)</span></div>

            </div>
            <Button onClickHandler={handleClick} value="" title="Add to cart" />
        </div>
    </div>
  )
}

export default DetailPage
