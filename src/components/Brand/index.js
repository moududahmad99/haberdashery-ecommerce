import React from 'react'
import './style.css'

const Brand = () => {
    return (
        <React.Fragment>
            <div id="brand-wrapper">
                <div className="container">
                    <div className="row">
                    <div className="brand-inner">

                        <div className="col-lg-2">
                            <picture>
                                <img src="./assets/brand-1.png" alt="brand" />
                            </picture>
                        </div>
                        <div className="col-lg-2">
                            <picture>
                                <img src="./assets/brand-2.png" alt="brand" />
                            </picture>
                        </div>
                        <div className="col-lg-2">
                            <picture>
                                <img src="./assets/brand-3.png" alt="brand" />
                            </picture>
                        </div>
                        <div className="col-lg-2">
                            <picture>
                                <img src="./assets/brand-4.png" alt="brand" />
                            </picture>
                        </div>
                        <div className="col-lg-2">
                            <picture>
                                <img src="./assets/brand-5.png" alt="brand" />
                            </picture>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Brand;