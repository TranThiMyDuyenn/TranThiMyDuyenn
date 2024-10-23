import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const location = useLocation();
    const { product } = location.state;

    return (
        <div className="productDetail">
            <h1 className="productName">{product.name}</h1>
            <img className="productImage" src={product.image} alt={product.name} />
            <div className="productInfo">
                <p className="productDescription">{product.description}</p>
                <div className="productPrice">
                    <span className="currentPrice">${product.price}</span>
                    <span className="oldPrice">${product.originalPrice}</span>
                </div>
                <button className="addToCartButton">Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
};

export default ProductDetail;
