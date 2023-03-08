import { Routes,Route} from "react-router-dom";
import Home from "../components/home/home.component";
import Navigation from "./navigation.component";
import SignIn from "../components/Account/account.component";
import Shop from "../components/shop/shop.component";
const Paths=()=>{
    return(
        <Routes>
        <Route path="/" element={<Navigation/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/account" element={<SignIn/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
        </Route>
            
        </Routes>
    )
}
export default Paths