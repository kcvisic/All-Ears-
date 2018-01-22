import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import SignUp from "../SignInForm"
import Login from "../LoginForm"
import API from "../../utils/API";
import { Route, Redirect } from 'react-router'
// import Toggle from "../Toggle"

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticate: false,
		}
	}

	componentDidMount() {
		API.authenticated()
			.then(res => this.setState({ authenticate: true }))
			.catch(err => console.log(err));
	}

	render() {

		return (
			<div className="nav">


				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">All Ears</a>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li className="active"><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								{
									this.state.authenticate ?
										(
											<li><a id="signOutButton"><span className="glyphicon glyphicon-log-out"></span> Sign out</a></li>
										)
										:
										(
											[
												<li>
													<a data-toggle="modal" data-target="#loginModal"><span className="glyphicon glyphicon-log-in"></span> Login</a>
													<SignUp />
												</li>,
												<li>
													<a data-toggle="modal" data-target="#signUpModal"><span className="glyphicon glyphicon-user"></span> Sign Up</a>
													<Login />
												</li>
											]
										)

								}
								<li><a href="#">
									<span>
										<label className="switch">
											<input type="checkbox" id="darkModeSlider" />
											<span className="slider round"></span>

										</label>
									</span>
								</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		)
	}
};

export default Nav;