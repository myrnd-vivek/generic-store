import React from "react";
import { Nav, Badge } from "react-bootstrap";
import { useCartContext } from "../../context/cart-context";
import { NavLink, useLocation } from "react-router-dom";

import "./Header.css";

const Header = () => {
	const { totalItem, openCart } = useCartContext();
	const { pathname } = useLocation();
	return (
		<header>
			<Nav className="nav">
			<NavLink to='/' className='nav-link'>Home</NavLink>
			<NavLink to='/store' className='nav-link'>Store</NavLink>
			<NavLink to='/about' className='nav-link'>About</NavLink>
			{pathname === "/store" && (
				<NavLink className="cart nav-link" onClick={() => openCart()}>
					<i className="bi bi-cart"></i>
					<Badge bg="primary" className="cart__value">
						{totalItem}
					</Badge>
				</NavLink>
			)}
			</Nav>
			<h1>The Generics</h1>
		</header>
	);
};

export default Header;
