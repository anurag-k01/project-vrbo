/** @format */

import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
function Login(props) {
	const [text, setText] = React.useState("");
	function handle(e) {
		setText(e.target.value);
	}
	function store(value) {
		var arr = {
			name: value,
			login: true,
		};
		localStorage.setItem("login", JSON.stringify(arr));
		// console.log(arr);
	}
	if (!props.show) {
		return null;
	}
	return (
		<div className={styles.modal}>
			<div className={styles.modal_content}>
				<div className={styles.modal_header}>
					<div className={styles.modal_footer}>
						<CloseIcon onClick={props.onClick} style={{ color: "white" }} />
					</div>
					<p className={styles.modal_title}>Log in or signup on Vrbo</p>
				</div>
				<div
					style={{
						position: "relative",
						marginTop: "100px",
						marginLeft: "20px",
						width: "90%",
						height: "480px",
						boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
						background: "white",
						borderRadius: "10px",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Box
							component='form'
							sx={{
								"& > :not(style)": { m: 1, width: "25ch" },
							}}
							noValidate
							autoComplete='off'>
							<TextField
								id='standard-basic'
								label='Name'
								variant='standard'
								value={text}
								onChange={handle}
								style={{ marginLeft: "80px" }}
							/>
							<TextField
								id='standard-basic'
								label='Email address'
								variant='standard'
								style={{ marginLeft: "80px" }}
							/>
							<TextField
								id='standard-basic'
								label='Password'
								variant='standard'
								style={{ marginLeft: "80px" }}
								type='password'
							/>
							<TextField
								id='standard-basic'
								label='Confirm Password'
								variant='standard'
								type='password'
								style={{ marginLeft: "80px" }}
							/>
						</Box>
						<div style={{ marginTop: "20px" }}>
							<Link to='/'>
								<Fab
									variant='extended'
									onClick={props.onClick}
									color='primary'
									aria-label='add'>
									<div
										onClick={() => {
											store(text);
										}}>
										Get started
									</div>
								</Fab>
							</Link>
							<p>or continue with</p>
						</div>
					</div>
					<img src='./2factor.jpg' alt='' style={{ width: "390px" }} />
				</div>
				{/*<div className={styles.modal_body}>
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Email address"
                variant="standard"
              />
            </Box>
          </div>
          <div>
            <Fab variant="extended" color="primary" aria-label="add">
              Get started
            </Fab>
          </div>
            </div>*/}
			</div>
		</div>
	);
}

export default Login;
