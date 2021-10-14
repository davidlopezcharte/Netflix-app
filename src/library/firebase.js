import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA394nL-Kfory81G1gmtwxFMyRIZOjagA0',
  authDomain: 'netflix-app-c36e5.firebaseapp.com',
  projectId: 'netflix-app-c36e5',
  storageBucket: 'netflix-app-c36e5.appspot.com',
  messagingSenderId: '192650458731',
  appId: '1:192650458731:web:3117d6b1128963cfde632e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
