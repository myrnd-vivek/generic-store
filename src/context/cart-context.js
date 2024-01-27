import { useAuthContext } from "./auth-context";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({
	cartItems: [],
	addToCart: () => {},
	removeFromCart: () => {},
	IsCartOpen: false,
	openCart: () => {},
	closeCart: () => {},
	totalItem: 0,
});

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [IsCartOpen, setIsCartOpen] = useState(false);
	const [totalItem, setTotalItem] = useState(0);

	const { userId } = useAuthContext();
	const URL = `https://crudcrud.com/api/26068a55626c4ae68e54c7bccee5ca95/cart${userId}`;

	const addToCart = async (cartItem) => {
		const IsAlreadyAdd = cartItems.find((item) => item.id === cartItem.id);
		if (IsAlreadyAdd)
			return alert("This item is already added to the cart");

		try {
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(cartItem)
			});
			const result = await response.json();
			console.log(result);
			getCartItems();
		} catch (error) {
			alert(error.message);
		}
	};

	const removeFromCart = async ({ resourceId }) => {
		try {
			await fetch(`${URL}/${resourceId}`, {method: "DELETE"});
			alert("Delete Successfully");
			getCartItems();
		} catch (error) {
			alert(error.message);
		}	
	}

	const getCartItems = async () => {
		try {
			const resp = await fetch(URL);
			const result = await resp.json();
			setCartItems(result)
			setTotalItem(result.length);
		} catch (error) {
			alert(error.message)
		}
	}

	useEffect(() => {
		if (userId && IsCartOpen) {
			getCartItems();
		}
	},[IsCartOpen, userId]);

	const openCart = () => setIsCartOpen(true);
	const closeCart = () => setIsCartOpen(false);

	const cartContext = {
		cartItems,
		addToCart,
		removeFromCart,
		IsCartOpen,
		openCart,
		closeCart,
		totalItem,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};

export default CartProvider;