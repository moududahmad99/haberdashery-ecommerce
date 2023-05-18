import React from 'react'
import './style.css'

import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { RiLinkedinFill } from 'react-icons/ri'
import { RxInstagramLogo } from 'react-icons/rx'
import { AiOutlineCopyright } from 'react-icons/ai'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
    return (
        <React.Fragment>
            <div id='footer-wrapper'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="topFooter-inner">
                                <div className="topFooterInner-logo">
                                    <picture>
                                        <img src="./assets/logo-after.png" alt="Footer-Logo" />
                                    </picture>
                                    <h4>Haberdashery</h4>
                                    <picture>
                                        <img src="./assets/logo-after.png" alt="Footer-Logo" />
                                    </picture>
                                </div>
                                <h3>Lorem ipsum dolor sit amet, sit consectetur adipiscing
                                    elit, sed do eiusmod do eiusmod temportempor incididunt ut labore et dolore magna
                                </h3>
                                <div className="topFooter-social">
                                    <i><FaFacebookF /></i>
                                    <i><BsTwitter /></i>
                                    <i><RiLinkedinFill /></i>
                                    <i><RxInstagramLogo /></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="topFooter-Catalog">
                                <h5>Catalog</h5>
                                <i>Necklaces</i>
                                <i>Hoodies</i>
                                <i>Jewelry Box</i>
                                <i>T-Shirt</i>
                                <i>Jacket</i>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="topFooter-about">
                                <h5>About Us</h5>
                                <i>Our Products</i>
                                <i>Site Map</i>
                                <i>FAQ</i>
                                <i>About Us</i>
                                <i>Terms & Conditions</i>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="topFooter-services">
                                <h5>Customer Services</h5>
                                <i>Contact Us</i>
                                <i>Track Your Order</i>
                                <i>Product Care & Repair</i>
                                <i>Book An Appoinment</i>
                                <i>Shipping & Returns</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomFooter-wrapper">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="bottomFooter-inner">
                                <i><AiOutlineCopyright /></i>
                                <h4>2023 Haberdashery, Inc</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <picture>
                                <img src="./assets/bottom-footer.png" alt="Bottom-Footer" />
                            </picture>
                        </div>
                        <div className="col-lg-4">
                            <div className="bottomFooter-button text-end">
                                {/* eslint-disable-next-line */}
                                <a href="#">Back To Top <i><AiOutlineArrowUp /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;