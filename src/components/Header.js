import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-header.png";

const Header = () => {
    const[btnName,setBtnName] = useState("LOGIN");
    console.log(logo);


    return(
        <div className="flex justify-between">
            <div className="w-1/6">
                <img src={logo} alt="Header Logo"></img>
            </div>
            <div className=" flex items-center w-3/6">
                <ul className="flex text-2xl mx-3 gap-16 font-sans text-font-color">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="border border-b-blue-400 bg-font rounded-2xl px-2 py-1 inline-flex items-center text-md text-white" onClick={()=>{
                        btnName === "LOGIN"?setBtnName("LOGOUT"):setBtnName("LOGIN");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;