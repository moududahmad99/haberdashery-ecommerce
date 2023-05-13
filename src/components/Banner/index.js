import React from 'react'
import './style.css'
import { HiShoppingBag } from 'react-icons/hi';
const Banner = () => {
    return (
        <React.Fragment>
            {/* Banner Area Start */}
            <div id="banner-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="banner-inner">
                                <h3>Collections</h3>
                                <h5>you can explore ans shop many differnt collection from various barands here.</h5>
                                <div className="banner-innerButton">
                                    <i><HiShoppingBag/></i>
                                    <a href="##">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="banner-innerRight">
                                <picture>
                                    <img src="./assets/banner-tree.png" alt="banner-tree" />
                                </picture>
                            </div>
                            <div className="banner-innerLeft">
                                <picture>
                                    <img src="./assets/banner-tree-leaf.png" alt="banner-leaf" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Area End */}
        </React.Fragment>
    )
}

export default Banner;