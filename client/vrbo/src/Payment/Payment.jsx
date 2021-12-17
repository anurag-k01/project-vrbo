/** @format */
import React from "react";
import "./payment.css";
import { Link } from "react-router-dom";
import { GiAlarmClock } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import Button from "@mui/material/Button";
function Payment() {
	var data = JSON.parse(localStorage.getItem("testObject"));
	console.log(data);
	return (
		<>
			<div className='container'>
				<div>
					<img
						src='https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg'
						alt=''
						style={{ marginLeft: "20px", marginTop: "20px" }}
					/>
				</div>
				<h1 style={{ marginLeft: "100px", marginTop: "50px" }}>
					Begin your booking
				</h1>
				<div className='box1'>
					<div className='book'>
						<div
							style={{
								fontWeight: "bold",
								padding: "20px",
							}}>
							Book with confidence. Guaranteed.
						</div>
						<div
							style={{ fontSize: "12px", marginLeft: "20px", color: "blue" }}>
							You’re covered when you book and pay on . Learn more.
						</div>
						<div
							style={{
								fontSize: "20px",
								marginLeft: "20px",
								marginTop: "20px",
							}}>
							<GiAlarmClock />{" "}
							<span>Act fast! Price and availability may change.</span>
						</div>
						<div
							style={{
								fontSize: "20px",
								marginLeft: "20px",
								marginTop: "20px",
							}}>
							<HiOutlineCurrencyDollar />{" "}
							<span>
								Free cancellation until{" "}
								<span style={{ color: "blue" }}>Dec 31, 2021</span>
							</span>
						</div>
					</div>
					<div className='detail'>
						<div style={{ padding: "20px", fontWeight: "bold" }}>
							Enter contact information
						</div>
						<span>
							<input type='text' placeholder='First Name' className='input' />
						</span>
						<span>
							<input type='text' placeholder='Last Name' className='input' />
						</span>
						<div>
							<span>
								<input type='text' placeholder='Email' className='input' />
							</span>
							<span>
								<select name='' id='' className='code'>
									<option value='+91'>+91</option>
								</select>
							</span>
							<span>
								<input type='text' placeholder='Number' className='num' />
							</span>
						</div>
					</div>
					<div className='term'>
						<div style={{ padding: "20px", fontWeight: "bold" }}>
							Include a message for the host
						</div>
						<div style={{ marginLeft: "20px", color: "grey" }}>
							Let them know who you are traveling with and what brings you to
							the area.
						</div>
						<div style={{ float: "left" }}>
							<img src={data.image1_url} alt='' className='img' />
						</div>
						<div
							style={{
								float: "left",
								marginTop: "40px",
								marginLeft: "20px",
								color: "grey",
							}}>
							Speaks: English
						</div>
						<div style={{ clear: "both" }}>
							<input
								type='text'
								placeholder='Your Message...Optional'
								className='i'
							/>
						</div>
						<div
							style={{ marginLeft: "20px", marginTop: "20px", color: "grey" }}>
							<span style={{ color: "black", fontWeight: "bold" }}>Tip:</span>{" "}
							Hosts are more likely to approve your request when you include a
							message.
						</div>
					</div>
					<div style={{ marginTop: "20px" }}>
						By clicking 'Agree & continue' you are agreeing to our{" "}
						<span style={{ color: "blue" }}>
							Terms and Conditions, Privacy Policy,
						</span>{" "}
						and to receive booking-related texts. Standard messaging rates may
						apply.
					</div>
					<Button
						style={{
							backgroundColor: "blue",
							color: "white",
							float: "right",
							marginTop: "20px",
						}}
						variant='outlined'>
						Agree & Continue
					</Button>
				</div>
				<div className='box2'>
					<div className='head'>
						<div style={{ float: "left" }}>
							<BsFillTelephoneFill
								style={{
									marginTop: "20px",
									marginLeft: "20px",
									fontSize: "30px",
								}}
							/>
						</div>
						<div
							style={{
								float: "left",
								marginTop: "20px",
								marginLeft: "20px",
								color: "grey",
							}}>
							For booking assistance, call{" "}
							<span style={{ color: "black", fontWeight: "bold" }}>
								(1) 888-382-8909
							</span>
						</div>
						<div
							style={{
								float: "left",
								marginTop: "20px",
								marginLeft: "20px",
								color: "grey",
							}}>
							Rental Number:
							<span style={{ color: "black", fontWeight: "bold" }}>
								7414229ha
							</span>
						</div>
						<div
							style={{
								clear: "both",
								padding: "20px",
								marginLeft: "50px",
								color: "grey",
							}}>
							Customer Number:
							<span style={{ color: "black", fontWeight: "bold" }}>378887</span>
						</div>
					</div>
					<div className='pay'>
						<span>
							<img src={data.image1_url} alt='' className='imm' />
						</span>
						<span>
							<img src={data.image2_url} alt='' className='im' />
						</span>
						<span>
							<img src={data.image3_url} alt='' className='imm' />
						</span>
						<div className='headd'>{data.heading1}</div>
						<div className='headdd'>Manali, HP, IN</div>
						<div className='date'>
							<div className='check'>
								<div
									style={{
										marginTop: "10px",
										marginLeft: "20px",
										fontSize: "13px",
										color: "grey",
									}}>
									Check In
								</div>
								<div
									style={{
										marginTop: "10px",
										marginLeft: "20px",
										fontSize: "17px",
										color: "black",
										fontWeight: "bold",
									}}>
									Jan 14
								</div>
							</div>
							<div className='checkk'>
								<div
									style={{
										marginTop: "10px",
										marginLeft: "20px",
										fontSize: "13px",
										color: "grey",
									}}>
									Check Out
								</div>
								<div
									style={{
										marginTop: "10px",
										marginLeft: "20px",
										fontSize: "17px",
										color: "black",
										fontWeight: "bold",
									}}>
									Feb 20
								</div>
							</div>
							<div className='gu'>
								<div
									style={{
										marginTop: "10px",
										marginLeft: "20px",
										fontSize: "13px",
										color: "grey",
									}}>
									Guest
								</div>
								<div
									style={{
										marginTop: "10px",
										marginLeft: "20px",
										fontSize: "17px",
										color: "black",
										fontWeight: "bold",
									}}>
									4 guests
								</div>
							</div>
						</div>
						<div
							style={{
								clear: "both",
								marginLeft: "30px",
								color: "grey",
								padding: "20px",
								float: "left",
							}}>
							$6.00 x 42 nights
						</div>
						<div
							style={{
								marginLeft: "150px",
								color: "grey",
								padding: "20px",
								float: "left",
							}}>
							$252.00
						</div>
						<div
							style={{
								marginLeft: "50px",
								color: "grey",

								clear: "both",
								float: "left",
							}}>
							Monthly discount
						</div>
						<div
							style={{
								marginLeft: "190px",
								color: "grey",

								float: "left",
							}}>
							-$100.80
						</div>
						<div
							style={{
								marginLeft: "50px",
								color: "grey",
								marginTop: "20px",
								clear: "both",
								float: "left",
							}}>
							Service Fee
						</div>
						<div
							style={{
								marginLeft: "240px",
								color: "grey",
								marginTop: "20px",
								float: "left",
							}}>
							$21.00
						</div>
						<div style={{ clear: "both" }}></div>
						<hr
							style={{ width: "80%", marginLeft: "50px", marginTop: "10px" }}
						/>
						<div
							style={{
								float: "left",
								marginLeft: "50px",
								marginTop: "20px",
								fontWeight: "bold",
							}}>
							Total
						</div>
						<div
							style={{
								float: "right",
								marginRight: "45px",
								marginTop: "20px",
								fontWeight: "bold",
							}}>
							$172.20
						</div>
						<hr
							style={{
								clear: "both",
								width: "80%",
								marginLeft: "50px",
								marginTop: "50px",
							}}
						/>
						<div
							style={{ textAlign: "center", marginTop: "20px", color: "grey" }}>
							Or as low as{" "}
							<span style={{ color: "black", fontWeight: "bold" }}>$16/mo</span>{" "}
							with{" "}
							<span style={{ color: "black", fontWeight: "bold" }}>Affirm</span>
							. <span style={{ color: "blue" }}>Learn more</span>{" "}
						</div>
					</div>
					<div className='sec'>
						<div>
							<img
								src='https://dsm01pap003files.storage.live.com/y4m1A8pXjeSW6bh4usSOi1il_nItw4VmevH7V2mWdILzIjBlHbS5z1ABCmtqD7sMj6V2tY0kNw0Ui-jFrqotABviBEpQq3stm-Xe1Y2qRcu3NCr6_YlnFQpplW2iToBW9an_I_P-82jHQl3qJqQrerN67sZNz9WZhfMhj9vRuxX7k9Y1Sqeag5y-o-s0J26gnzQ?width=339&height=195&cropmode=none'
								width='339'
								height='195'
								style={{ marginLeft: "30px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Payment;