import React from "react";
import { Redirect } from "react-router";
import API from "../../utils/API";
import YouTube from "../YouTube"
import { withRouter } from 'react-router-dom'
class GroveRoomForm extends React.Component {
constructor(props){
  super(props);
   this.state = {
     song: "",
     artist: "",
     grooveRoomInput:"",
     video_id: "",

   };
   this.handleInputChange = this.handleInputChange.bind(this);
}


handleInputChange(event) {
  console.log("Handling Change");
  var name = event.target.name;
  this.setState({
    [name]: event.target.value
  })
}



handleFormClose = event =>{
  console.log("handleFormClose called");
}

handleFormCreate = event => {
  event.preventDefault();
  API.getYouTubeVideo(`${this.state.song} ${this.state.artist}`)
    .then(res =>
      this.setState({
      video_id: res.data.id
      })
    )
    .then(res => API.saveGrooveRoomForm({
        song: this.state.song,
        artist: this.state.artist,
        video_id:this.state.video_id,
        grooveRoomInput:this.state. grooveRoomInput,
    })
   .then(res => {
    const grooveroomId = res.data.id;
      this.props.history.push({
        pathname: `/grooveroom/${grooveroomId}`,
        state: {roomInfo: res.data},
      })

   })


)}


  render() {
  
    

    return (
       

      <div>

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
                    <p className="modal-inline-text">Prepare to enter a Groove Room, others will soon follow and your world of discovering crunchy new grooves will begin.</p>
                    <label className="modal-inline-text">Enter Song</label>
                    <input className="form-control ui-autocomplete-input"
                      onChange={this.handleInputChange}

                      name="song"
                      id="initialSong" />

                    <label className="modal-inline-text">Enter Artist</label>
                    <input className="form-control ui-autocomplete-input"
                      onChange={this.handleInputChange}

                      name="artist"
                      id="initialArtist" />

                    <label className="modal-inline-text">Groove Room Name</label>

                    <input className="form-control"
                      onChange={this.handleInputChange}
                      type="text"
                      name="grooveRoomInput"
                      id="grooveRoomInput" />
                  </div>
                </div>
                <div id="errorMessageContainer" />


                <div className="modal-footer" id="myModalFooter">

                  <button onClick={this.handleFormClose}
                    type="button"
                    className="btn btn-default modal-closer"
                    data-dismiss="modal">Close</button>

                  <button onClick={this.handleFormCreate}
                    type="button"
                    className="btn btn-primary"
                    id="createGrooveRoom"
                    data-dismiss="modal">Create</button>
                    
                   
                  
                </div>
              </div>
            </div>
          </div>
        </form>


      </div>
    )
  }

}
export default withRouter(GroveRoomForm);
// export default GroveRoomForm;
