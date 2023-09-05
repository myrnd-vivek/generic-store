import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../components/Product/Product";
import { styled } from "styled-components";

const Store = () => {
	const productsArr = [
		{
			id: 1,
			title: "Colors",
			price: 100,
			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
		},
		{
			id: 2,
			title: "Black and white Colors",
			price: 50,
			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
		},
		{
			id: 3,
			title: "Yellow and Black Colors",
			price: 70,
			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
		},

		{
			id: 4,
			title: "Blue Color",
			price: 100,
			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
		},
	];
	return <Wrapper>
			<h1>Music</h1>
			<div className="prodoct__container">
				{
					productsArr.map((product) => {
						return <Product key={product.id} product={product} />
					})
				}
			</div>
	</Wrapper>;
};

const Wrapper = styled.section`
	h1 {
		font-family: Metal Mania; 
		text-align: center;
	}

	.prodoct__container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		width: 50%;
    margin: 0 auto;
	}
`

export default Store;
