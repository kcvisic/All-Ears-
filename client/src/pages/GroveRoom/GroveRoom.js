
import React, { Component } from "react";
import YouTube from "../../components/YouTube";
import Jumbotron from "../../components/Jumbotron"
import Nav from "../../components/Nav";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import ChatWindow from "../../components/ChatWindow"
import GrooveTitle from "../../components/GrooveTitle"


class GroveRoom extends Component {
roomInfo = arguments[0].location.state.roomInfo
state = {
  grooveroom: this.roomInfo.name,
  video_id:  this.roomInfo.video_id,
  creator_id: this.roomInfo.creator_id,
  song: this.roomInfo.song,
  artist: this.roomInfo.artist,
  room_id: this.roomInfo.id,
};

// componentDidMount() {
//  this.loadChatRoom();
// };

// loadChatRoom = () => {
//   API.getChatRoom(this.state.video_id)
//     .then(res => this.setState({ grooveroo:})
//   )
//     .catch(err => console.log(err));
//
// }
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
          <Col size="sm-12 md-12 lg-6">
          <YouTube>
              <iframe className="youtube" width="100%" height="315" src={"https://www.youtube.com/embed/" + this.state.video_id} frameborder="0" allowfullscreen></iframe>
          </YouTube>
          </Col>
          <Col size="sm-12 md-12 lg-6">
            <ChatWindow></ChatWindow>
          </Col>
      </Row>
      </Container>
    )
  }

}

export default GroveRoom;
