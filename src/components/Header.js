import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const[btnName,setBtnName] = useState("Login");

    return(
        <div className="flex justify-between">
            <div className="w-1/12">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNq4o5NsqQAlCzjjnH7KEiAKwEHNf-x1HzLg&s"></img>
            </div>
            <div className="bg-amber-200 flex items-center">
                <ul className="flex bg-fuchsia-300 text-2xl mx-3 gap-5 font-sans">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="border border-b-blue-400 bg-blue-200 rounded-2xl px-2 py-1 inline-flex items-center text-md font-semibold text-yellow-700" onClick={()=>{
                        btnName === "Login"?setBtnName("Logout"):setBtnName("Login");
                        
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;