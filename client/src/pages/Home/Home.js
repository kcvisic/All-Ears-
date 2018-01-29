import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import GroveRoomForm from "../../components/GroveRoomForm";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API"
import ChatCards from "../../components/ChatCards"
class Home extends Component{
state = {
  grooverooms: [],
  name: "",
  artist: "",
  song: "",
};
  


componentDidMount() {
  this.getRooms();
}

getRooms = () => {
  API.findAllGrooveRooms()
  .then(res =>
    this.setState({grooverooms: res.data})
  )
  .catch(err => console.log(err))
    }

  render(){
    return (
      <Container>
      <Row>
          <Col size="md-12">
      <Jumbotron>
      <GroveRoomForm/>
      </Jumbotron>
          </Col>
      </Row>
     
     <Row>  
             
       {this.state.grooverooms.map((grooveroom, index) => (
              <Col size="sm-12 md-4">  
                <ChatCards>
                  <div key={index} className="panel-heading" >
                    <h4>{grooveroom.name}</h4></div>
                  <div className="panel-body darkPanel"><h3>Currently Playing:</h3>
                    <p className="roomDesc">{grooveroom.song}<br />
                      {grooveroom.artist}</p>
                    <a href={"/grooveroom/" + grooveroom.id} className="btn btn-primary">Go To Room</a>
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
