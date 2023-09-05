import React from "react";
import { Button, Table } from "react-bootstrap";
import { styled } from "styled-components";

const CartItem = () => {
	const cartElements = [
		{
			title: "Colors",

			price: 100,

			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

			quantity: 2,
		},

		{
			title: "Black and white Colors",

			price: 50,

			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

			quantity: 3,
		},

		{
			title: "Yellow and Black Colors",

			price: 70,

			imageUrl:
				"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

			quantity: 1,
		},
	];
	return (
		<Wrapper>
			<h1>CART</h1>
			<Table>
				<thead>
					<tr>
						<th>ITEM</th>
						<th>PRICE</th>
						<th>QUANTITY</th>
					</tr>
				</thead>
				<tbody>
					{
						cartElements.map((item,index) => {
							return <tr key={index}>
								<td><img src={item.imageUrl} alt={item.title} /> {item.title}</td>
								<td>{item.price}</td>
								<td>{item.quantity} <Button variant="danger">Remove</Button></td>
							</tr>
						})
					}
				</tbody>
			</Table>
			<h3>Total $51.96</h3>
			<Button className="purchase">PURCHASE</Button>
		</Wrapper>
	);
};

const Wrapper = styled.aside`
	h1 {
		text-align: center;
	}

	h3 {
		text-align: end;
	}

	img {
		width: 100px;
		height: 100px;
	}
	
	position: fixed;
	background: white;
	top: 52px;
	right: 0;
`;

export default CartItem;
