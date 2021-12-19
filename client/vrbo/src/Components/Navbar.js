/** @format */

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Login from "../Authentication/Login";
import { Link } from "react-router-dom";
function Navbar() {
	var data = JSON.parse(localStorage.getItem("login"));
	var temp = false;
	if (data != null) {
		temp = true;
	}

	function del() {
		localStorage.removeItem("login");
	}
	// console.log(data);
	const [show, setShow] = useState(false);
	return (
		<div className={styles.header}>
			<div className={styles.headerInner}>
				<div className={styles.headerLogo}>
					<Link to='/'>
						<img src='./logo.svg' alt='vrbo_logo' />
					</Link>
				</div>
				<div className={styles.headerRight}>
					<div className={styles.headerOption}>
						<h4>
							<div style={{ float: "left" }}>
								<FavoriteBorderOutlinedIcon />
							</div>
							<div style={{ float: "left", marginTop: "5px" }}>Trip Boards</div>
						</h4>
					</div>
					{temp ? (
						<div
							className={styles.headerOption}
							onClick={() => {
								del();
							}}>
							<h4>
								<div style={{ float: "left" }}>
									<PersonOutlineOutlinedIcon />
								</div>
								<div style={{ float: "left", marginTop: "7px" }}>
									Hii {data.name}
								</div>
								<div style={{ float: "left", marginTop: "2px" }}>
									<ExpandMoreOutlinedIcon />
								</div>
							</h4>
						</div>
					) : (
						<>
							<div className={styles.headerOption}>
								<h4>
									<div style={{ float: "left" }}>
										<PersonOutlineOutlinedIcon />
									</div>
									<div style={{ float: "left", marginTop: "5px" }}>Log in</div>
									<div style={{ float: "left", marginTop: "3px" }}>
										<ExpandMoreOutlinedIcon />
									</div>
								</h4>
							</div>
							<div className={styles.headerOption}>
								<h4 onClick={() => setShow(true)}>
									<div style={{ float: "left" }}>
										<PersonAddAlt1OutlinedIcon />
									</div>
									<div
										style={{
											float: "left",
											marginLeft: "3px",
											marginTop: "5px",
										}}>
										Sign up
									</div>
								</h4>
								<Login onClick={() => setShow(false)} show={show} />
							</div>
						</>
					)}
					<div className={styles.headerOption}>
						<h4>
							<div style={{ float: "left" }}>
								<HelpOutlineOutlinedIcon />
							</div>
							<div style={{ float: "left", marginTop: "3px" }}>Help</div>
							<div style={{ float: "left" }}>
								<ExpandMoreOutlinedIcon />
							</div>
						</h4>
					</div>
					<div className={styles.headerOption}>
						<h4>USD ($)</h4>
					</div>
					<div className={styles.headerOption}>
						<h4>EN</h4>
					</div>
					<div className={styles.headerOption}>
						<button className={styles.headerButton}>List your Property</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
