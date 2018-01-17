import React, { Component } from "react";
import YouTube from "../../components/YouTube";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";


class GroveRoom extends Component {

state= {


};
  render(){
    return(
      <Container>
      <Row>
          <Col size="md-12">
          <YouTube></YouTube>
          </Col>
      </Row>
      </Container>
    )
  }

}

export default GroveRoom;
