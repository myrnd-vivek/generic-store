import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useCartContext } from '../../context/cart-context'

const Product = ({product}) => {
  const {addToCart} = useCartContext();
  const addToCartClickHandler = () => {
    addToCart(product);
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>{product.title}</Card.Title>
      <Card.Img src={product.imageUrl} />
      <Card.Body className='d-flex align-items-center justify-content-between'>
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={addToCartClickHandler}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product