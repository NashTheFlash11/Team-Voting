import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBNRT_Iy0mHoyKqNiwXtxi6LVl-BpSXmI0",
    authDomain: "project-67-135ca.firebaseapp.com",
    projectId: "project-67-135ca",
    storageBucket: "project-67-135ca.appspot.com",
    messagingSenderId: "296080703506",
    appId: "1:296080703506:web:71ecb33558c87e25da18cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();