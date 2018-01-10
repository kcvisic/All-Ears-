import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SignUp from "../../components/SignInForm";
import Login from "../../components/LoginForm";
import GroveRoomForm from "../../components/GroveRoomForm";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import Nav from "../../components/Nav";
import API from "../../utils/API";
// import Toggle from "../../components/Toggle";

class Home extends Component {

state= {
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
  initialSong: "",
  initalArtist: "",
  grooveRoomInput: ""
};
handleFormClose = event =>{

}
  handleFormCreate = event => {

}
  getYouTubeVideos = () => {

  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    handleFormSubmit = event => {
      event.preventDefault();
      this.getYouTubeVideos();
    };

  render(){
    return(
<Container>
<Row>
    <Col size="md-12">
<Jumbotron>
<GroveRoomForm></GroveRoomForm>
</Jumbotron>
    </Col>

</Row>

</Container>



    )
  }

}


export default Home;
