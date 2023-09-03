import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Container>
      <Row className='row-cols-3'>
        <Card style={{ width: '18rem' }}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Img src={product.imageUrl} />
          <Card.Body className='d-flex align-items-center justify-content-between'>
            <Card.Text>${product.price}</Card.Text>
            <button>Add to Cart</button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Product