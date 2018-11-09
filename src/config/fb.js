import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBFe0-Z52_UQfVhJzm13RIenGEyfq53U48",
  authDomain: "mario-blog.firebaseapp.com",
  databaseURL: "https://mario-blog.firebaseio.com",
  projectId: "mario-blog",
  storageBucket: "mario-blog.appspot.com",
  messagingSenderId: "976265342499"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
