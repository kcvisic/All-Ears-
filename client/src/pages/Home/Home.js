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
import ChatCards from "../../components/ChatCards";
import chatroom from "../../chatroom.json";

// import Toggle from "../../components/Toggle";

class Home extends Component {

state = {
  chatroom
};

  render(){
    return (
      <Container>
      <Row>
          <Col size="md-12">
      <Jumbotron>
      </Jumbotron>
          </Col>
      </Row>
      
     <Row>  
         
       {this.state.chatroom.map( (chat, id) => (
            <Col size="sm-12 md-4">  
         <ChatCards
             id={chat.id}
              key={chat.id}
              name={chat.name}
              song={chat.song}
              artist={chat.artist}
              />
            </Col>
              ))}   
          
        </Row>      
      </Container>
    )
  }

}

export default Home;
