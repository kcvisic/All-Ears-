import React from "react";


const AdminToggle = ({children}) => (

    <form>
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title modal-inline-text" id="purchaseLabel">Groove Room</h4>
            </div>
          {children}
          </div>
        </div>
      </div>
    </form>


)

export default AdminToggle;
