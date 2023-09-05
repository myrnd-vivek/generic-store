import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import About from './pages/About'
import Store from './pages/Store'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from './components/Cart/CartItem'
import { useCartContext } from './context/cart-context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/store',
    element: <Store />
  }
])

const App = () => {
  const {IsCartOpen} = useCartContext()
  return (
    <>
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Store />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
      {IsCartOpen && <CartItem />}
    </>
  )
}

export default App