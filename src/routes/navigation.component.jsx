import { Link, Outlet } from "react-router-dom";
import { ReactComponent as  CrwnLogo} from "../assets/crown.svg";
import './navigation.styles.scss';

import { UserContext } from "../contexts/user.contexts";
import { useContext } from "react";
import { signOutUser } from "../utils/firebase/firebase.utils";

const Navigation=()=>{
    let {currentUser} =useContext(UserContext)

    return(
        
        <div>
        {console.log("Navigation",currentUser)}
            <div>
            <div className="navigation">
                <Link className="log-container" to="/"> 
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser? 
                        (
                            <a href="#" className="nav-link" onClick={signOutUser} >SIGN OUT</a>

                        ):
                        (
                            <Link className="nav-link" to="/account">SIGN IN</Link>
                        )
                    }
                </div>
            </div>
                {console.log("Navigation header")}
            </div>
            <Outlet></Outlet>
        </div>
    )
}
export default Navigation;