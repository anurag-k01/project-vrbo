/** @format */

import "./App.css";

import Homepage from "./HomePage/Homepage";
import Hotel from "./Hotel/Hotel";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />}></Route>
			<Route path='/hotel' element={<Hotel />}></Route>
		</Routes>
	);
}

export default App;
