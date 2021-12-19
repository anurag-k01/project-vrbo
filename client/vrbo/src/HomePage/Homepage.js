import React from "react";
import BookingSearcBar from "../Components/BookingSearcBar";
import Navbar from "../Components/Navbar";

import AppBody from "../AppBody/AppBody";
import { Link } from "react-router-dom";
function Homepage() {
	document.title =
		"Vrbo | Book your vacation rentals: beach houses, cabins, condos & more";
	return (
		<>
			<Link to='/'>
				<Navbar />
				<div style={{ display: "flex", justifyContent: "center" }}>
					<img src='./carousal.jpg' alt='Carousal' style={{ width: "100%" }} />
				</div>
				{/*<BookingSearcBar />*/}
				{/* REcent Clicked */}
				{/* Recommened for you */}
				{/* Recommened Destinations */}
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						position: "relative",
						marginTop: "-40px",
					}}>
					<AppBody />
					{/* Get Inspired for a family trip */}
					{/* Find Spaces that suit your style */}
				</div>
			</Link>
		</>
	);
}

export default Homepage;
