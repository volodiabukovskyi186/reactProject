
import * as firebase from "firebase/app";
import "firebase/auth";

 const app =  firebase.initializeApp({
    apiKey: "AIzaSyBl7T3YMNdWyM8t6J0W3ine5G6t4Wl5TF4",
    authDomain: "react-ny-times.firebaseapp.com",
    databaseURL: "https://react-ny-times.firebaseio.com",
    projectId: "react-ny-times",
    storageBucket: "react-ny-times.appspot.com",
    messagingSenderId: "976966952219",
    appId: "1:976966952219:web:439f99b9df3b7c52495fbe",
    measurementId: "G-7QCVJ1R4TM"
  });
  
  export default app


