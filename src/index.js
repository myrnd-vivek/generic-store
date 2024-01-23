import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/auth-context";
import CartProvider from "./context/cart-context";
import App from "./App";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap/dist/react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthProvider>
		<CartProvider>
			<App />
		</CartProvider>
	</AuthProvider>
);