/** @format */
import "./list.css";
import * as React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Button from "@mui/material/Button";
import axios from "axios";
import { AiOutlineStar } from "react-icons/ai";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

function List() {
	document.title = "Top 50 Gulf Shores Vacation Rentals | Vrbo";
	const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
	const [price, setPrice] = React.useState(100);
	const [sleep, setSleep] = React.useState(1);
	const [bed, setBed] = React.useState(1);
	const [rating, setRating] = React.useState(5);
	const [main, setMain] = React.useState([]);
	const [data, setData] = React.useState([]);
	const handleChange = (newValue) => {
		setValue(newValue);
	};
	useEffect(() => {
		axios
			.get("https://vrbo-api.herokuapp.com/place")
			.then((result) => setData(result.data.place));
	}, []);
	useEffect(() => {
		axios
			.get("https://vrbo-api.herokuapp.com/place")
			.then((result) => setMain(result.data.place));
	}, []);
	console.log(main);
	function pr(value) {
		const arr = main.filter((e) => {
			return e.price <= value;
		});
		setData(arr);
	}
	console.log(data);
	function be(value) {
		const arr = main.filter((e) => {
			return e.bedroom_heading <= value;
		});
		setData(arr);
	}
	function ra(value) {
		const arr = main.filter((e) => {
			return e.ratings <= value;
		});
		setData(arr);
	}
	function store(value) {
		localStorage.setItem("testObject", JSON.stringify(value));
	}

	// axios
	// 	.get("http://localhost:2238/place")
	// 	.then((res) => {
	// 		setData(res.data.place);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});

	return (
		<>
			<Navbar />
			<div style={{ height: "72px" }}></div>
			<div id='header'>
				<div style={{ float: "left", marginTop: "10px", marginLeft: "20px" }}>
					<TextField id='outlined-basic' label='Where' variant='outlined' />
				</div>
				<div
					style={{
						width: "200px",
						float: "left",
						marginTop: "10px",
						marginLeft: "20px",
					}}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<Stack>
							<DesktopDatePicker
								label='Check In'
								inputFormat='MM/dd/yyyy'
								value={value}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>
						</Stack>
					</LocalizationProvider>
				</div>
				<div
					style={{
						width: "200px",
						float: "left",
						marginTop: "10px",
						marginLeft: "20px",
					}}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<Stack>
							<DesktopDatePicker
								label='Check Out'
								inputFormat='MM/dd/yyyy'
								value={value}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>
						</Stack>
					</LocalizationProvider>
				</div>
				<div style={{ float: "left", marginTop: "10px", marginLeft: "20px" }}>
					<TextField id='outlined-basic' label='Guest' variant='outlined' />
				</div>
				<div style={{ clear: "both" }}>
					<Button
						variant='outlined'
						style={{
							borderRadius: "20px",
							backgroundColor: "white",
							border: "none",
							marginTop: "15px",
							marginLeft: "20px",
							float: "left",
						}}>
						Filters
					</Button>
					<div>
						<Button
							variant='outlined'
							style={{
								borderRadius: "20px",
								backgroundColor: "white",
								border: "none",
								marginTop: "15px",
								marginLeft: "20px",
								float: "left",
							}}
							onClick={() => {
								document.getElementById("box1").style.display = "block";
							}}>
							Price
						</Button>
					</div>

					<div>
						<Button
							variant='outlined'
							style={{
								borderRadius: "20px",
								backgroundColor: "white",
								border: "none",
								marginTop: "15px",
								marginLeft: "20px",
								float: "left",
							}}
							onClick={() => {
								document.getElementById("box3").style.display = "block";
							}}>
							Bedroom
						</Button>
					</div>

					<div>
						<Button
							variant='outlined'
							style={{
								borderRadius: "20px",
								backgroundColor: "white",
								border: "none",
								marginTop: "15px",
								marginLeft: "20px",
								float: "left",
							}}
							onClick={() => {
								document.getElementById("box4").style.display = "block";
							}}>
							Ratings
						</Button>
					</div>
				</div>
				<div style={{ clear: "both" }}>
					<div id='box1'>
						<div className='p'>${price}</div>
						<button
							className='btn'
							onClick={() => {
								if (price > 20) {
									setPrice(price - 20);
								}
							}}>
							-
						</button>
						<button
							className='btn'
							onClick={() => {
								if (price > 20) {
									setPrice(price + 20);
								}
							}}>
							+
						</button>
						<Button
							variant='outlined'
							style={{
								marginLeft: "45px",
								marginTop: "10px",
								backgroundColor: "white",
							}}
							onClick={() => {
								pr(price);
								document.getElementById("box1").style.display = "none";
							}}>
							Apply
						</Button>
					</div>
				</div>

				<div>
					<div id='box3'>
						<div className='p'>{bed}</div>
						<button
							className='btn'
							onClick={() => {
								if (bed > 1) {
									setBed(bed - 1);
								}
							}}>
							-
						</button>
						<button
							className='btn'
							onClick={() => {
								setBed(bed + 1);
							}}>
							+
						</button>
						<Button
							variant='outlined'
							style={{
								marginLeft: "45px",
								marginTop: "10px",
								backgroundColor: "white",
							}}
							onClick={() => {
								be(bed);
								document.getElementById("box3").style.display = "none";
							}}>
							Apply
						</Button>
					</div>
				</div>
				<div>
					<div id='box4'>
						<div className='p'>{rating}</div>
						<button
							className='btn'
							onClick={() => {
								if (rating > 1) {
									setRating(rating - 1);
								}
							}}>
							-
						</button>
						<button
							className='btn'
							onClick={() => {
								if (rating < 5) {
									setRating(rating + 1);
								}
							}}>
							+
						</button>
						<Button
							variant='outlined'
							style={{
								marginLeft: "45px",
								marginTop: "10px",
								backgroundColor: "white",
							}}
							onClick={() => {
								ra(rating);
								document.getElementById("box4").style.display = "none";
							}}>
							Apply
						</Button>
					</div>
				</div>
			</div>
			<div style={{ height: "130px" }}></div>
			<div id='container1'>
				{data.map((e) => (
					<Link to='/hotel'>
						<div
							onClick={() => {
								store(e);
							}}>
							<div className='line'></div>
							<div style={{ float: "left", width: "280px" }}>
								<img src={e.image1_url} alt='' className='imgss' />
							</div>
							<div style={{ float: "left", marginLeft: "30px" }}>
								<div className='house'>House - 3.7 mi to Manali Center</div>
								<div className='namea'>{e.heading1}</div>
								<div className='sleep'>{e.no_of_beds}</div>
								<div className='until'>Free Cancelation Until 31 Dec</div>
								<div className='price'>${e.price} / night</div>
								<div className='review'>
									<AiOutlineStar style={{ color: "orange" }} />{" "}
									{e.no_of_reviews}
								</div>
							</div>
							<div style={{ clear: "both" }}></div>
						</div>
					</Link>
				))}
			</div>
			<div id='container2'>
				<img
					src='https://dsm01pap003files.storage.live.com/y4mbl3BX8m6EZmqhsK6dNiWShIUMgZKfpkI29EENpFIKzFctIZDQJ5XeuvXNfM6e6G1rf-RqgucpYWOzFy_lRFH0jReFAx8H31_BY-UXj_qMb7A8LQiNYGpnGj18ObFgC9mWexqBFsaQhS00-uT0Q_9CJyus-Vd_xwNANfUdq0oL2WJivGbrMLkpINvYf4hGVeo?width=362&height=392&cropmode=none'
					width='362'
					height='392'
				/>
			</div>
		</>
	);
}
export default List;
