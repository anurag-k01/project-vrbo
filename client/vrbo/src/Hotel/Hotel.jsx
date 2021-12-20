/** @format */
import "./hotel.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import TextField from "@mui/material/TextField";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import Stack from "@mui/material/Stack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AiOutlineStar } from "react-icons/ai";
import Navbar from "../Components/Navbar";
function Hotel() {
	const [checkIn, setCheckIn] = React.useState("");
	const [checkOut, setCheckOut] = React.useState("");

	var data = JSON.parse(localStorage.getItem("testObject"));
	console.log(data);
	const [adult, setAdult] = useState(1);
	const [child, setChild] = useState(0);
	const [guest, setGuest] = useState(1);
	const [price, setPrice] = useState(data.price);

	function handle() {
		setCheckIn(document.getElementById("da").value);
	}
	function handle1() {
		setCheckOut(document.getElementById("das").value);
	}
	function store(a, b, c, d) {
		var arr = {
			from: a,
			to: b,
			people: c,
			price: d,
		};
		localStorage.setItem("payment", JSON.stringify(arr));
	}
	return (
		<div>
			<Navbar />
			<div style={{ height: "72px" }}></div>

			<div>
				<div className='line'></div>
				<div className='container1' id='box'>
					<div className='path'>India / Himanchal Pradesh / Shimla</div>
					<div
						className='name'
						style={{ float: "left", textDecoration: "none", color: "black" }}>
						{data.heading1}
					</div>
					<div style={{ float: "left", marginLeft: "10px" }}>
						<div style={{ marginTop: "10px" }}>
							<Button
								variant='outlined'
								style={{
									color: "grey",
									border: "1px solid grey",
									borderRadius: "20px",
									fontWeight: "bold",
								}}>
								<AiOutlineHeart className='heart' />
								Save
							</Button>
						</div>
						<div style={{ marginTop: "5px" }}>
							<Button
								variant='outlined'
								style={{
									color: "grey",
									border: "1px solid grey",
									borderRadius: "20px",
									fontWeight: "bold",
								}}>
								<BsUpload style={{ marginRight: "6px", fontWeight: "bold" }} />
								Share
							</Button>
						</div>
					</div>
					<div>
						<img
							src={data.image1_url}
							width='95%'
							height='350px'
							style={{
								marginLeft: "20px",
								marginTop: "20px",
								borderRadius: "10px",
							}}
						/>
						<div className='img2'>
							<img
								src={data.image2_url}
								width='100%'
								style={{ borderRadius: "10px" }}
							/>
						</div>
						<div className='img2'>
							<img
								src={data.image3_url}
								width='100%'
								style={{ borderRadius: "10px" }}
							/>
						</div>
						<div className='img2'>
							<img
								src={data.image4_url}
								width='100%'
								style={{ borderRadius: "10px" }}
							/>
						</div>
					</div>
					<div style={{ clear: "both" }}>
						<div
							className='nav'
							style={{ borderBottom: "2px solid black", color: "black" }}>
							About
						</div>
						<div className='nav'>Amenities</div>
						<div className='nav'>Rates & Availability</div>
						<div className='nav'>Host</div>
						<div className='nav'>Rooms & beds</div>
						<div className='nav'>Reviews</div>
						<div className='nav'>Map</div>
						<div className='nav'>Policies</div>
						<div
							style={{
								float: "left",
								marginTop: "10px",
								marginLeft: "150px",
								color: "red",
							}}>
							<AiOutlineHeart />
						</div>
					</div>
					<hr style={{ clear: "both" }} />
					<div
						style={{
							marginLeft: "30px",
							fontWeight: "bold",
							fontSize: "25px",
							marginTop: "40px",
							color: "black",
						}}>
						About this rental
					</div>
					<div
						style={{
							marginTop: "20px",
							borderRight: "3px solid grey",
							width: "120px",
							float: "left",
						}}>
						<div
							style={{
								fontWeight: "bold",
								marginLeft: "30px",
								fontSize: "20px",
								color: "black",
							}}>
							{data.cabin_heading}
						</div>
						<div
							style={{
								marginLeft: "30px",
								color: "grey",
								fontSize: "13px",
								marginTop: "5px",
							}}>
							{data.area}
						</div>
					</div>
					<div
						style={{
							marginTop: "20px",
							borderRight: "3px solid grey",
							width: "180px",
							float: "left",
							fontSize: "20px",
						}}>
						<div
							style={{
								fontWeight: "bold",
								marginLeft: "30px",
								color: "black",
							}}>
							{data.bedroom_heading} bedrooms
						</div>
						<div
							style={{
								marginLeft: "30px",
								color: "grey",
								fontSize: "13px",
								marginTop: "5px",
							}}>
							{data.no_of_beds}
						</div>
					</div>
					<div
						style={{
							marginTop: "20px",
							borderRight: "3px solid grey",
							width: "180px",
							float: "left",
							fontSize: "20px",
						}}>
						<div
							style={{
								fontWeight: "bold",
								marginLeft: "30px",
								color: "black",
							}}>
							{data.bathroom_heading}
						</div>
						<div
							style={{
								marginLeft: "30px",
								color: "grey",
								fontSize: "13px",
								marginTop: "5px",
							}}>
							{data.no_of_bathrooms}
						</div>
					</div>
					<div
						style={{
							marginTop: "20px",
							height: "80px",
							width: "200px",
							float: "left",
						}}>
						<div
							style={{
								fontWeight: "bold",
								marginLeft: "30px",
								fontSize: "20px",
								color: "black",
							}}>
							Spaces
						</div>
						<div
							style={{
								marginLeft: "30px",
								color: "grey",
								fontSize: "13px",
								marginTop: "5px",
							}}>
							{data.spaces}
						</div>
					</div>
					<div style={{ marginLeft: "30px" }}>
						<hr style={{ clear: "both" }} />
					</div>
					<div
						style={{
							fontSize: "17px",
							fontWeight: "bold",
							marginLeft: "30px",
							marginTop: "20px",
							color: "black",
						}}>
						Entire first floor is open for guests which can accommodate 5 adults
					</div>
					<div
						style={{
							fontSize: "17px",
							fontFamily: "sans-serif",
							color: "grey",
							marginLeft: "30px",
							marginTop: "20px",
						}}>
						{data.description}
					</div>
					<div style={{ marginTop: "20px" }}>
						<img
							src='https://dsm01pap003files.storage.live.com/y4m4a0NS6LS5BXGelJ4uqB7F9OhUSmaiywoQ9i1vLdPbKLIZkhUfHWhJshZYKjzWNeJQkZyCLOz46xwHNOhedZ708I2rpZH_2GXoRfCY32MqXx0sEDq4LYyrXdzJC4t5buIynvTgaH_uvW4VqS0xU-XvRgjLbCwGsJtYb8SHmRmkMJWA5SKbwgMAoLrRh2IfkGG?width=940&height=400&cropmode=none'
							width='940'
							height='400'
						/>
					</div>
					<div
						style={{
							marginLeft: "50px",
							fontSize: "25px",
							fontWeight: "bold",
						}}>
						Ratings
					</div>
					<div style={{ float: "left" }}>
						<AiOutlineStar
							style={{
								marginLeft: "50px",
								fontSize: "25px",
								color: "orange",
								marginTop: "20px",
							}}
						/>
					</div>
					<div
						style={{
							float: "left",
							marginTop: "20px",
							fontSize: "25px",
							marginLeft: "10px",
						}}>
						{data.ratings}
					</div>
					<div style={{ clear: "both", marginLeft: "50px", marginTop: "40px" }}>
						1. {data.review1}
					</div>
					<div style={{ marginLeft: "50px", marginTop: "20px" }}>
						By- {data.review2_name}
					</div>
					<div style={{ clear: "both", marginLeft: "50px", marginTop: "40px" }}>
						2. {data.review2}
					</div>
					<div style={{ marginLeft: "50px", marginTop: "20px" }}>
						By- {data.review1_name}
					</div>
					<div style={{ marginTop: "20px" }}>
						<img
							src='https://dsm01pap003files.storage.live.com/y4m3v5eZgSqCkEpY8pUVktFvBbUxRghcBsLKECyFbkWiMgKcmLBg5qtStNJpBkvkJK74I-bdbtB0LmAJxwTjYrZIiZGqS8E0HmD8RKE4mg7xu7l9jQIPUwZaxVGbn28fmEbKR7peY3hJO4XsAArrI1rqbqu2QNRKrd-nEmHsYZCQrPdTtZOyKMsxTETc6iTO5DY?width=939&height=507&cropmode=none'
							width='939'
							height='507'
						/>
					</div>

					<div>
						<div
							style={{
								marginLeft: "50px",
								fontSize: "30px",
								fontWeight: "bold",
								marginTop: "30px",
								color: "black",
							}}>
							Map
						</div>
						<div style={{ marginTop: "20px" }}>
							<img
								src='https://dsm01pap003files.storage.live.com/y4m2nSoxn8dwXp3yBndcdRgmhA9i71EP3eR-SOYNMCWeLtDBbT180tmtxnfwaHYiEmjLbjEgCuofuPZarLCX0lXw-TUdkPo8-vKd5Yi6UfotaFWTf_jIISaWjpW23WXhLlcydMQnjALQkLdPMEKzfp7v0qJOrd1MxM38WsA9kZz1WgPEP0ao2XkHAaNfgw7YVus?width=933&height=549&cropmode=none'
								width='933'
								height='549'
							/>
						</div>
						<div style={{ marginTop: "40px" }}>
							<img
								src='https://dsm01pap003files.storage.live.com/y4mMBnwWRIM6dm3Lgi5bqBnMdDS0ypdVNjfzoR1C7UKPcK53YxMzUg068LrtCdSfYCTAzxACYEOMlJhyyO4I4UwRsHULuqQCot2C88xX2xm1xOQ10gEomBIK3ZvWuLqqgUq5LP-cver9xyzGIFnEJMedAsAXIDtGvxED2YtpA1jjMfvy7qZvdusfnU_lqfY3lOs?width=949&height=556&cropmode=none'
								width='949'
								height='556'
							/>
						</div>
					</div>
					{/* <div style={{ height: "200px", clear: "both" }}>d</div> */}
				</div>
				<div className='container2'>
					{/* <div className='price' style={{ color: "black" }}>
					${data.price} <span id='night'>/night</span>
				</div> */}
					<div
						style={{
							marginLeft: "20px",
							fontSize: "25px",
							fontWeight: "bold",
							marginTop: "20px",
						}}>
						${data.price} <span id='night'>/night</span>
					</div>
					<div style={{ color: "black" }}>
						<BiErrorCircle
							style={{ marginLeft: "20px", color: "blue", marginTop: "10px" }}
						/>{" "}
						Please enter number of guests.
					</div>
					<div>
						<input
							type='date'
							id='da'
							onSelect={() => {
								handle();
							}}
							style={{ marginLeft: "20px", marginTop: "10px" }}
						/>

						<input
							type='date'
							id='das'
							onSelect={() => {
								handle1();
							}}
							style={{ marginLeft: "20px", marginTop: "10px" }}
						/>

						<div
							className='box3'
							onClick={() => {
								document.getElementById("gbox").style.display = "block";
								document.getElementById("hr").style.display = "none";
							}}>
							<div id='guest'>Guests</div>
							<div className='to' style={{ color: "black" }}>
								{guest} guests
							</div>
						</div>
					</div>
					<div id='gbox'>
						<div className='people'>
							<div style={{ float: "left" }}>
								<IoIosPeople
									style={{
										marginLeft: "15px",
										marginTop: "8px",
										fontSize: "30px",
									}}
								/>
							</div>
							<div className='max'>
								Maximum number of guests is 5 Children not allowed
							</div>
						</div>
						<div className='con1'>
							<div style={{ marginLeft: "20px", marginTop: "10px" }}>
								<div style={{ fontWeight: "bold" }}>{adult} Adults</div>
								<div style={{ color: "grey" }}>18+</div>

								<div style={{ marginTop: "10px", fontWeight: "bold" }}>
									{child} Childrens
								</div>
								<div style={{ color: "grey" }}>(0-17)</div>
							</div>
						</div>
						<div className='con2'>
							<div style={{ marginLeft: "200px" }}>
								<div style={{ float: "left" }}>
									<Button
										variant='outlined'
										onClick={() => {
											if (adult > 1) {
												setAdult(adult - 1);
											}
										}}
										style={{
											borderRadius: "30px",
											fontSize: "23px",
										}}>
										-
									</Button>
								</div>
								<div style={{ float: "left", marginLeft: "5px" }}>
									<Button
										variant='outlined'
										onClick={() => {
											if (adult < 5) {
												setAdult(adult + 1);
											}
										}}
										style={{ borderRadius: "30px", fontSize: "23px" }}>
										+
									</Button>
								</div>
							</div>
							<div style={{ marginLeft: "200px" }}>
								<div style={{ float: "left", marginTop: "10px" }}>
									<Button
										variant='outlined'
										disabled
										style={{ borderRadius: "30px", fontSize: "23px" }}>
										-
									</Button>
								</div>
								<div
									style={{
										float: "left",
										marginTop: "10px",
										marginLeft: "5px",
									}}>
									<Button
										variant='outlined'
										disabled
										style={{ borderRadius: "30px", fontSize: "23px" }}>
										+
									</Button>
								</div>
							</div>
						</div>
						<div>
							<Button
								variant='outlined'
								onClick={() => {
									setGuest(adult);
									document.getElementById("hr").style.display = "block";
									document.getElementById("gbox").style.display = "none";
								}}
								style={{
									color: "white",
									backgroundColor: "blue",
									float: "right",
									borderRadius: "20px",
									fontWeight: "bold",
									marginRight: "18px",
									marginTop: "20px",
								}}>
								Apply
							</Button>
						</div>
					</div>
					<div>
						<div className='tt' style={{ color: "black" }}>
							Total
						</div>
						<div className='ru' style={{ color: "black" }}>
							${price * adult}.00
						</div>
						<div
							style={{
								clear: "both",
								float: "left",
								marginLeft: "42px",
								fontSize: "12px",
								color: "black",
							}}>
							Total includes fees, not tax
						</div>
						<div style={{ float: "left", marginLeft: "78px", color: "blue" }}>
							View Details
						</div>
					</div>
					<div
						style={{
							clear: "both",
							marginLeft: "40px",
							fontSize: "13px",
							marginTop: "40px",
							color: "black",
						}}>
						Or as low as $107/mo with Affirm. Learn more
					</div>
					<div id='hr'>
						<Link to="/payment">
						<Button
							onClick={() => {
								store(checkIn, checkOut, guest, price);
							}}
							variant='outlined'
							style={{
								color: "white",
								backgroundColor: "blue",
								width: "200px",
								borderRadius: "20px",
								fontWeight: "bold",
								marginTop: "40px",
								marginLeft: "100px",
								fontSize: "20px",
							}}>
							Book Now
						</Button></Link>
					</div>
					<div id='free' style={{ color: "black" }}>
						Free cancellation until Dec 31, 2021
					</div>
					<hr style={{ marginTop: "15px", color: "black" }} />
					<div>
						<div id='ig'>
							<img
								src='https://media.vrbo.com/lodging/20000000/19490000/19488100/19488081/005e8954.f10.jpg'
								alt=''
								style={{
									width: "50px",
									height: "50px",
									background: "red",
									borderRadius: "50%",
									marginTop: "20px",
								}}
							/>
						</div>
						<div
							style={{
								float: "left",
								marginLeft: "20px",
								fontSize: "17px",
								marginTop: "25px",
								color: "black",
							}}>
							Rameshwar Singh Thakur
							<div style={{ fontSize: "13px", color: "blue" }}>
								Contact Host
							</div>
						</div>
						<div style={{ clear: "both" }}></div>
					</div>
					<hr style={{ marginTop: "20px", color: "black" }} />
					<div
						style={{ textAlign: "center", marginTop: "10px", color: "black" }}>
						Property # 986937
					</div>
				</div>
			</div>
		</div>
	);
}
export default Hotel;
