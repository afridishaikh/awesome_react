import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCbgkryY4NTwjEy-sVw7wEe3x_aZQO3kfY",
  authDomain: "captionking-6a79e.firebaseapp.com",
  databaseURL: "https://captionking-6a79e.firebaseio.com",
  projectId: "captionking-6a79e",
  storageBucket: "captionking-6a79e.appspot.com",
  messagingSenderId: "132615476262",
  appId: "1:132615476262:web:8d576e4e81af94c764c2e7",
  measurementId: "G-BC9WGHRHWN"
};
const Firebase = firebase.initializeApp(config);
export default Firebase;