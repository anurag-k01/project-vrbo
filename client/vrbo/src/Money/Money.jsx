/** @format */

import "./money.css";
function Money() {
	var data = JSON.parse(localStorage.getItem("testObject"));
	var pay = JSON.parse(localStorage.getItem("payment"));
	return (
		<div>
			<div>
				<div class='box11'>
					<div id='co'>
						<form action='/thanks'>
							<div class='row'>
								<div class='col-50'>
									<h3>Billing Address</h3>
									<label for='fname'>
										<i class='fa fa-user'></i> Full Name
									</label>
									<input
										type='text'
										id='fname'
										name='firstname'
										placeholder='John M. Doe'
										className='inn'
									/>
									<label for='email'>
										<i class='fa fa-envelope'></i> Email
									</label>
									<input
										className='inn'
										type='text'
										id='email'
										name='email'
										placeholder='john@example.com'
									/>
									<label for='adr'>
										<i class='fa fa-address-card-o'></i> Address
									</label>
									<input
										type='text'
										id='adr'
										name='address'
										className='inn'
										placeholder='542 W. 15th Street'
									/>
									<label for='city'>
										<i class='fa fa-institution'></i> City
									</label>
									<input
										type='text'
										id='city'
										name='city'
										className='inn'
										placeholder='New York'
									/>

									<div class='row'>
										<div class='col-50'>
											<label for='state'>State</label>
											<input
												type='text'
												id='state'
												name='state'
												placeholder='NY'
												className='inn'
											/>
										</div>
										<div class='col-50'>
											<label for='zip'>Zip</label>
											<input
												type='text'
												id='zip'
												name='zip'
												placeholder='10001'
												className='inn'
											/>
										</div>
									</div>
								</div>

								<div class='col-50'>
									<h3>Payment</h3>
									<label for='fname'>Accepted Cards</label>
									<div class='icon-container'>
										<i class='fa fa-cc-visa' style={{ color: "navy" }}></i>
										<i class='fa fa-cc-amex' style={{ color: "blue" }}></i>
										<i class='fa fa-cc-mastercard' style={{ color: "red" }}></i>
										<i
											class='fa fa-cc-discover'
											style={{ color: "orange" }}></i>
									</div>
									<label for='cname'>Name on Card</label>
									<input
										type='text'
										id='cname'
										name='cardname'
										placeholder='John More Doe'
										className='inn'
									/>
									<label for='ccnum'>Credit card number</label>
									<input
										type='text'
										id='ccnum'
										name='cardnumber'
										placeholder='1111-2222-3333-4444'
										className='inn'
									/>
									<label for='expmonth'>Exp Month</label>
									<input
										type='text'
										id='expmonth'
										name='expmonth'
										placeholder='September'
										className='inn'
									/>
									<div class='row'>
										<div class='col-50'>
											<label for='expyear'>Exp Year</label>
											<input
												type='text'
												id='expyear'
												name='expyear'
												placeholder='2018'
												className='inn'
											/>
										</div>
										<div class='col-50'>
											<label for='cvv'>CVV</label>
											<input
												type='text'
												id='cvv'
												name='cvv'
												placeholder='352'
												className='inn'
											/>
										</div>
									</div>
								</div>
							</div>
							<label>
								<input
									type='checkbox'
									checked='checked'
									className='inn'
									name='sameadr'
								/>{" "}
								Shipping address same as billing
							</label>
							<input
								type='submit'
								className='inn'
								value='Continue to checkout'
								class='btn'
							/>
						</form>
					</div>
				</div>
				<div class='box2'>
					<img
						src={data.image1_url}
						width='400px'
						alt=''
						style={{ marginLeft: "50px" }}
					/>
					<div
						style={{ marginLeft: "50px", fontSize: "20px", marginTop: "20px" }}>
						{data.heading1}
					</div>
					<div
						style={{
							marginLeft: "50px",
							fontWeight: "bold",
							fontSize: "30px",
							marginTop: "20px",
						}}>
						Amount- ${pay.price}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Money;
