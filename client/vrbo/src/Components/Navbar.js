import React, { useState } from "react";
import styles from "./Navbar.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Login from "../Authentication/Login";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerLogo}>
          <img src="./logo.svg" alt="vrbo_logo" />
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerOption}>
            <h4>
              <FavoriteBorderOutlinedIcon />
              Trip Boards
            </h4>
          </div>
          <div className={styles.headerOption}>
            <h4>
              <PersonOutlineOutlinedIcon />
              Log in
              <ExpandMoreOutlinedIcon />
            </h4>
          </div>
          <div className={styles.headerOption}>
            <h4 onClick={() => setShow(true)}>
              <PersonAddAlt1OutlinedIcon />
              Sign up
            </h4>
            <Login onClose={() => setShow(false)} show={show} />
          </div>
          <div className={styles.headerOption}>
            <h4>
              <HelpOutlineOutlinedIcon />
              Help
              <ExpandMoreOutlinedIcon />
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
