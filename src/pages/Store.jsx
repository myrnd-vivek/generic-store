import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CartItem from '../components/Cart/CartItem'
import { useCartContext } from '../context/cart-context'
import ProductList from '../components/Product/ProductList'

const Store = () => {
	const {IsCartOpen} = useCartContext()
  return (
    <>
     <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <ProductList />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
      {IsCartOpen && <CartItem />}
    </>
  )
}

export default Store