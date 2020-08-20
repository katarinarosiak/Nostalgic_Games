import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACNFAst4lxepYG7jQMVoVCMscHaA75MV0",
  authDomain: "pink-games-bf232.firebaseapp.com",
  databaseURL: "https://pink-games-bf232.firebaseio.com",
  projectId: "pink-games-bf232",
  storageBucket: "pink-games-bf232.appspot.com",
  messagingSenderId: "481455441939",
  appId: "1:481455441939:web:5b7a1470c2ec20e3b597e6",
  measurementId: "G-C15EJGWM76"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById("app"));