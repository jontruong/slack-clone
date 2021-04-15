import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZfvG4N6Syj1I2fqL86qIWg-a4eciwujM",
    authDomain: "slack-clone-f040f.firebaseapp.com",
    projectId: "slack-clone-f040f",
    storageBucket: "slack-clone-f040f.appspot.com",
    messagingSenderId: "510780407683",
    appId: "1:510780407683:web:b2863e3c5b38fb514940b6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()

  export default db;