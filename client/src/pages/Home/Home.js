import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import GroveRoomForm from "../../components/GroveRoomForm";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API"
import ChatCards from "../../components/ChatCards"
class Home extends Component {
  state = {
    grooverooms: [],
    name: "",
    artist: "",
    song: "",
    image: "",
  };



  componentDidMount() {
    this.getRooms();
  }

  getRooms = () => {
    API.findAllGrooveRooms()
      .then(res =>
        this.setState({ grooverooms: res.data })
      )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <GroveRoomForm />
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {this.state.grooverooms.map((grooveroom, index) => (
            <Col size="sm-12 md-4" key={index}>
              <ChatCards >
                <div className="panel-heading">

                  <div className="panel-body darkPanel">
                    <h4 key={grooveroom.name}>{grooveroom.name}</h4>
                    <img src={grooveroom.image} className="img-responsive" />
                    <p key={grooveroom.song} className="roomDesc">{grooveroom.song} - {grooveroom.artist}</p>

                    <a key={grooveroom.id} href={"/grooveroom/" + grooveroom.id} className="btn btn-primary">Go To Room</a>
                  </div>
                </div>
              </ChatCards>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }

}

export default Home;