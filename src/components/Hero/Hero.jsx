import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h1>The Generics</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<button>Get our Latest Album</button>
				</Col>
			</Row>
			<Row>
				<Col>
					<button>
						<i className="bi bi-play-circle"></i>
					</button>
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
