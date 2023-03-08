import {  useState } from "react";
import { createUserDocumentFromAuth, signUpWithEmailPassword } from "../../utils/firebase/firebase.utils";
import asyncHandle from "../../utils/common/asyncHandle";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Button from "../button/button.component";
import ErrorAlert from "../Alerts/error-handler.component";
const defaultFormFields ={
    displayName :"",
    email :"",
    password: "",
    confirmPassword :""
}

const SignUp =() =>{
    const [formFields,setFormFields] =useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}=formFields;
    const handleFormChange =(event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});

    }
    const handleSubmit =async (event)=>{
        event.preventDefault();
        if(password!=confirmPassword){
            alert("password didnt match")
            return;
        }

        const [error,response] = await  asyncHandle(signUpWithEmailPassword,email,password);
        console.log(typeof error,"Response type");
        
        if(error){
            console.log({error})   
            ErrorAlert("Something Went Wrong",error.message)
            // alert(`Error : ${error.message}`)
        }else{
            const {user}=response;
            await asyncHandle(createUserDocumentFromAuth,user,{displayName})
            setFormFields({
                displayName :"",
                email :"",
                password: "",
                confirmPassword :""
            })
        }
        
        
    }

    return(
        <div className="sign-up-container">
        <h2>Dont have an account?</h2>
        <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name"     required type="text"        name="displayName"      value={displayName}         onChange={handleFormChange} />
                <FormInput label="Email"            required type="email"       name="email"            value={email}               onChange={handleFormChange} />
                <FormInput label="Password"         required type="password"    name="password"         value={password}            onChange={handleFormChange} />
                <FormInput label="Confirm Password" required type="password"    name="confirmPassword"  value={confirmPassword}     onChange={handleFormChange} />

                {/* <button type="submit">Sign In</button> */}
                <Button type="submit" style_type="inverted">Sign In</Button>
            </form>
        </div>
    )
}
export default SignUp;