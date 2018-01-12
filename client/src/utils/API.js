import axios from "axios";

export default {

  signUp:function(){
    return axios.get('/auth/signup');
  },

  signIn:function(){
    return axios.get('/auth/signin');
  },

  dashBoard:function(){
    return axios.get('/auth/dashboard');
  },
  logOut:function(){
    return axios.get('/auth/logout');
  },

  SubmitSignup:function(){
    return axios.post('/auth/signup');
  },

  
};
