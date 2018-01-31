import React from "react";
import API from "../../utils/API";
import {  withRouter } from "react-router-dom";
class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username:"",
			passsword:"",
			error: false,
		}
		   this.handleInputChange = this.handleInputChange.bind(this);
			 this.handleFormLogin = this.handleFormLogin.bind(this);

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
		API.signIn({
			username:this.state.username,
			password:this.state.password
		})
		.then( res =>
			this.setState({
				username:this.state.username,
				password:this.state.password,
			})
		)
		 .then( res =>{
			 this.props.callbackSuccessLogin();
			 this.props.history.push({
				 pathname: `/home`
			 })

		 })
		 .catch(err => {
				if(err.response.status === 401){
					this.setState({error: true})
					this.refs.fieldUsername.value="";
					this.refs.fieldPassword.value="";
					alert("Incorrect username or password. Try again")
				}
		 });

	}

	render(){
		return(
			<div className="login">
			  <form>
			    <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog">
			      <div className="modal-dialog">
			        <div className="modal-content">
			          <div className="modal-header">
									 <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			            	<h4 className="modal-title modal-inline-text">Login</h4>
			          </div>
			          <div className="modal-body">
			            <div className="form-group">
			              <label className="modal-inline-text">Username</label>
			              <input className="form-control" name="username" ref="fieldUsername" value={this.username} type="text" id="usernameLoginInput" onChange={this.handleInputChange} required />
			              <label className="modal-inline-text">Password</label>
			              <input className="form-control" name="password" ref="fieldPassword" value={this.password} type="password" id="passwordLoginInput" onChange={this.handleInputChange} required />
			            </div>
			            {
										this.state.error ?
			              (
			                <div style={{color:'red'}}>
			                  <p>Incorrect username or password</p>
			                </div>
			              ):
			              (
			                <div></div>
			              )
			            }
			          </div>
			          <div className="modal-footer">
			            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.handleFormClose}>Close</button>
			            <button type="button" className="btn btn-primary" data-dismiss="modal" id="loginButton" onClick={this.handleFormLogin}>Login</button>
			          </div>
			        </div>
			      </div>
			    </div>
			  </form>
			</div>
		)
	}
}
export default  withRouter (Login);
