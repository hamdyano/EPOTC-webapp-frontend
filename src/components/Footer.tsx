

import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" bg-PrimaryColor text-ExtraDarkColor rounded-t-3xl mt-8 md:mt-0">
      <div className=" text-white flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div>
          <h1 className=" ml-6 font-semibold text-3xl pb-4 text-white">EPOTC</h1>
          <div className=" flex gap-5 ml-3">
            <FaFacebook
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
            <RiTwitterXLine
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
            <RiInstagramFill
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Shop</h1>
          <div className=" flex flex-col gap-2">
            <Link
              to="/"
              
        
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Products
            </Link>
            <Link
              to="/"
            
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Overview
            </Link>
            <Link
              to="/"
             
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Company</h1>
          <nav className=" flex flex-col gap-2">
            <Link
            to="/"
            
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              About us
            </Link>
            <Link
              to="/"
             
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Contact
            </Link>
            <Link
            to="/"
              
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              News
            </Link>
            <Link
              to="/"
              
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Support
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/">
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </Link>
          
            <Link to="/" >
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-white text-center py-4">
          @CopyRight 2024
          <span > </span> | All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

