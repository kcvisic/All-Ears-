import React from "react";
import API from "../../utils/API";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			passsword: "",

		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		console.log("Handling Change");
		const name = event.target.name;
		this.setState({
			[name]: event.target.value
		})
	}
	handleFormClose = event => {
		console.log("handleFormClose called");
	}
	handleFormLogin = event => {
		event.preventDefault();
		API.signIn(this.state)
			.then(res =>
				this.setState({
					username: this.state.username,
					password: this.state.password,
				})
			)
			.catch(err => console.log(err));
	}
	render() {
		return (
			<form>

				<div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 className="modal-title modal-inline-text">Login</h4>
								<div className="modal-body">
									<div className="form-group">

										<label className="modal-inline-text">Username</label>
										<input className="form-control"
											name="username"
											value={this.username}
											type="text"
											id="usernameLoginInput"
											onChange={this.handleInputChange}
											required
										/>
										<label className="modal-inline-text">Password</label>
										<input className="form-control"
											name="password"
											value={this.password}
											type="password"
											id="passwordLoginInput"
											onChange={this.handleInputChange}
											required
										/>
									</div>
									<div id="errorMessageContainerLogin">

									</div>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-default"
										data-dismiss="modal"
										onClick={this.handleFormClose}>Close</button>

									<button type="button"
										className="btn btn-primary"
										id="loginButton"
										onClick={this.handleFormLogin}
										data-dismiss="modal">Login</button>
								</div>
							</div>
						</div>
					</div>
				</div>

			</form>
		)
	}
}
export default Login