import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CartItem from '../components/Cart/CartItem'
import { useCartContext } from '../context/cart-context'
import ProductList from '../components/Product/ProductList'

const Store = () => {
	const {IsCartOpen} = useCartContext()
  return (
    <>
     <Container>
        <Row>
          <ProductList />
        </Row>
      </Container>
      {IsCartOpen && <CartItem />}
    </>
  )
}

export default Store