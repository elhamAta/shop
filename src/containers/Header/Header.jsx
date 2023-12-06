import React,{useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import { BiCart } from "react-icons/bi";
import Logo from "../../assets/images/logo.png";
import Image from "../../components/Image/Image";
import CartContext from "../../contexts/CartContext";

const Header = () => {
    const {carts} = useContext(CartContext);
    //console.log("carts:",carts)
    return(
        <header>
            <div className="top--header">
                <div  className="container">
                    <ul  className="login">
                        <li>
                            <Link to='/'>Sign in</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                    
                    <ul className="list">
                        <li>
                            <Link to={"/"}>
                                <BiCart />
                                <span className="basket">{carts.length}</span>
                            </Link>
                            
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="middle--header">
                <div className="container">
                    <Image ImgSrc={Logo} />
                </div>
            </div>
            <div className="container">
                <Navbar />
            </div>      
        </header>
    )
}

export default Header