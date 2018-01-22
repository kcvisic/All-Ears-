import axios from "axios";

export default {
  authenticated:function(){
    return axios.get("/auth/authenticated");
  },
  signIn:function(data){
    return axios.post('/auth/signin', data);
  },

  logOut:function(){
    return axios.get('/auth/logout');
  },

  submitSignup:function(data){
    return axios.post('/auth/signup', data);
  },
  getYouTubeVideo:function(keyword){
    return axios.get('/api/youtube/search/' + keyword);
  },
  getChatRoom: function (id) {
  return axios.get('/api/grooveroom/' + id);
},
  saveGrooveRoomForm: function(data) {
  return axios.post("/api/grooveroom/create", data);
}

};
