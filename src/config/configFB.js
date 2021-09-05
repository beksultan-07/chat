import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6Ld9ArE4EOUAog2_3ZHGfI5IfrFfY2X0",
  authDomain: "chat-c2a88.firebaseapp.com",
  projectId: "chat-c2a88",
  storageBucket: "chat-c2a88.appspot.com",
  messagingSenderId: "381376304969",
  appId: "1:381376304969:web:22bea870410a8157a3ec98",
  measurementId: "G-J0506CHD9W"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

export default firebase