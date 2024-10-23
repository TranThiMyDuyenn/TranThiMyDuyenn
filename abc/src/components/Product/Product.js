// src/components/Product.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

const Product = ({ product }) => {
    return (
        <div className={styles.productItem}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className={styles.price}>
                <span className={styles.currentPrice}>${product.price}</span>
                {product.originalPrice && (
                    <span className={styles.oldPrice}>${product.originalPrice}</span>
                )}
            </div>
            <Link to={`/product-detail`} state={{ product }}>
                <button>Thêm vào giỏ hàng</button>
                <button>Chi tiết sản phẩm</button>
            </Link>
        </div>
    );
};

export default Product;
