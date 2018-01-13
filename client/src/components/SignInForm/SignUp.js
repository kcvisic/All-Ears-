import React from "react";

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      email:"",
      userName:"",
      password:"",
      confirmPassword:"",

    }
       this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    console.log("Handling Change");
    var name = event.target.name;
    this.setState({
      [name] : event.target.value
    })
  }

  handleFormClose = event =>{
    console.log("handleFormClose called");
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("HandleFormCreate Called");
    console.log(this.state);
  }


  render(){
    return(
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
          value ={this.email}
          type="text"
          id="emailInput"
          onChange={this.handleInputChange}
        required
          />

          <label className="modal-inline-text">Username</label>
          <input className="form-control"
          name="userName"
          value ={this.userName}
          type="text"
          id="usernameInput"
          onChange={this.handleInputChange}
        required
          />

          <label className="modal-inline-text">Password</label>
          <input className="form-control"
          name="password"
          value={this.password}
          type="password"
          id="passwordInput"
          onChange={this.handleInputChange}
        required
          />

          <label className="modal-inline-text">Confirm Password</label>
          <input className="form-control"
          name= "confirmPassword"
          value ={this.confirmPassword}
          type="password"
          id="passwordConfirmInput"
          onChange={this.handleInputChange}
        required
          />
          <div className="modal-footer">
              <button type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={this.handleFormClose}>Close</button>
              <button type="button"
              className="btn btn-primary"
              id="signUpButton"
              onClick={this.handleFormSubmit}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </form>

    )
  }
}
export default SignUp;
