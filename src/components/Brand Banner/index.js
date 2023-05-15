import React from 'react'
import './style.css'

const BrandBanner = () => {
    return (
        <React.Fragment>
            <div className="brandBanner-wrapper">
                <picture className='zara-absolute'>
                    <img src="./assets/Zara-absolute.png" alt="brand" />
                </picture>
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-lg-4">
                            <div className="brandBanner-innerLeft">
                                <picture>
                                    <img src="./assets/check-brandleft.png" alt="brand" />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="brandBanner-innerRight">
                                <picture>
                                    <img src="./assets/Zara_Logo.png" alt="brand" />
                                </picture>
                                <h3>Lustrous yet understated. The new evening
                                    wear collection exclusively offered at the
                                    reopened Giorgio Armani boutique in Los
                                    Angeles.
                                </h3>
                                <a href="##">See Collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BrandBanner