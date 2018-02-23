import React from "react";


const AdminToggle = ({children}) => (
  <div>
     <button type="button" className="btn btn-primary btn-lg buttonShowModal" data-toggle="modal" data-target="#myModal" id="newSongBtn">New Song</button>
    <form>
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title modal-inline-text" id="purchaseLabel">Groove Room</h4>
            </div>
            <div className="modal-body" id="myModalBody">
              <div className="form-group">
                <p className="modal-inline-text">Choose another song.</p>
          {children}
              </div>
            </div>
            <div id="errorMessageContainer" />
            <div className="modal-footer" id="myModalFooter">

            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

)

export default AdminToggle;
