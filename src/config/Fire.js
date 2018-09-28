import firebase from 'firebase';

 const config = {
     apiKey: "AIzaSyCN1UF0C5hUATISKWnfrVf4mIgrM4QBt08",
     authDomain: "happy-dog-3240a.firebaseapp.com",
     databaseURL: "https://happy-dog-3240a.firebaseio.com",
     projectId: "happy-dog-3240a",
     storageBucket: "happy-dog-3240a.appspot.com",
     messagingSenderId: "972072466132"
 };
 const fire = firebase.initializeApp(config);
 export default fire;