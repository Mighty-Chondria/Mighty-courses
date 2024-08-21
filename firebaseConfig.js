// firebaseConfig.js
var firebaseConfig = {
    apiKey: "AIzaSyC_6NiT5uErNRaRvkTTM8E4gOkgGJgZJIA",
    authDomain: "mighty-chondria.firebaseapp.com",
    projectId: "mighty-chondria",
    storageBucket: "mighty-chondria.appspot.com",
    messagingSenderId: "529702754222",
    appId: "1:529702754222:web:672b1239ce1dcd65b7da3f",
    measurementId: "G-EQBWXQ8QJ2"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized");

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
console.log("Firebase Auth initialized");