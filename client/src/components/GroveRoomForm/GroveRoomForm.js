import React from "react";

const GroveRoomForm = props =>(
<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 className="modal-title modal-inline-text" id="purchaseLabel">Groove Room</h4>
            </div>
            <div className="modal-body" id="myModalBody">
              <div className="form-group">
                <p className="modal-inline-text">Prepare to enter a Groove Room, others will soon follow and your world of discovering crunchy new grooves will begin.</p>
                <label className="modal-inline-text">Enter Song</label>
                <input  className="form-control ui-autocomplete-input"
                type="search"
                name="initialSong"
                value={props.initialSong}
                id="initialSong"/>

                <label className="modal-inline-text">Enter Artist</label>
                <input  className="form-control ui-autocomplete-input"
                type="search"
                name="initialArtist"
                value={props.initalArtist}
                id="initialArtist"/>

                <label className="modal-inline-text">Groove Room Name</label>
                <input className="form-control"
                type="text"
                name="grooveRoomInput"
                value={props.grooveRoomInput}
                id="grooveRoomInput"/>
              </div>
            </div>
            <div id="errorMessageContainer"/>

            </div>
            <div className="modal-footer" id="myModalFooter">
                <button type="button"
                className="btn btn-default modal-closer"
                 data-dismiss="modal"
                 onClick={props.handleFormClose}>Close</button>
                <button type="button"
                className="btn btn-primary"
                 id="createGrooveRoom"
                onClick={props.handleFormCreate}
                 data-dismiss="modal">Create</button>
            </div>
        </div>
    </div>

)
export default GroveRoomForm;
