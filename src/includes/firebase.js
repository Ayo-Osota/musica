import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAJXQ4svPUIQCDb9HIlFECL8gs5ntbLHxs",
    authDomain: "musica-fbee8.firebaseapp.com",
    projectId: "musica-fbee8",
    storageBucket: "musica-fbee8.firebasestorage.app",
    messagingSenderId: "95888699873",
    appId: "1:95888699873:web:e5c1b12c6cab2d3de822a0"
};

export default firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
    console.log('error', error.code);
})

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
    auth,
    db,
    storage,
    usersCollection,
    songsCollection,
    commentsCollection
}