import { useState } from "react";

const Header = () => {
    const[btnName,setBtnName] = useState("Login");

    return(
        <div className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNq4o5NsqQAlCzjjnH7KEiAKwEHNf-x1HzLg&s"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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