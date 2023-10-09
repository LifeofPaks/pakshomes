// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCj-WQ5yNRPdlkj67yQJI0xW-4flGd3__s",
    authDomain: "paks-homes.firebaseapp.com",
    projectId: "paks-homes",
    storageBucket: "paks-homes.appspot.com",
    messagingSenderId: "750861327427",
    appId: "1:750861327427:web:f95314542471d9ed5d88f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);