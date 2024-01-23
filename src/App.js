import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/login" component={Login} />
				<Route path="/store" exact component={Store} />
				<Route path="/store/:prodId" component={ProductDetails} />
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
