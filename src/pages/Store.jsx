import React from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "../components/Cart/CartItem";
import { useCartContext } from "../context/cart-context";
import { useAuthContext } from "../context/auth-context";
import ProductList from "../components/Product/ProductList";
import { Redirect } from "react-router-dom";

const Store = () => {
	const { IsCartOpen } = useCartContext();
	const { IsLoggedIn } = useAuthContext();
  if (!IsLoggedIn) {
    return <Redirect to="/login" />;
  }
	return (
		<>
			<Container>
				<Row>
					<ProductList />
				</Row>
			</Container>
			{IsCartOpen && <CartItem />}
		</>
	);
};

export default Store;
