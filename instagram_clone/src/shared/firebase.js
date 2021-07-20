import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChtpiq2nvZZSqXuoMVp83nreTGGr5HTn0",
    authDomain: "insta-clone-8ebfd.firebaseapp.com",
    projectId: "insta-clone-8ebfd",
    storageBucket: "insta-clone-8ebfd.appspot.com",
    messagingSenderId: "625512241620",
    appId: "1:625512241620:web:9d30cdc83ae2ab082b1e41",
    measurementId: "G-L9X14FBKYC"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };