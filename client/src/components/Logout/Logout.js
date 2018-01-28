import React from "react";
import API from "../../utils/API";
import {  withRouter } from "react-router-dom";


class Logout extends React.Component {

state ={


}

handleFormLogout = event => {
  API.logOut()
  .then( res =>{
    this.props.callbackSuccessLogout();
    this.props.history.push({
      pathname: `/`
    })
  })
  .catch(err => console.log(err));

}
render(){

return(
    <div>
      <div className="modal fade" id="signOutButton" tabIndex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
                <h4 className="modal-title modal-inline-text">Are you sure you want to sign out?</h4>
               <button type="button"
                 className="btn btn-primary"
                 id="signOutButton"
                 onClick={this.handleFormLogout}
                 data-dismiss="modal">Sign out</button>
             </div>
           </div>
        </div>
      </div>
    </div>


)


}






}

export default  withRouter (Logout);
