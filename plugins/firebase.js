/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTQ9_hT_kBQz23XY4YGZtfMZCqUjJJrzg",
  authDomain: "therosestudioweb.firebaseapp.com",
  projectId: "therosestudioweb",
  storageBucket: "therosestudioweb.appspot.com",
  messagingSenderId: "123804875913",
  appId: "1:123804875913:web:c2718f7faec5a10571da58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCTQ9_hT_kBQz23XY4YGZtfMZCqUjJJrzg",
    authDomain: "therosestudioweb.firebaseapp.com",
    databaseURL: 'https://therosestudioweb.firebaseio.com',
    projectId: "therosestudioweb",
    storageBucket: "therosestudioweb.appspot.com",
    messagingSenderId: "123804875913",
    appId: "1:123804875913:web:c2718f7faec5a10571da58"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db, firebase }

/*8

The syntax for Firebase has changed in v9, as everything is now modular/functional. You can now safely get an app with:

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
I highly recommend keeping Firebase's own documentation and this upgrade guide handy.

Alternatively, you can keep using the older syntax by using the compatibility mode of the newer SDKs, by importing from the compat path.

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; */