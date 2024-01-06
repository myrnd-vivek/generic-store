import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/store" component={Store} />
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
