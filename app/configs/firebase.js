
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA5goEWWiEqdKNFKRF7jGRu-WZQYSBOE_g",
    authDomain: "flickingeat.firebaseapp.com",
    projectId: "flickingeat",
    storageBucket: "flickingeat.appspot.com",
    messagingSenderId: "188673466803",
    appId: "1:188673466803:web:c0efc311ba570800f42bc6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase()

export { auth, db }