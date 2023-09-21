import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTlZONsgt3TbTsuhGeDoCBv59xjQvrgIY",
  authDomain: "cloud-84a4b.firebaseapp.com",
  projectId: "cloud-84a4b",
  storageBucket: "cloud-84a4b.appspot.com",
  messagingSenderId: "192036857590",
  appId: "1:192036857590:web:588bc954f19a5834812ed7"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebaseAuth.initializeAuth(app)
firebaseAuth.signInWithEmailAndPassword(
  auth, 'lcmschoolinfotech@gmail.com', '1234'
).then(user => console.log(user))
.catch(error => console.log('error', error))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
