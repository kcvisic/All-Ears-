import axios from "axios";

export default {
  authenticated: function() {
    return axios.get("/auth/authenticated");
  },
  signIn: function(data) {
    return axios.post('/auth/signin', data);
  },

  logOut: function() {
    return axios.get('/auth/logout');
  },

  submitSignup: function(data) {
    return axios.post('/auth/signup', data);
  },
  getYouTubeVideo: function(keyword) {
    return axios.get('/api/youtube/search/' + keyword);
  },
  getGrooveRoomInfo: function(id) {
    return axios.get('/api/grooveroom/room/' + id);
  },
  saveGrooveRoomForm: function(data) {
    return axios.post("/api/grooveroom/create", data);
  },
  getGrooveRoomMessages: function(groveroomId) {
    return axios.get("/api/grooveroom/messages", {
      params: {
        groveroomId: groveroomId
      }
    })
  },
  saveGrooveRoomMessage: function(data) {
    return axios.post("/api/grooveroom/message", data);
  },

  findAllGrooveRooms: function() {
    return axios.get("/api/grooveroom/room")
  },

  deleteGrooveRoom: function(roomId){
    return axios.delete("/api/grooveroom/room", {
      params: {
        roomId: roomId
          }
      })

  },
  checkIfAdmin: function(room_id){
    return axios.get("/api/grooveroom/admin", {
      params: {
        room_id: room_id
      }
    })
  },
  findUsers: function(userId) {
    return axios.get("/api/grooveroom/users/" + userId)
  }
};
