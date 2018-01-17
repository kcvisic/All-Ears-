import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SignUp from "../../components/SignInForm";
import Login from "../../components/LoginForm";
import GroveRoomForm from "../../components/GroveRoomForm";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import YouTube from "../../components/YouTube";
// import Toggle from "../../components/Toggle";

class Home extends Component {

state= {


};
  render(){
    return(
      <Container>
      <Row>
          <Col size="md-12">
      <Jumbotron>

      </Jumbotron>
          </Col>
      </Row>
      </Container>
    )
  }

}

export default Home;
