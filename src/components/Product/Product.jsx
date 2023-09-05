import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>{product.title}</Card.Title>
      <Card.Img src={product.imageUrl} />
      <Card.Body className='d-flex align-items-center justify-content-between'>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product