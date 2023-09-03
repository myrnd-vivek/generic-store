import React from "react";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";

import "./Header.css";

const Header = () => {
	return (
		<header>
				<Nav className="nav">
					<Nav.Link href="/home">Home</Nav.Link>
					<Nav.Link href="/store">Store</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/cart" className="cart">
						<i className="bi bi-cart"></i>
						<Badge bg="primary" className="cart__value">9</Badge>
					</Nav.Link>
				</Nav>
				<h1>The Generics</h1>
		</header>
	);
};

export default Header;
