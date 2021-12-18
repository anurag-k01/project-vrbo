import React from "react";

import Navbar from "../Components/Navbar";

import AppBody from "../AppBody/AppBody";
import { Link } from "react-router-dom";
function Homepage() {
  document.title =
    "Vrbo | Book your vacation rentals: beach houses, cabins, condos & more";
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Navbar />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="./carousal.jpg" alt="Carousal" style={{ width: "100%" }} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",

            marginTop: "-40px",
          }}
        >
          <AppBody />
        </div>
      </Link>
    </>
  );
}

export default Homepage;
