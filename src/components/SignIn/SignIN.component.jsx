import {  useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGooglePopUp,signInWithEmailPassword } from "../../utils/firebase/firebase.utils";
import './sign-in.styles.scss'
import asyncHandle from "../../utils/common/asyncHandle";
import ErrorAlert from "../Alerts/error-handler.component";

const defaultFormFields ={
    email :"",
    password: "",
}

const SignIn =() =>{

    const handleSubmit =async(event)=>{
        event.preventDefault();
        const [error,response]=await asyncHandle(signInWithEmailPassword,email,password);
        if(error){
           const  error_codes={
                "auth/user-not-found":"Please Sign Up First with your credentails.",
                "auth/wrong-password":"Invalid password"

            }
            let message =error_codes[error.error.code]?error_codes[error.error.code]:"Try again Later"
            let title ="Something went wrong!!";
            ErrorAlert("error",title,message)

           
        }
        setFormFields({
            email :"",
            password: "",
        })
        
    }
    const [formFields,setFormFields] =useState(defaultFormFields);
    const {email,password}=formFields;
    const handleFormChange =(event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});

    }

    const logUser =async ()=>{
        try {
            await signInWithGooglePopUp();
        } catch (error) {
         console.log(error)
        }
         
    }
    return(
    
    <>
     
        <div className="sign-up-container">
        <h2>Already have an account</h2>
        <span>Sign In with email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput label="Email"            required type="email"       name="email"            value={email}               onChange={handleFormChange} />
                <FormInput label="Password"         required type="password"    name="password"         value={password}            onChange={handleFormChange} />

                {/* <button type="submit">Sign In</button> */}
                <div className="buttons-container">
                    <Button type="submit" style_type="inverted">Sign In</Button>
                    <Button type="button" onClick={logUser} style_type="google">Google Sign In</Button>
                </div>
                
            </form>
        </div>
        
    </>
    
    )
}
export default SignIn;