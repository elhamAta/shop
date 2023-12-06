import React from "react";
import { NavLink,Link  } from "react-router-dom";
const Navbar = () =>{
    return(
        <nav>
            <ul className="menu">
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <Link to={"/product"} >products</Link>
                </li>
                <li>
                    <Link to={"/blog"} >Blog</Link>
                </li>
                <li>
                    <Link to={"/contact"} >Contact us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar