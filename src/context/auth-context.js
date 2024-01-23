import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
	logIn: ({ token }) => {},
	logOut: () => {},
	IsLoggedIn: false,
});

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);

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
		}
	}, []);

  const authValue = {
    logIn,
    logOut,
    IsLoggedIn: !!token
  }

	return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default AuthProvider;
