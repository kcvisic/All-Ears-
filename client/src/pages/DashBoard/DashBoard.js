
import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

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
