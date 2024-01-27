import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({
	logIn: ({ token }) => {},
	logOut: () => {},
	IsLoggedIn: false,
	userId: null,
});

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	const logIn = ({ token }) => {
		setToken(token);
		localStorage.setItem("token", token);
	};

	const logOut = () => {
		setToken(null);
		localStorage.removeItem("token");
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setToken(token);
			const { email } = jwtDecode(token);
			if (email) {
				const id = email.split(/[@.]/).join("");
				setUserId(id);
			}
		}
	}, []);

	const authValue = {
		logIn,
		logOut,
		IsLoggedIn: !!token,
		userId
	};

	return (
		<AuthContext.Provider value={authValue}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default AuthProvider;
