import React from "react";


const Login = props => (

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
name="userName"
value={props.username}
type="text"
id="usernameLoginInput"
onChange={props.handleInputChange}
required
/>
  <label className="modal-inline-text">Password</label>
<input className="form-control"
name= "password"
value={props.password}
type="password"
id="passwordLoginInput"
onChange={props.handleInputChange}
required
/>
  </div>
    <div id="errorMessageContainerLogin">

    </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" id="loginButton">Login</button>
            </div>
            </div>
            </div>
        </div>
    </div>

</form>
)
export default Login
