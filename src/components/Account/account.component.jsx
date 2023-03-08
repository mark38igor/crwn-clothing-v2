import SignUp from "../SignUp/sign-up.component";
import SignIn from "../SignIn/SignIN.component";
import './account.styles.css'
const Account =() =>{
    
   

    return(
        
    <div className="account-container">
        {/* <button onClick={logUser}>Sign In with Google</button> */}
        
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>)
}
export default Account;