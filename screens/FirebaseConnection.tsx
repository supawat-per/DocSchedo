import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBouhc3Gnhtc3fQXThMeEFcLtQzsufPi34",
  authDomain: "docschedo.firebaseapp.com",
  databaseURL: "https://docschedo.firebaseio.com/",
};

const FirebaseConnection = firebase.initializeApp(firebaseConfig);

export default FirebaseConnection;