import React from 'react'
import Hero from '../components/Hero/Hero'
import { Col, Container, Row } from 'react-bootstrap'
import Tours from '../components/Tours/Tours'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Hero />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tours />
        </Col>
      </Row>
    </Container>
  )
}

export default Home