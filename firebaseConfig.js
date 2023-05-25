// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAEJFt0iPpcFS9xlIVAHUTaf5wM3q2P6Iw",
	authDomain: "test-firebase-wyk-01.firebaseapp.com",
	projectId: "test-firebase-wyk-01",
	storageBucket: "test-firebase-wyk-01.appspot.com",
	messagingSenderId: "157705714977",
	appId: "1:157705714977:web:5a6d1b674fbaf099b05260",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);