import React from "react";
import API from "../../utils/API";

class YouTube extends React.Component{
  constructor(props){
    super(props);
     this.state = {
       song: "",
       artist: "",
       src:""
     };
     this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    console.log("Handling Change");
    var name = event.target.name;
    this.setState({
      [name] : event.target.value
    })
  }



  handleFormCreate = event => {
    event.preventDefault();
    console.log("HandleFormCreate Called");
    console.log(this.state);
  }


render(){
  return(
    <div>
    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 className="modal-title modal-inline-text" id="purchaseLabel">Groove Room</h4>


            <label className="modal-inline-text">Enter Song</label>
            <input className="form-control ui-autocomplete-input" onChange={this.handleInputChange} type="search" name="song" id="initialSong" />

            <label className="modal-inline-text">Enter Artist</label>
            <input className="form-control ui-autocomplete-input" onChange={this.handleInputChange} type="search" name="artist" id="initialArtist" />

            <button onClick={this.handleFormCreate} type="button" className="btn btn-primary" id="createGrooveRoom" data-dismiss="modal">Create</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="container">
        <div className="col-sm-12 col-md-12 col-lg-6 text-center">
          <div className="youtube-holder">
            <iframe width="50%" height="315" src="https://www.youtube.com/embed/O3QOBYq0lBI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 text-center">
          <div className="jumbotron chat-mod text-center" id="performerImg">

          </div>
        </div>
      </div>
    </div>
    </div>

  )
}



}

export default YouTube;
