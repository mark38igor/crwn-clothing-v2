// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey            : process.env.REACT_APP_apiKey           ,
    authDomain        : process.env.REACT_APP_authDomain       ,
    projectId         : process.env.REACT_APP_projectId        ,
    storageBucket     : process.env.REACT_APP_storageBucket    ,
    messagingSenderId : process.env.REACT_APP_messagingSenderId,
    appId             : process.env.REACT_APP_appId            ,
    measurementId     : process.env.REACT_APP_measurementId    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

const auth =getAuth();

export const signInWithGooglePopUp =()=> signInWithPopup(auth,provider);

export const db =getFirestore();

export const createUserDocumentFromAuth =async (userAuth,additionalInfo={})=>{

    console.log("User",userAuth)
    const userDocRef =doc(db,"users",userAuth.uid);
    const userSnapshot =await getDoc(userDocRef);
    const createdAt = new Date().toISOString();

    if(!userSnapshot.exists()){
        const {displayName,email,photoURL}=userAuth;
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
                console.log("error while creating user during sign in");
        }

    }
return userDocRef;
}
// verify user  through email password sign up 
export const signUpWithEmailPassword =async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}
// verified user through signup email password , logs in with email and password
export const signInWithEmailPassword =async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}

// sign out user
export const signOutUser =async()=>{
    return await signOut(auth);
}

// listens to whenver authentication state changes
export const authenticationListener =(callback)=>{
  return  onAuthStateChanged(auth,callback)
}