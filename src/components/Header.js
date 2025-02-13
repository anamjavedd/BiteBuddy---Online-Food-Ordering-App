import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const[btnName,setBtnName] = useState("Login");

    return(
        <div className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNq4o5NsqQAlCzjjnH7KEiAKwEHNf-x1HzLg&s"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        btnName === "Login"?setBtnName("Logout"):setBtnName("Login");
                        
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;