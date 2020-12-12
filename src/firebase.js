import firebase from "firebase";
import 'firebase/firestore';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdK3M-GnY7daxliJATHW40EKy3wXgCPao",
    authDomain: "eelok-web.firebaseapp.com",
    projectId: "eelok-web",
    storageBucket: "eelok-web.appspot.com",
    messagingSenderId: "666114367051",
    appId: "1:666114367051:web:58f6f2de66dec71020f7ce"
})

let db = firebaseApp.firestore();

export {db};