import React from 'react';
import './style.css';

const BestSeller = () => {
    return (
        <React.Fragment>
            <div className="BestSeller-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="bestSeller-heading text-center">
                                <h3>Best Sellers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="products-navbar">
                                <div className="products-navInner">
                                    <ul>
                                        <li><a href="##">All Products</a></li>
                                        <li><a href="##">T-Shirt</a></li>
                                        <li><a href="##">Hoodies</a></li>
                                        <li><a href="##">Jacket</a></li>
                                        <li><a href="##">Shoes</a></li>
                                    </ul>
                                </div>
                                <div className="products-navInner">
                                    <div className="products-navInnerButton">
                                        <a href="##">Show All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="productsCard-inner ribbonHot">
                                <picture>
                                    <img src="./assets/product-1.png" alt="product" />
                                </picture>
                                <div className="productsCard-content">
                                    <h3>Basic Dress Green</h3>
                                    <div className="productsCard-contentInner">
                                        <h4>Dress</h4>
                                        <p><span>$406.06</span> $350.86</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="productsCard-inner ribbonSale">
                                <picture>
                                    <img src="./assets/product-2.png" alt="product" />
                                </picture>
                                <div className="productsCard-content">
                                    <h3>Nike Air Zoom Pegasus</h3>
                                    <div className="productsCard-contentInner">
                                        <h4>Dress</h4>
                                        <p><span>$206.06</span> $150.86</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="productsCard-inner ribbonHot">
                                <picture>
                                    <img src="./assets/product-3.png" alt="product" />
                                </picture>
                                <div className="productsCard-content">
                                    <h3>Nike Sportswear Futura Luxe</h3>
                                    <div className="productsCard-contentInner">
                                        <h4>Dress</h4>
                                        <p><span>$706.06</span> $450.86</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="productsCard-inner ribbonSale">
                                <picture>
                                    <img src="./assets/product-4.png" alt="product" />
                                </picture>
                                <div className="productsCard-content">
                                    <h3>Nike Repel Miler</h3>
                                    <div className="productsCard-contentInner">
                                        <h4>Dress</h4>
                                        <p><span>$206.6</span> $450.86</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BestSeller;