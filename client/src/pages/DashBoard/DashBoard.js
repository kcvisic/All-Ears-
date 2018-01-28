
import React, { Component } from "react";
import YouTube from "../../components/YouTube";
import Jumbotron from "../../components/Jumbotron"
import Nav from "../../components/Nav";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import ChatWindow from "../../components/ChatWindow"
import GrooveTitle from "../../components/GrooveTitle"
import Welcome from "../../components/Welcome"

class DashBoard extends Component {
  state= {


  };
    render(){
      return(
        <Container>
        <Row>
            <Col size="md-12">
              <Welcome></Welcome>
            </Col>
        </Row>
        </Container>
      )
    }

  }



  export default DashBoard;
