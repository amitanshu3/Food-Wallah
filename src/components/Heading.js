
/*import { lazy, useState } from "react";
import {logourl} from "../Util/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice";
import logoImage from './logo.png';

const Heading=()=>{
  console.log("hello duniya")
  const cartItems=useSelector((store)=>store.cart.items);
  const[oldbtn,newbtn]=useState("Login");

  function changename(){
    if(oldbtn==="Login")
    {
      console.log(oldbtn)
      newbtn("Logout")
      
    }
    else{
      newbtn("Login")
    }
  }

  const status=useOnlineStatus();

  
    return(
    <div className="flex  justify-between bg-pink-100 shadow-lg h-20 ">
      <div className='logo-container'>
      <img className="w-21 h-20" src={logoImage} alt="sorry image is not rendering" />
      </div> 

      <div className='flex items-center'>
        <ul className="flex p-4 m-4">
           <li className="px-4 font-bold text-lg">online status:{status?"✅":"🔴"}</li>
            <li className="px-4 font-bold  text-lg"><Link to="/">Home</Link></li>
            <li className="px-4 font-bold text-lg "><Link to="/about">About</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/contact">Contact</Link></li>
            <li className="px-4 font-bold text-lg" ><Link to="/cart">Cart 🛒 - ({cartItems.length} items)</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/grocery">Grocery</Link></li>
            {console.log(oldbtn)} 
           <button className="logbtn font-bold text-lg" onClick={changename} >{oldbtn}</button>
        </ul>
      </div>
    </div>
    )
}

export default Heading;
*/
//This is responsive heading -
/*import { lazy, useState } from "react";
import { logourl } from "../Util/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice";
import logoImage from "./logo.png";

const Heading = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [oldbtn, newbtn] = useState("Login");

  function changename() {
    if (oldbtn === "Login") {
      newbtn("Logout");
    } else {
      newbtn("Login");
    }
  }

  const status = useOnlineStatus();

  return (
    <div className="flex flex-col md:flex-row justify-between bg-pink-100 shadow-lg md:h-20">
      <div className="logo-container">
        <img className="w-21 h-20" src={logoImage} alt="sorry image is not rendering" />
      </div>

      <div className="flex items-center md:ml-4">
        <ul className="flex p-2 md:p-4">
          <li className="px-2 md:px-4 font-bold text-lg">online status: {status ? "✅" : "🔴"}</li>
          <li className="px-2 md:px-4 font-bold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 md:px-4 font-bold text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 md:px-4 font-bold text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 md:px-4 font-bold text-lg">
            <Link to="/cart">Cart 🛒 - ({cartItems.length} items)</Link>
          </li>
         { /*<li className="px-2 md:px-4 font-bold text-lg">
            <Link to="/grocery">Grocery</Link>
  </li>}
          <button className="logbtn font-bold text-lg" onClick={changename}>
            {oldbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;  */
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useSelector } from "react-redux";
import logoImage from "./logo.png";

const Heading = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [oldbtn, newbtn] = useState("Login");

  function changename() {
    if (oldbtn === "Login") {
      newbtn("Logout");
    } else {
      newbtn("Login");
    }
  }

  const status = useOnlineStatus();

  return (
    <div className="flex flex-col md:flex-row justify-between bg-pink-100 shadow-lg md:h-20">
      <div className="logo-container">
      <Link to="/"><img className="w-21 h-20" src={logoImage} alt="sorry image is not rendering" /></Link> 
      </div>

      <div className="flex items-center md:ml-4">
        <ul className="flex flex-col md:flex-row p-2 md:p-4">
          <li className="mb-2 md:mb-0 md:px-4 font-bold text-lg">online status: {status ? "✅" : "🔴"}</li>
          <li className="mb-2 md:mb-0 md:px-4 font-bold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="mb-2 md:mb-0 md:px-4 font-bold text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="mb-2 md:mb-0 md:px-4 font-bold text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mb-2 md:mb-0 md:px-4 font-bold text-lg">
            <Link to="/cart">Cart 🛒 - ({cartItems.length} items)</Link>
          </li>
          {/* Commented out for responsiveness
          <li className="mb-2 md:mb-0 md:px-4 font-bold text-lg">
            <Link to="/grocery">Grocery</Link>
          </li> */}
       <button
  className="logbtn md:ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-md transition duration-300"
  onClick={changename}
>
  {oldbtn}
</button>


        </ul>
      </div>
    </div>
  );
};

export default Heading;




