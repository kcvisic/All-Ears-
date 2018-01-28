
import React, { Component } from "react";
import YouTube from "../../components/YouTube";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import GrooveTitle from "../../components/GrooveTitle"


class GroveRoom extends React.Component {

constructor(props){
  super(props);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.setRoomInfo = this.setRoomInfo.bind(this);
  this.state = {
    grooveroom: "",
    video_id:  "",
    creator_id: "",
    song: "",
    artist: "",
    room_id: "",
    message:"",
    returnMessages:[],
  }

}

componentWillMount(){
    var roomInfo = null;
    try {
      roomInfo = arguments[0].location.state.roomInfo
    }
    catch(err){
      roomInfo = null;
    }
    var component = this;
    if(roomInfo === null || roomInfo === undefined){
      API.getGrooveRoomInfo(this.props.match.params.id)
        .then(function(res){
          component.setRoomInfo(res.data);
        })
    }
    else {
      this.setRoomInfo(roomInfo);
    }
}

setRoomInfo(roomInfo){
  this.setState({
    grooveroom: roomInfo.name,
    video_id:  roomInfo.video_id,
    creator_id: roomInfo.creator_id,
    song: roomInfo.song,
    artist: roomInfo.artist,
    room_id: roomInfo.id,
    message:"",
    returnMessages:[],
  });
}

handleInputChange = event => {
  console.log("Handling Change")
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleMessageCreation = () => {
  API.saveGrooveRoomMessage({
      room_Id: this.state.room_id,
      message: this.state.message,
  })  .catch(err => console.log(err));
}
handleMessagesRetreval = () => {
  API.getGrooveRoomMessages(
    this.state.room_id
  )
  .then(res =>
    this.setState({
    returnMessages:res.data

  })).catch(err => console.log(err));
}

handleFormSubmit = event => {
  event.preventDefault();
  this.handleMessageCreation();
  this.handleMessagesRetreval();


};


  render(){



    return(
      <Container>
        <Row>
          <Col size="md-12">
          <GrooveTitle>
            <h1>{this.state.grooveroom}</h1>
            </GrooveTitle></Col>
        </Row>
      <Row>
          <Col size="md-12">
          <YouTube>
              <iframe className="youtube" width="100%" height="315"
                src={"https://www.youtube.com/embed/" + this.state.video_id}
                frameborder="0" allowfullscreen></iframe>
          </YouTube>
          </Col>
          <Col size="md-12">

                  <div className="chat-mod">
                      <div className="chatbox">
                          <div className="chatlogs">
                              <div className="chat friend">
                                  <p className="chat-message">This song is awesome</p>
                              </div>
                              <div className = "messages">
                              <div className="chat self">
                                  <ul>
                                    {
                                      this.state.returnMessages.forEach(function(el,index,array){
                                        return <li>{el.message}</li>
                                      })
                                    }
                                  </ul>
                              </div>
                              </div>
                          </div>
                          <form className="chat-form">
                            <input className="form-control"
                            onChange={this.handleInputChange}
                              type="text"
                              name="message"
                              />

                            <button  type="button" onClick={this.handleFormSubmit}>Send</button>
                          </form>

                      </div>
                  </div>
          </Col>
      </Row>
      </Container>
    )
  }

}

export default GroveRoom;
