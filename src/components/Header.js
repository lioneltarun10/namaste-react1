import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

   const [btnName,setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect called");
    
  },[btnName])


   const onlineStatus = useOnlineStatus()

   const {loggedInUser} = useContext(UserContext);
   console.log(loggedInUser);
   

//    console.log("Header rendered");

   // subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items)
   console.log(cartItems);
   

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
             <img className="w-32" src= {LOGO_URL} />
            </div>
            <div className="flex items-center">
               <ul className="flex p-4 m-4">
                   <li className="px-4">
                    Online Status : {onlineStatus?"✅":"🔴"}
                   </li>

                   <li className="px-4">
                    <Link to="/">Home</Link>
                   </li>
                   <li className="px-4">
                    <Link to="/about">About Us</Link>
                   </li>
                   <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                   </li>
                   <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                   </li>
                   <li className="px-4 font-bold text-xl">
                   <Link to="/cart">Cart({cartItems.length} items)</Link>
                   </li>
                   <button 
                   className="login" 
                   onClick={() => {
                    
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    
                    
                    
                    
                    } }>{btnName}</button>

                  <li className="font-bold px-4">{loggedInUser}</li>

               </ul>
            </div>
        </div>
    )
}

export default Header;