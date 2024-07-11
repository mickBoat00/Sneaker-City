import './App.css'
import Nav from './components/Navigation/Nav'
import CartPage from './Pages/CartPage/CartPage'
import DetailPage from './Pages/DetailPage/DetailPage'

import HomePage from './Pages/HomePage/HomePage'

function App() {

  return (
    <>
      <Nav/>
      <HomePage/>
      <DetailPage/>
      <CartPage/>
    </>
  )
}

export default App
