import React, { useEffect, useState } from 'react'
import './DetailPage.css'
import Button from '../../components/Button/Button'
import { useParams } from 'react-router-dom'
import Counter from '../../components/Counter/Counter'

const DetailPage = ({updateCart}) => {

  const { id } = useParams()

  const [sneaker, setSneaker] = useState({});
  const [quantity, setQuantity] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null);
  const [displayError, setDisplayError] = useState(false);


  const handleSizeClick = size => {
    setDisplayError(false)
    setSelectedSize(size);
    setQuantity(1);
  };

  useEffect(() => {
    fetch(`/api/sneakers/${id}/`)
      .then(response =>  response.json())
      .then(data =>setSneaker(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity === selectedSize.quantityLeft ? prevQuantity :  prevQuantity + 1));
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCart = () => {
    // updating the cart

    if (selectedSize == null) {
      setDisplayError(true)
      return
    } 
    const product = {
      "sneaker": sneaker.id,
      "selectedSize": selectedSize,
      "quantity": quantity,
    }


    updateCart(product)

    setSelectedSize(null)
    setQuantity(0)


  };

  return (
    <div className="container">
        <div className="images">
            <img src={sneaker.img} alt="Side View"/>
        </div>
        <div className="details">
            
            <h1>{sneaker.brand} {sneaker.model}</h1>
            <h2>Ghc {sneaker.price}</h2>
            <p>{sneaker.description}</p>
            <p><b>Release Date:</b> {sneaker.releaseDate}</p>
            <div className="sizes">
              {sneaker.sizesAvailable && sneaker.sizesAvailable.length > 0 ? (
                sneaker.sizesAvailable.map( size => (
                  <Button key={size.id}
                    className={`sizes-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClickHandler={() => handleSizeClick(size)} 
                    value="" 
                    title={`${size.size} (${size.quantityLeft} left)`} 
                  />
                ))
              ) : (
                <p style={{color: "red"}}>No sizes available</p>
              )}
            </div> 
            

            {
              sneaker.sizesAvailable && sneaker.sizesAvailable.length > 0  && 
              <>
                <Counter selectedSize={selectedSize} quantity={quantity} handleDecrement={decrementQuantity} handleIncrease={incrementQuantity} />
                {displayError && <p style={{color: "red"}}>Please select a size.</p>}
                <Button className={'addToCart'} onClickHandler={addToCart} value="" title="Add to cart" />
              </>
            }
        </div>
    </div>
  )
}

export default DetailPage
