import React, { useEffect, useState } from 'react'
import './CartPage.css'
import CartItem from '../../components/CartItem/CartItem';
import Button from '../../components/Button/Button';
import { PaystackButton } from 'react-paystack'

const CartPage = ({initialCartItems, updateCart}) => {
    // const [cartItems, setCartItems] = useState(initialCartItems);
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
      onSuccess: () => updateCart([]),
      onClose: () => console.log('closed'),
    }

    useEffect (() => {
      const newSubtotal = initialCartItems.reduce((acc, item) => acc + item.sneaker.price * item.quantity, 0);
      setSubtotal(newSubtotal);

      const newTotal = newSubtotal + shipping + tax;
      setTotal(newTotal);
    }, [initialCartItems]);


    const handleDeleteItem = (sneakerId, selectedSizeId) => {
      console.log('was clicked', sneakerId, selectedSizeId)
      const updatedCartItems = initialCartItems.filter(
        item => !(item.sneaker.id === sneakerId && item.selectedSize.id === selectedSizeId)
      );
      updateCart(updatedCartItems);
    }


  return (
    <div className="container">
      <div className="left-side">
        <h1>Cart</h1>
        {initialCartItems.length !== 0 ? (initialCartItems.map(cartItem => (
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
