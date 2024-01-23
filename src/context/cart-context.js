const { createContext, useContext, useState } = require("react");

const CartContext = createContext({
	cartItems: [],
	addToCart: () => {},
	IsCartOpen: false,
	openCart: () => {},
	closeCart: () => {},
	totalItem: 0,
});

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [IsCartOpen, setIsCartOpen] = useState(false);
	const [totalItem, setTotalItem] = useState(0);

	const addToCart = (cartItem) => {
		console.log(cartItem);
		const IsAlreadyAdd = cartItems.find((item) => item.id == cartItem.id);
		console.log(IsAlreadyAdd);
		if (IsAlreadyAdd)
			return alert("This item is already added to the cart");
		setCartItems([{ ...cartItem, quantity: 1 }, ...cartItems]);
		setTotalItem(totalItem + 1);
	};

	const openCart = () => setIsCartOpen(true);
	const closeCart = () => setIsCartOpen(false);

	const cartContext = {
		cartItems,
		addToCart,
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