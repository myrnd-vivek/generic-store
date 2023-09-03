import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../components/Product/Product";

const Store = () => {
	const productsArr = [
		{
			title: "Colors",
			price: 100,
			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
		},

		{
			title: "Black and white Colors",
			price: 50,
			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
		},

		{
			title: "Yellow and Black Colors",
			price: 70,
			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
		},

		{
			title: "Blue Color",
			price: 100,
			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
		},
	];
	return <Container>
		<Row>
			<h1>Music</h1>
			{
				productsArr.map((product,index) => {
					return <Product key={index} product={product} />
				})
			}
		</Row>
	</Container>;
};

export default Store;
