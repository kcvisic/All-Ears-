import React from "react";
import API from "../../utils/API";
import YouTube from "../YouTube"
class GroveRoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: "",
      artist: "",
      grooveRoomInput: "",
      id: "",
      video_id: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // componentDidMount() {
  // this.loadYouTubeVideo()
  // }

  handleInputChange(event) {
    console.log("Handling Change");
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }


  loadYouTubeVideo = () => {
    API.getYouTubeVideo(`${this.state.song}`)
      .then(res =>
        this.setState({
          id: res.data.id
        })
        
      )
      .catch(err => console.log(err));
      console.log(this.state.id)
  }

  handleFormClose = event => {
    console.log("handleFormClose called");
  }

  handleFormCreate = event => {
    event.preventDefault();

    this.loadYouTubeVideo()
  }

  render() {


    return (

      <div>
        <YouTube youtube={this.state.id} />
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
export default GroveRoomForm;