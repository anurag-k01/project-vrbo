/** @format */

import "./App.css";

import Homepage from "./HomePage/Homepage";
import Hotel from "./Hotel/Hotel";
import HotelList from "./HotelList/List";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />}></Route>
			<Route path='/hotel' element={<Hotel />}></Route>
			<Route path='/search' element={<HotelList />}></Route>
		</Routes>
	);
}

export default App;
