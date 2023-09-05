import React from "react";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";

import "./Header.css";
import { useCartContext } from "../../context/cart-context";

const Header = () => {
	const {totalItem, openCart} = useCartContext();
	return (
		<header>
				<Nav className="nav">
					<Nav.Link href="/home">Home</Nav.Link>
					<Nav.Link href="/store">Store</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link className="cart" onClick={() => openCart()}>
						<i className="bi bi-cart"></i>
						<Badge bg="primary" className="cart__value">{totalItem}</Badge>
					</Nav.Link>
				</Nav>
				<h1>The Generics</h1>
		</header>
	);
};

export default Header;
