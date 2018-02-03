import React from "react";
import API from "../../utils/API";
import {  withRouter } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      email:"",
      firstname:"",
      lastname:"",
      username:"",
      password:"",
      confirmPassword:"",

    }
       this.handleInputChange = this.handleInputChange.bind(this);
       this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(event) {
    console.log("Handling Change");
    const name = event.target.name;
    this.setState({
      [name] : event.target.value
    })
  }

  handleFormClose = event =>{
    console.log("handleFormClose called");
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.submitSignup(this.state)
    .then(res =>
      this.setState({
        email:this.state.email,
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        username:this.state.username,
        password:this.state.password,
        confirmPassword:this.state.confirmPassword
      })

    ).then(res => {
      API.signIn({
  			username:this.state.username,
  			password:this.state.password
  		})
    })
    .then( res =>{
       this.props.callbackSuccessLogin();
      this.props.history.push({
        pathname: `/home`
      })
    })
    .catch(err => console.log(err));

  };


  render(){
    return(
      <div className="signup">
        <form>
          <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 className="modal-title modal-inline-text">Sign Up</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">

                    <label className="modal-inline-text">Email</label>
                    <input className="form-control" name="email" value={this.email} type="text" id="emailInput" onChange={this.handleInputChange} required />

                    <label className="modal-inline-text">Firstname</label>
                    <input className="form-control" name="firstname" value={this.firstname} type="text" id="firstname" onChange={this.handleInputChange} required />

                    <label className="modal-inline-text">Lastname</label>
                    <input className="form-control" name="lastname" value={this.lastname} type="text" id="lastname" onChange={this.handleInputChange} required />

                    <label className="modal-inline-text">Username</label>
                    <input className="form-control" name="username" value={this.username} type="text" id="usernameInput" onChange={this.handleInputChange} required />

                    <label className="modal-inline-text">Password</label>
                    <input className="form-control" name="password" value={this.password} type="password" id="passwordInput" onChange={this.handleInputChange} required />

                    <label className="modal-inline-text">Confirm Password</label>
                    <input className="form-control" name="confirmPassword" value={this.confirmPassword} type="password" id="passwordConfirmInput" onChange={this.handleInputChange} required />
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.handleFormClose}>Close</button>
                      <button type="button" className="btn btn-primary" id="signUpButton" onClick={this.handleFormSubmit} data-dismiss="modal">Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default withRouter (SignUp);
