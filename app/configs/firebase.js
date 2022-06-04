import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDtJHrEpsH9xA9x-4OY0TucsqngaBxEQVM",
    authDomain: "",
    projectId: "fooddeliveryproject-13a9d",
    storageBucket: "fooddeliveryproject-13a9d.appspot.com",
    messagingSenderId: "",
    appId: ""
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = app.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, timestamp }