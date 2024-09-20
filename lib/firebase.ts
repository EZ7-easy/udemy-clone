import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
	apiKey: "AIzaSyAPiZTzJ68iKBUj3HW-jzp3kOtUypv8R_E",
	authDomain: "praktikum-bd256.firebaseapp.com",
	projectId: "praktikum-bd256",
	storageBucket: "praktikum-bd256.appspot.com",
	messagingSenderId: "630668059192",
	appId: "1:630668059192:web:1b878654c793c11bf7bccd"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export {storage}
