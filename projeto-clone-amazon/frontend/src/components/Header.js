import React from "react";
import SearchIcon from "@mui/icons-material/Search"; // Importação corrigida
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; // Importação corrigida
import { Link } from "react-router-dom";
import "../components/Header.css";

/*import useStateValue  from "../src/StateProvider";*/


const Header = () =>{
    //const [{basket}, dispatch] = useStateValue();

    return (
        //Logo Amazon
        <div className="header">
            <Link to="/"> 
                <img src="./amazon-logo-main.png" className="header-logo"  alt="Amazon Logo"></img>
            </Link>
       
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">
                <div className="header-option-one">
                    <span className="header-option-one">Hello, Lucas</span>
                    <span className="header-option-two">Sign In</span>
                </div>
            </div>

            <div className="header-option">
                <span className="header-option-one">Returns</span>
                <span className="header-option-two">& Orders</span>
            </div>

            <div className="header-option">
                <span className="header-option-one">Your</span>
                <span className="header-option-two">Prime</span>
            </div>

            <Link to="/checkout" className="link">
                <div className="header-obtion-basket">
                    <ShoppingCartOutlinedIcon className="header-basket-icon" />
                    <span className="header-option-two header-basket-cout"></span> 
                </div>
            </Link>

        </div>
    )
}
export default Header;
