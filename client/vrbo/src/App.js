/** @format */

import "./App.css";

import Homepage from "./HomePage/Homepage";
import Hotel from "./Hotel/Hotel";
import HotelList from "./HotelList/List";
import Payment from "./Payment/Payment";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />}></Route>
			<Route path='/hotel' element={<Hotel />}></Route>
			<Route path='/search' element={<HotelList />}></Route>
			<Route path='/payment' element={<Payment />}></Route>
		</Routes>
	);
}

export default App;
