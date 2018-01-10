import axios from "axios";

export default {

  signUp:function(){
    return axios.get('/signup');
  },

  signIn:function(){
    return axios.get('/signin');
  },

  dashBoard:function(){
    return axios.get('/dashboard');
  },
  logOut:function(){
    return axios.get('/logout');
  },

  SubmitSignup:function(){
    return axios.post('/signup');
  },
};
