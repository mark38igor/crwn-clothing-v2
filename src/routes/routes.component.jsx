import { Routes,Route} from "react-router-dom";
import Home from "../components/home/home.component";
import Navigation from "./navigation.component";
import SignIn from "../components/Account/account.component";

import Checkout from "../components/Checkout/checkout.component";
const Paths=()=>{
    return(
        <Routes>
        <Route path="/" element={<Navigation/>}>
            <Route path="/" index element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}>
                <Route path="/home/shop/*" element={<Home/>}></Route>
            </Route>
            <Route path="/account" element={<SignIn/>}></Route>
            {/* <Route path="/shop" element={<Shop/>}></Route> */}
            <Route path="/checkout" element={<Checkout/>}></Route>
        </Route>
            
        </Routes>
    )
}
export default Paths