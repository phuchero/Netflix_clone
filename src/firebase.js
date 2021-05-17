import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCb7Jqra4sGZua3Cd2x__3-zMtsyJRNLug",
  authDomain: "netflix-clone-1d650.firebaseapp.com",
  projectId: "netflix-clone-1d650",
  storageBucket: "netflix-clone-1d650.appspot.com",
  messagingSenderId: "521191262573",
  appId: "1:521191262573:web:15fb2b9355ec900dccf264"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;