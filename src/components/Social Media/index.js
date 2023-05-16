import React from 'react'
import './style.css'
import { AiOutlineInstagram } from 'react-icons/ai';

const SocialMedia = () => {
    return (
        <React.Fragment>
            <div className="socialMedia-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="socialMedia-heading">
                                <h3>Follow products and discounts on Instagram</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-lg-2">
                            <div className="socialMedia-post">
                                <picture>
                                    <img src="./assets/instagram2.png" alt="social-media" />
                                    <div className="socialMedia-postInner">
                                        <picture>
                                            <i><AiOutlineInstagram /></i>
                                        </picture>
                                    </div>
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="socialMedia-post">
                                <picture>
                                    <img src="./assets/instagram3.png" alt="social-media" />
                                    <div className="socialMedia-postInner">
                                        <picture>
                                            <i><AiOutlineInstagram /></i>
                                        </picture>
                                    </div>
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="socialMedia-post">
                                <picture>
                                    <img src="./assets/instagram4.png" alt="social-media" />
                                    <div className="socialMedia-postInner">
                                        <picture>
                                            <i><AiOutlineInstagram /></i>
                                        </picture>
                                    </div>
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="socialMedia-post">
                                <picture>
                                    <img src="./assets/instagram5.png" alt="social-media" />
                                    <div className="socialMedia-postInner">
                                        <picture>
                                            <i><AiOutlineInstagram /></i>
                                        </picture>
                                    </div>
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="socialMedia-post">
                                <picture>
                                    <img src="./assets/instagram1.png" alt="social-media" />
                                    <div className="socialMedia-postInner">
                                        <picture>
                                            <i><AiOutlineInstagram /></i>
                                        </picture>
                                    </div>
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="socialMedia-post">
                                <picture>
                                    <img src="./assets/instagram5.png" alt="social-media" />
                                    <div className="socialMedia-postInner">
                                        <picture>
                                            <i><AiOutlineInstagram /></i>
                                        </picture>
                                    </div>
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="instaNewsletter text-center">
                                <h3>Or subscribe to the newsletter</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="newsletter-input my-4 d-flex justify-content-center">
                                <input type="email" placeholder='Email Address . . .'/>
                                <a href="##">Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SocialMedia