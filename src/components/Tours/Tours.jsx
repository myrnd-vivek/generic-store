import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Tours = () => {
	const data = [
		{
			id: 1,
			date: "JUL16",
			address: "DETROIT, MI",
			name: "DTE ENERGY MUSIC THEATRE",
		},
		{
			id: 2,
			date: "JUL19",
			address: "TORONTO,ON",
			name: "BUDWEISER STAGE",
		},
		{
			id: 3,
			date: "JUL22",
			address: "BRISTOW, VA",
			name: "JIGGY LUBE LIVE",
		},
	];
	return (
		<Container>
			<Row>
				<Col>
					<h1>Tours</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					{data.map((tour) => {
						return (
							<Row
								key={tour.id}
							>
                <Col><p>{tour.date}</p></Col>
                <Col><p>{tour.address}</p></Col>
                <Col><p>{tour.name}</p></Col>
                <Col><button>BUY TICKETS</button></Col>
							</Row>
						);
					})}
				</Col>
			</Row>
		</Container>
	);
};

export default Tours;
