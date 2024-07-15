import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Navigation/Nav'
import CartPage from './Pages/CartPage/CartPage'
import DetailPage from './Pages/DetailPage/DetailPage'

import HomePage from './Pages/HomePage/HomePage'

import {Routes, Route} from 'react-router-dom'

function App() {

  const [selectedProduct, setSelectedProduct] = useState([]);

  function updateCart(item){
    setSelectedProduct(item);
  }

  useEffect(() => {
  }, [selectedProduct]);

  return (
    <>
      <Nav cartItems={selectedProduct}/>

      <Routes>
        <Route path='/' element={ <HomePage/>}></Route>
        <Route path='/:id' element={<DetailPage cart={selectedProduct} updateCart={updateCart} />}></Route>
        <Route path='/cart' element={<CartPage initialCartItems={selectedProduct} updateCart={updateCart}/>}></Route>
      </Routes>

    </>
  )
}

export default App
