import React from "react";
import styles from "./Login.module.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
function Login(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <div className={styles.modal_footer}>
            <CloseIcon onClick={props.onClose} style={{ color: "white" }} />
          </div>
          <p className={styles.modal_title}>Log in or signup on Vrbo</p>
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "150px",
            marginLeft: "20px",
            width: "90%",
            height: "280px",
            boxShadow: "0 1px 0 white",
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
            <div>
              <Fab variant="extended" color="primary" aria-label="add">
                Get started
              </Fab>
              <p>or continue with</p>
            </div>
          </div>
          <img src="./2factor.jpg" alt="" style={{ width: "400px" }} />
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
