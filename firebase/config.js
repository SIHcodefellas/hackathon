import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEuzpcGj6zxAKZo5fLYACtiY05348zoIA",

    authDomain: "sihhack-54f33.firebaseapp.com",

    projectId: "sihhack-54f33",

    storageBucket: "sihhack-54f33.appspot.com",

    messagingSenderId: "256487175752",

    appId: "1:256487175752:web:aea28d5d0654bb44408a7d",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
