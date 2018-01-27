
import React, { Component } from "react";
import YouTube from "../../components/YouTube";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

import GrooveTitle from "../../components/GrooveTitle"


class GroveRoom extends React.Component {
roomInfo = arguments[0].location.state.roomInfo
constructor(props){  super(props);
this.state = {
  grooveroom: this.roomInfo.name,
  video_id:  this.roomInfo.video_id,
  creator_id: this.roomInfo.creator_id,
  song: this.roomInfo.song,
  artist: this.roomInfo.artist,
  room_id: this.roomInfo.id,
  message:"",
  returnMessages:{},
};
this.handleInputChange = this.handleInputChange.bind(this);

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
  API.getGrooveRoomMessages({
    groveroomId:this.state.room_id,
  }).then(res =>
  this.setState({
    returnMessages:res.body,

  })).catch(err => console.log(err));
}

handleFormSubmit = event => {
  event.preventDefault();
  this.handleMessageCreation();
  this.handleMessagesRetreval();
  console.log(this.returnMessages)
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
                              <div className="chat self">
                                  <p className="chat-message"></p>
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
