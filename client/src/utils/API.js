import axios from "axios";

export default {

  signIn:function(data){
    return axios.post('/auth/signin', data);
  },

  logOut:function(){
    return axios.get('/auth/logout');
  },

  submitSignup:function(data){
    return axios.post('/auth/signup', data);
  },

};
