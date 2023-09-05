import React from "react";
import Hero from "../components/Hero/Hero";
import { Col, Container, Row } from "react-bootstrap";
import Tours from "../components/Tours/Tours";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<Container fluid>
			<Row>
				<Header />
			</Row>
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
			<Row>
				<Footer />
			</Row>
		</Container>
	);
};

export default Home;
