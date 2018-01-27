import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import GroveRoomForm from "../../components/GroveRoomForm";
import { Col, Row, Container } from "../../components/Grid";

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
