// modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home";

export default function App() {
  return (
	<Router>
		<div className="App">
			<Routes>
				<Route exact path='/' element={<Home />}></Route>
			</Routes>
		</div>
	</Router>
  	);
};
