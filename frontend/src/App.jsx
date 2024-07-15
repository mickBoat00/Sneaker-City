import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Navigation/Nav'
import CartPage from './Pages/CartPage/CartPage'
import DetailPage from './Pages/DetailPage/DetailPage'

import HomePage from './Pages/HomePage/HomePage'

import {Routes, Route} from 'react-router-dom'
import CartProvider from './context/CartProvider'

function App() {

  return (
    <CartProvider>
      <Nav />

      <Routes>
        <Route path='/' element={ <HomePage/>}></Route>
        <Route path='/:id' element={<DetailPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>

    </CartProvider>
  )
}

export default App
