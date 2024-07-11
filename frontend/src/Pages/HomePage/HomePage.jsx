import React from 'react'
import Filters from '../../components/Filters/Filters'
import Sneakers from '../../components/Sneakers/Sneakers'

const HomePage = () => {
    function handleClick() {
    
    }
  
  return (
    <div>
      <Filters handleClick={handleClick}/>
      <Sneakers />
    </div>
  )
}

export default HomePage
