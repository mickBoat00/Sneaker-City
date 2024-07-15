import React, { useEffect, useState, useContext } from 'react'
import './CartPage.css'
import CartItem from '../../components/CartItem/CartItem';
import { PaystackButton } from 'react-paystack'
import CartContext from '../../context/CartContext'

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const shipping = 8.00;
  const tax = 0; 

  const payStackProps = {
    className: "checkout",
    email: "test@test.com",
    currency: "GHS",
    amount: total * 100,
    publicKey: "pk_test_1fbe76ff3255801ca1260d059ac6256fc365a711",
    text: "Checkout",
    onSuccess: () => addToCart([]),
    onClose: () => console.log('closed'),
  }

  useEffect (() => {
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.sneaker.price * item.quantity, 0);
    setSubtotal(newSubtotal);

    const newTotal = newSubtotal + shipping + tax;
    setTotal(newTotal);
  }, [cartItems]);


  const handleDeleteItem = (sneakerId, selectedSizeId) => {
    const updatedCartItems = cartItems.filter(
      item => !(item.sneaker.id === sneakerId && item.selectedSize.id === selectedSizeId)
    );
    addToCart(updatedCartItems);
  }


  return (
    <div className="container">
      <div className="left-side">
        <h1>Cart</h1>
        {cartItems.length !== 0 ? (cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            onDelete={handleDeleteItem}
          />
        ))): <p>Cart is empty</p>}
      </div>
      <div className="right-side">
        <h2>Summary</h2>
        <div className="summary-details">
          <p>Subtotal: Ghc {subtotal.toFixed(2)}</p>
          <p>Estimated Shipping & Handling: Ghc {shipping.toFixed(2)}</p>
          <p>Estimated Tax: Ghc {tax.toFixed(2)}</p>
          <p>Total: Ghc {total.toFixed(2)}</p>
        </div>
        <PaystackButton {...payStackProps} />

        
      </div>
    </div>
  )
}

export default CartPage
