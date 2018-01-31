import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
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
