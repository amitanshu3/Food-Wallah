



/*import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <footer className=" bg-pink-100 shadow-lg text-gray-300 p-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Food Wallah</p>
          <p className="text-sm mb-4">Made with ❤️ by Amitanshu</p>
          <div className="flex justify-center space-x-4">
          <li className="px-4 font-bold  text-lg"><Link to="/">Home</Link></li>
            <li className="px-4 font-bold text-lg "><Link to="/about">About</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/contact">Contact</Link></li>
            
          </div>
          <p className="text-sm mt-4">&copy; 2024 Food Wallah. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;*/

  import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-pink-100 shadow-lg text-black p-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Food Wallah</p>
        <p className="text-sm mb-4">Made with ❤️ by Amitanshu</p>
        <div className="flex justify-center space-x-4">
          <div className="px-4 font-bold text-lg"><Link to="/">Home</Link></div>
          <div className="px-4 font-bold text-lg"><Link to="/about">About</Link></div>
          <div className="px-4 font-bold text-lg"><Link to="/contact">Contact</Link></div>
        </div>
        <p className="text-sm mt-4">&copy; 2024 Food Wallah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


/*
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-pink-100 p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          Food Wallah by Amitanshu &copy; {new Date().getFullYear()}
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

*/