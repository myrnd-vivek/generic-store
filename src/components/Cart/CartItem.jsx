import React from "react";
import { Button, Table } from "react-bootstrap";
import { styled } from "styled-components";
import { useCartContext } from "../../context/cart-context";

const CartItem = () => {
	const {closeCart,cartItems} = useCartContext();
	const totalAmount = cartItems.reduce((total,curr) => curr.price + total,0);
	return (
		<Wrapper>
			<h1>CART</h1>
			<button onClick={() => closeCart()} className="btn close-btn">X</button>
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
						cartItems.map((item,index) => {
							return <tr key={index}>
								<td><img src={item.imageUrl} alt={item.title} /> {item.title}</td>
								<td>{item.price}</td>
								<td>{item.quantity} <Button variant="danger">Remove</Button></td>
							</tr>
						})
					}
				</tbody>
			</Table>
			<h3>Total ${totalAmount}</h3>
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

	.close-btn {
		position: fixed;
    top: 3rem;
    right: 1px;
	}
	
	position: fixed;
	background: white;
	top: 52px;
	right: 0;
	z-index: 9999;
	min-width: 400px;
	min-height: 100vh;
	border: 1px solid black;
`;

export default CartItem;
