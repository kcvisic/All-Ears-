import React, { Component } from "react";
import YouTube from "../../components/YouTube";
import {  withRouter } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import GrooveTitle from "../../components/GrooveTitle"
import AdminInputForm from "../../components/AdminInputForm";
import AdminToggle from "../../components/AdminToggle";
class GroveRoom extends React.Component {
constructor(props){
  super(props);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.setRoomInfo = this.setRoomInfo.bind(this);
  this.handleMessagesRetreval = this.handleMessagesRetreval.bind(this);
  this.handleIfAdmenDisplayDeleteBtn =this.handleIfAdmenDisplayDeleteBtn.bind(this);
  this.handleFormDelete = this.handleFormDelete.bind(this);
  this.state = {
    grooveroom: "",
    video_id:  "",
    creator_id: "",
    song: "",
    artist: "",
    room_id: "",
    message:"",
    returnMessages:[],
    admin: false,
  }
}

componentDidMount() {
  this.getUserInfo()
}

componentWillMount(){

    let roomInfo = null;
    try {
      roomInfo = arguments[0].location.state.roomInfo
    }
    catch(err){
      roomInfo = null;
    }
    var component = this;
    if(roomInfo === null || roomInfo === undefined){
      API.getGrooveRoomInfo(this.props.match.params.id)
        .then(function(res){
          component.setRoomInfo(res.data);
          component.handleMessagesRetreval();
          component.handleIfAdmenDisplayDeleteBtn();
        })
    }
    else {

      this.setRoomInfo(roomInfo);
    }

}


setRoomInfo(roomInfo){
  this.setState({
    grooveroom: roomInfo.name,
    video_id:  roomInfo.video_id,
    creator_id: roomInfo.creator_id,
    song: roomInfo.song,
    artist: roomInfo.artist,
    room_id: roomInfo.id,
    message:"",
    returnMessages:[],
    admin: false,
  });
}

handleInputChange = event => {
  console.log("Handling Change")
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleMessageCreation = () => {
  API.saveGrooveRoomMessage({
      room_Id: this.state.room_id,
      message: this.state.message,
  }).catch(err => console.log(err));
}
handleMessagesRetreval = () => {
  API.getGrooveRoomMessages(
    this.state.room_id
  )
  .then(res =>
    this.setState({
    returnMessages: res.data

  })).catch(err => console.log(err));
}
handleFormSubmit = event => {
  event.preventDefault();
  this.handleMessageCreation();
  this.handleMessagesRetreval();
  this.refs.fieldName.value="";
};

handleIfAdmenDisplayDeleteBtn = () => {
  API.checkIfAdmin(
      this.state.room_id
  ).then(res =>
      this.setState({
        admin: res.data.isAdmin
      })


).catch(err => console.log(err));
}
handleFormDelete = event => {
  API.deleteGrooveRoom(
    this.state.room_id
  ).then(res => {
    this.props.history.push({
          pathname: `/home`
        })
  })
}

handleFormSearch = event =>{

}
handleFormClose = event => {

}

  render(){
    return(
      <Container>
        <Row>
          <Col size="md-12">

          <GrooveTitle>


            {
              this.state.admin ?
              (
                    <button type="button" className="btn btn-primary" onClick={this.handleFormDelete} id="deleteRoomBtn">Delete</button>

              )
              :
              (
                <div></div>
              )
            }

            <h1>{this.state.grooveroom}</h1>
          </GrooveTitle>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <YouTube>
            <iframe title="This is a unique title" className="youtube" width="100%" height="315" src={ "https://www.youtube.com/embed/" + this.state.video_id} frameBorder="0" allowFullScreen></iframe>
          </YouTube>
          </Col>
          </Row>
          <Row>
          <Col size="md-6">
          <div className="chat-mod">
            <div className="chatbox">
              <div className="chatlogs">
                <div className="messages">
                  <div className="chat self">
                    <ul>
                      { this.state.returnMessages.map( el=> (
                    <div className="chat-row col-md-12" key={el.id}>
                      <div className="bubble col-sm-4"><span className="username">{el.User.username}</span></div><div className="col-sm-8"><p className="chat-message">{el.message}</p></div>
                       </div>

                      ) ) }
                    </ul>
                  </div>
                </div>
              </div>
              <form className="chat-form">
                <input className="form-control" onChange={this.handleInputChange} type="text" name="message" ref="fieldName" />
                <button type="button" onClick={this.handleFormSubmit}>Send</button>
              </form>
            </div>
          </div>
          </Col>
          <Col size="md-6">
            <ul className="list-group">
              {this.state.map(el => (
                <li className="list-group-item" key={el.id}>{el.User.username}</li>
                 ))}
            </ul>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default  withRouter (GroveRoom);
