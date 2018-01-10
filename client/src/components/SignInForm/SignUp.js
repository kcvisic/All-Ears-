import React from "react";

const SignUp = props => (

  <form>
  <div className="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
	   <div className="modal-dialog">
	     <div className="modal-content">
	       <div className="modal-header">
	          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	             <h4 className="modal-title modal-inline-text">Sign Up</h4>
	               </div>
  <div className="modal-body">
    <div className="form-group">

    <label className="modal-inline-text">Email</label>
      <input className="form-control"
      name ="email"
      value ={props.email}
      type="text"
      id="emailInput"
      onChange={props.handleInputChange}
    required
      />

      <label className="modal-inline-text">Username</label>
      <input className="form-control"
      name="userName"
      value ={props.UserName}
      type="text"
      id="usernameInput"
      onChange={props.handleInputChange}
    required
      />

      <label className="modal-inline-text">Password</label>
      <input className="form-control"
      name="password"
      value={props.password}
      type="password"
      id="passwordInput"
      onChange={props.handleInputChange}
    required
      />

      <label className="modal-inline-text">Confirm Password</label>
      <input className="form-control"
      name= "confirmPassword"
      value ={props.confirmPassword}
      type="password"
      id="passwordConfirmInput"
      onChange={props.handleInputChange}
    required
      />
      <div className="modal-footer">
          <button type="button"
          className="btn btn-default"
          data-dismiss="modal"
          onClick={props.handleFormClose}>Close</button>
          <button type="button"
          className="btn btn-primary"
          id="signUpButton"
          onClick={props.handleFormSubmit}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</form>





)
export default SignUp;
