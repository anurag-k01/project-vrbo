/** @format */

import React from "react";
import "./App.css";

import Homepage from "./HomePage/Homepage";
import Hotel from "./Hotel/Hotel";
import HotelList from "./HotelList/List";
import { Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/hotel" element={<Hotel />}></Route>
      <Route path="/search" element={<HotelList />}></Route>
      {/*<Route path="/login" element={<Login />}></Route>*/}
      {/*<Route path="/register" element={<Signup />}></Route>*/}
    </Routes>
  );
}

export default App;
