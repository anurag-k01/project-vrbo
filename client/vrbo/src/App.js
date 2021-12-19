/** @format */

import React from "react";
import "./App.css";

import Homepage from "./HomePage/Homepage";
import Hotel from "./Hotel/Hotel";
import HotelList from "./HotelList/List";
import Payment from "./Payment/Payment";
import { Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Money from "./Money/Money";
import Thank from "./Thank/Thanks";
function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />}></Route>
			<Route path='/login' element={<Login />}></Route>
			<Route path='/hotel' element={<Hotel />}></Route>
			<Route path='/search' element={<HotelList />}></Route>
			<Route path='/payment' element={<Payment />}></Route>
			<Route path='/gateway' element={<Money />}></Route>
			<Route path='/thanks' element={<Thank />}></Route>
		</Routes>
	);
}

export default App;
