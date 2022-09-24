import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,getAuth, onAuthStateChanged} from "firebase/auth";

import { useEffect,useState } from "react";

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLavRiJnG3IK3jxX2m8Z3iXrmb2gQsK1M",
  authDomain: "auth-afc69.firebaseapp.com",
  projectId: "auth-afc69",
  storageBucket: "auth-afc69.appspot.com",
  messagingSenderId: "894524443757",
  appId: "1:894524443757:web:11d8443e587f3280950364",
  measurementId: "G-R307TLZL4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth()

export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}

export function logout(){
    return signOut(auth)
}
export function useAuth(){
    const [currentUser,setCurrentUser]=useState()
    useEffect(()=>{
        const x=onAuthStateChanged(auth,user=>setCurrentUser(user))
        return x
    },[])
    return currentUser
}