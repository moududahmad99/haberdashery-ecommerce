import React from 'react'
import './style.css'

const HotCategory = () => {
    return (
        <React.Fragment>
            <div id="hotCategory-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hotCategoryLeft">
                                <div className="rotate-text">
                                    <h3>Explore new and popular styles</h3>
                                </div>
                                <picture>
                                    <img src="./assets/hotCategoryLeft.png" alt="Hot Category" />
                                </picture>
                                <div className="hotCategoryBottom">
                                    <h4>Manto</h4>
                                    <h4>86 Products</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="hotCategoryRight">
                                <div className="hotCategoryRightInner">
                                    <picture>
                                        <img src="./assets/hotCategoryRightInner1.png" alt="hotCategory" />
                                    </picture>
                                    <picture>
                                        <img src="./assets/hotCategoryRightInner3.png" alt="hotCategory" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="hotCategoryRight">
                                <div className="hotCategoryRightInner">
                                    <picture>
                                        <img src="./assets/hotCategoryRightInner3.png" alt="hotCategory" />
                                    </picture>
                                    <picture>
                                        <img src="./assets/hotCategoryRightInner1.png" alt="hotCategory" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HotCategory;