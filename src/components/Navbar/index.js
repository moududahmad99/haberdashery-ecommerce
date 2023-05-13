import React from "react";
import './style.css'
import { IoSearchOutline } from 'react-icons/io5';
import { RiUserFill } from 'react-icons/ri';
import { HiShoppingBag } from 'react-icons/hi';


const Navbar = () => {
    return (
        <React.Fragment>
            {/* Navbar Area Start */}
            <div className="navbar-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="navbar-innerLeft">
                                <i><IoSearchOutline /></i>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="navbar-innerMiddle">
                                <picture>
                                    <img src="./assets/logo-after.png" alt="logo-after" />
                                </picture>
                                <h3>Haberdashery</h3>
                                <picture>
                                    <img src="./assets/logo-after.png" alt="logo-after" />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="navbar-innerRight">
                                <i><RiUserFill /></i>
                                <h4>Account</h4>
                                <i><HiShoppingBag /></i>
                                <h4>Shopping</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="navbar-links">
                            <div className="col-lg-12">
                                <ul>
                                    <li><a href="##">Jewelry & Accessories</a></li>
                                    <li><a href="##">Clothing & Shoes</a></li>
                                    <li><a href="##">Home & Living</a></li>
                                    <li><a href="##">Wedding & Party</a></li>
                                    <li><a href="##">Toys & Entertainment</a></li>
                                    <li><a href="##">Art & Collectibles</a></li>
                                    <li><a href="##">Craft Supplies & Tools</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar Area End */}
        </React.Fragment>
    );
};

export default Navbar;
