import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import Media from "./components/Media";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Shows from "./components/Shows";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/AboutUs" component={AboutUs} />
				<Route path="/Shows" component={Shows} />
				<Route path="/Media" component={Media} />
				<Route path="/Contact" component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
