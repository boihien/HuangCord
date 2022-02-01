import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXZ-LN2M3Xw97VmyWYB4o0CTg5ud67F3c",
    authDomain: "discord-clone-69347.firebaseapp.com",
    projectId: "discord-clone-69347",
    storageBucket: "discord-clone-69347.appspot.com",
    messagingSenderId: "901114764573",
    appId: "1:901114764573:web:739cf6a7c60a9ac87055f4",
    measurementId: "G-CZ4V08C2EX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;