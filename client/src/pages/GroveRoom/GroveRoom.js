import React, { Component } from "react";
import YouTube from "../../components/YouTube";
import Jumbotron from "../../components/Jumbotron"
import Nav from "../../components/Nav";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import ChatWindow from "../../components/ChatWindow"
import GrooveTitle from "../../components/GrooveTitle"
class GroveRoom extends Component {

state= {


};
  render(){
    return(
      <Container>
        <Row>
          <Col size="md-12"><GrooveTitle></GrooveTitle></Col>
        </Row>
      <Row>
          <Col size="sm-12 md-12 lg-6">
          <YouTube></YouTube>
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
