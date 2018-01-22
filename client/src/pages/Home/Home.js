import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SignUp from "../../components/SignInForm";
import Login from "../../components/LoginForm";
import GroveRoomForm from "../../components/GroveRoomForm";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import ChatCards from "../../components/ChatCards";
import YouTube from "../../components/YouTube";


class Home extends Component {

state= {


};
  render(){
    return(
      <Container>
      <Row>
          <Col size="md-12">
      <Jumbotron>
      <GroveRoomForm/>
      </Jumbotron>
          </Col>
      </Row>
      </Container>
    )
  }

}

export default Home;
