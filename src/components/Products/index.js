import React from 'react';
import './style.css';
import { VscFilterFilled } from 'react-icons/vsc';

const Products = () => {
    return (
        <React.Fragment>
            <div className="products-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="products-newsletter text-center">
                                <h3>Subscribe to the newsletter</h3>
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
                                        <i><VscFilterFilled /></i>
                                        <a href="##">Filter</a>
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
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="productsCard-inner">
                                <picture>
                                    <img src="./assets/product-5.png" alt="product" />
                                </picture>
                                <div className="productsCard-content">
                                    <h3>Geometric print Scarf</h3>
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
                                    <img src="./assets/product-6.png" alt="product" />
                                </picture>
                                <div className="productsCard-content">
                                    <h3>Nike Repel Miler</h3>
                                    <div className="productsCard-contentInner">
                                        <h4>Dress</h4>
                                        <p><span>$346.00</span> $180.86</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="productsCard-inner">
                                <picture>
                                    <img src="./assets/product-7.png" alt="product" />
                                </picture>
                                <div className="productsCard-content">
                                    <h3>Yellow Reserved Hoodie</h3>
                                    <div className="productsCard-contentInner">
                                        <h4>Dress</h4>
                                        <p><span>$1046.00</span> $780.86</p>
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
                                    <h3>Basic Dress Green</h3>
                                    <div className="productsCard-contentInner">
                                        <h4>Dress</h4>
                                        <p><span>$346.00</span> $180.86</p>
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

export default Products