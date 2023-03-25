import { createContext, useEffect, useState } from "react";
import asyncHandle from "../utils/common/asyncHandle";
import { authenticationListener ,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";

import ErrorAlert from "../components/Alerts/error-handler.component";
// actual object to use 
export const UserContext = createContext({
    setCurrentUser :()=>null,
    currentUser :null
})

// wrapper component that passes the UserContext object to the child components which can be later consumed through useContext method which returns the value property of this component
export const UserProvider=  ({children})=>{
    console.log("User Provider")
    const [currentUser,setCurrentUser]=useState(null)
    const value ={currentUser,setCurrentUser};
    useEffect(()=>{
        authenticationListener(async (user)=>{
            console.log("Auth Listener")
            setCurrentUser(user)
            if(user){
                console.log("User",user)
              const {error,response}= await asyncHandle(createUserDocumentFromAuth,user)
              if(error){
                ErrorAlert("error","Something Went wrong!","Failed to create user")
              }
            }
        })
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}