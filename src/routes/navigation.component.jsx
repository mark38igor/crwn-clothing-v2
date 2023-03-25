import { Link, Outlet } from "react-router-dom";
import { ReactComponent as  CrwnLogo} from "../assets/crown.svg";
import './navigation.styles.scss';

import { UserContext } from "../contexts/user.contexts";
import { useContext, useEffect, useState } from "react";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartIcon from "../components/Cart Icon/cart-icon.component";
import CartDropdown from "../components/Cart Dropdown/cart-dropdown.component";
import { CartContext } from "../contexts/cart.context";

const Navigation=()=>{
    let {currentUser} =useContext(UserContext)
    let {isCartOpen}=useContext(CartContext)
    return(
        
        <div>
        {console.log("Navigation",currentUser)}
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
                    <CartIcon></CartIcon>
                </div>
            </div>
            {isCartOpen && <CartDropdown></CartDropdown>}
                {console.log("Navigation header")}
            <Outlet></Outlet>
        </div>
    )
}
export default Navigation;