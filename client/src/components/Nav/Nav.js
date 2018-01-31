import React from "react";
import "./Nav.css";
import SignUp from "../SignInForm"
import Login from "../LoginForm"
import Logout from "../Logout"
import API from "../../utils/API";



class Nav extends React.Component{
constructor(props){
  super(props);
  this.state={
    authenticate: false,
  }
  this.callbackSuccessLogin = this.callbackSuccessLogin.bind(this);
  this.callbackSuccessLogout = this.callbackSuccessLogout.bind(this);
}

callbackSuccessLogin(){
  this.setState({authenticate: true})
}

callbackSuccessLogout(){
  this.setState({
    authenticate: false
  })
}



componentDidMount(){
  API.authenticated()
    .then(res => this.setState({ authenticate : true}))
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
	      <a className="navbar-brand" href="">All Ears</a>
	    </div>
	    <div className="collapse navbar-collapse">

	      <ul className="nav navbar-nav navbar-right">
	      {
          this.state.authenticate ?
          (
              <li><a  data-toggle="modal" data-target="#signOutButton"><span className="glyphicon glyphicon-log-out"></span> Sign out</a>
              <Logout callbackSuccessLogout={this.callbackSuccessLogout}/>
          </li>
          )
          :
          (
             [
                <li>
                  <a  data-toggle="modal" data-target="#loginModal"><span className="glyphicon glyphicon-log-in"></span> Login</a>
                  <SignUp />
                </li>,
                <li>
                  <a data-toggle="modal" data-target="#signUpModal"><span className="glyphicon glyphicon-user"></span> Sign Up</a>
                  <Login callbackSuccessLogin={this.callbackSuccessLogin}/>
                </li>
             ]
          )

        }
	        <li><a href="">
	        		<span>
						<label className="switch">
						  <input type="checkbox" id="darkModeSlider"/>
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