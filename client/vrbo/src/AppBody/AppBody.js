/** @format */

import React, { useState, useEffect } from "react";
import styles from "./AppBody.module.css";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
function AppBody() {
	const [city, setCity] = useState([]);

	// useEffect(async () => {
	// 	await axios
	// 		.get("http://localhost:2238/city")
	// 		.then((result) => console.log(result));
	// }, []);
	useEffect(() => {
		axios
			.get("https://vrbo-api.herokuapp.com/city")
			.then(function (res) {
				let n = res.data;
				setCity(n.city);
				console.log(n.city);
			})
			.catch(function (err) {
				console.log(err);
			});
	}, []);

	const [visible, setVisible] = useState(true);
	const handleShow = () => {
		if (!visible) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};
	return (
		<>
			<div className={styles.appBody}>
				<div className={styles.bodyContents}>
					<div className={styles.inspired}>
						<h3>Get inspired for a family trip</h3>
						<small style={{ color: "gray" }}>
							Book homes with space, convenience and amenities
						</small>
						<div className={styles.inspiredGrid}>
							<Link to='/search'>
								<div className={styles.gridOne}>
									<img
										src='https://odis.homeaway.com/odis/destination/a8f63526-cf00-4610-a6c4-810d1b12cd9f.hw2.jpg'
										alt='Pic1'
										style={{ height: "450px", width: "600px" }}
									/>
								</div>
							</Link>
							{/*<Link to="/search">*/}
							<div className={styles.gridTwo}>
								<div className={styles.innerGridOne}>
									<div className={styles.innerGrid}>
										<img
											src='https://odis.homeaway.com/odis/destination/7354b320-26d3-4fe7-8471-d940a15d9d43.hw2.jpg'
											alt='line1'
										/>
									</div>
									<div className={styles.innerGrid}>
										<img
											src='https://odis.homeaway.com/odis/homepage/2a55d131-f53a-455a-8737-45038b308798.hw2.jpg'
											alt='line2'
										/>
									</div>
								</div>
								<div className={styles.innerGridTwo}>
									<div className={styles.innerGridd}>
										<img
											src='https://odis.homeaway.com/odis/destination/776c3818-9b31-4028-b702-fa1e70e6c13d.hw2.jpg'
											alt='line3'
										/>
									</div>
									<div className={styles.innerGridd}>
										<img
											src='https://odis.homeaway.com/odis/destination/d7b69e76-921d-4abb-a5a3-acb2fba344de.hw2.jpg'
											alt='line4'
										/>
									</div>
								</div>
							</div>
							{/*</Link>*/}
						</div>

						{/**new Grid */}

						{visible ? (
							<div className={styles.inspiredGridTwo}>
								<div className={styles.gridOne}>
									<img
										src='https://odis.homeaway.com/odis/homepage/59a42609-b55a-456b-9361-50e46843c866.hw2.jpg'
										alt='Pic1'
									/>
								</div>
								<div className={styles.gridTwo}>
									<div className={styles.innerGridOne}>
										<div className={styles.innerGrid}>
											<img
												src='https://odis.homeaway.com/odis/homepage/39865c5c-d47b-4bbe-8f82-dbbc33864d52.hw2.jpg'
												alt='line1'
											/>
										</div>
										<div className={styles.innerGrid}>
											<img
												src='https://odis.homeaway.com/odis/homepage/92c0491b-38bb-423e-852c-99565f51960c.hw2.jpg'
												alt='line2'
											/>
										</div>
									</div>
									<div className={styles.innerGridTwo}>
										<div className={styles.innerGridd}>
											<img
												src='https://odis.homeaway.com/odis/destination/d09e5b72-2d72-4bfc-9f04-6f79c986a9c9.hw2.jpg'
												alt='line3'
											/>
										</div>
										<div className={styles.innerGridd}>
											<img
												src='https://odis.homeaway.com/odis/destination/bdd475bd-4847-408e-893d-e428d404b2b8.hw2.jpg'
												alt='line4'
											/>
										</div>
									</div>
								</div>
							</div>
						) : null}
						<div onClick={handleShow} className={styles.handleShow}>
							View More ideas{" "}
							{visible ? <ExpandLessIcon /> : <ExpandMoreOutlinedIcon />}
						</div>
					</div>

					<div className={styles.bestPlaces} style={{ marginTop: "30px" }}>
						<h2 style={{ marginBottom: "10px" }}>
							Get inspired for a family trip
						</h2>

						<Carousel responsive={responsive}>
							{city &&
								city.map((el) => (
									<div>
										<img
											key={el.id}
											src={el.image_url}
											alt='images'
											style={{
												borderRadius: "5px",
												cursor: "pointer",
												width: "290px",
											}}
										/>
										<h4>{el.city_name}</h4>
									</div>
								))}
						</Carousel>
					</div>
					<div className={styles.bestPlaces} style={{ marginTop: "30px" }}>
						<h2 style={{ marginBottom: "10px" }}>
							Best places in the United States for going to the beach
						</h2>

						<Carousel responsive={responsive}>
							{city &&
								city.map((el) => (
									<div>
										<img
											key={el.id}
											src={el.image_url}
											alt='images'
											style={{
												borderRadius: "5px",
												cursor: "pointer",
												width: "290px",
											}}
										/>
										<h4>{el.city_name}</h4>
									</div>
								))}
						</Carousel>
					</div>
					<div
						style={{ display: "block", marginLeft: "-12%", marginTop: "20px" }}>
						<img
							style={{ height: "600px", width: "111%" }}
							src='https://odis.homeaway.com/odis/homepage/1bb3a26d-9eff-45c8-815e-3890dfdd514d.hp-lyp-large.jpg'
							alt='big_Image'
						/>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default AppBody;
