import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetails = () => {
	const param = useParams();
	console.log(param);
	return (
		<Container>
			<ProductImage src="https://rukminim2.flixcart.com/image/832/832/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70" alt="Product" />
			<Title>Product Title</Title>
			<Description>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				ac turpis vel eros tincidunt bibendum vel vel purus.
			</Description>
			<Price>$199.99</Price>
			<BuyButton>Add to Cart</BuyButton>
		</Container>
	);
};

const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	background-color: #fff;
`;

const ProductImage = styled.img`
	max-width: 100%;
	height: auto;
	border-radius: 8px;
	margin-bottom: 20px;
`;

const Title = styled.h1`
	font-size: 28px;
	margin: 10px 0;
`;

const Description = styled.p`
	font-size: 18px;
	margin-bottom: 20px;
	color: #555;
`;

const Price = styled.div`
	font-size: 24px;
	color: #e53935;
	margin-bottom: 20px;
`;

const BuyButton = styled.button`
	background-color: #4caf50;
	color: #fff;
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #45a049;
	}
`;

export default ProductDetails;
