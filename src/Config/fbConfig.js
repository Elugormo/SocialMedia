import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBiZZQxRwwqb4n3_sIzPDZwtuZnn8WofQc",
    authDomain: "react-reduxblog.firebaseapp.com",
    databaseURL: "https://react-reduxblog.firebaseio.com",
    projectId: "react-reduxblog",
    storageBucket: "",
    messagingSenderId: "1069583531438",
    appId: "1:1069583531438:web:875cdb39ce1ff1ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;