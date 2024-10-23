import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext'; // Import CartContext
import styles from './Home.module.css';

const Home = () => {
    const { addToCart } = useContext(CartContext); // Lấy hàm addToCart từ context

    const products = [
        {
            id: 1,
            name: "Bananas",
            price: 1.99,
            originalPrice: 2.99,
            image: "https://via.placeholder.com/150",
            sku: "SKU001",
            description: "Viverra vitae ante vel, viverra vitae ante vel, viverra vitae ante vel.",
            discount: 56,
        },
        {
            id: 2,
            name: "Product 2",
            price: 25.00,
            originalPrice: 35.00,
            image: "https://via.placeholder.com/150",
        },
    ];

    const handleAddToCart = (product) => {
        addToCart(product); // Gọi hàm addToCart
        // Chuyển hướng tới trang giỏ hàng
        window.location.href = '/cart'; // Điều hướng tới giỏ hàng
    };

    return (
        <div className={styles.container}>           
            <div className={styles.mainContainer}>
                {/* Sidebar Filters */}
                <aside className={styles.sidebar}>
                    <h3>Tất cả danh mục</h3>
                    <ul>
                        <li><a href="#">Trái cây và rau củ</a></li>
                        <li><a href="#">Máy tính & Laptop</a></li>
                        <li><a href="#">Đồng hồ</a></li>
                        <li><a href="#">Thể thao</a></li>
                        <li><a href="#">Phụ kiện, trang sức</a></li>
                        <li><a href="#">Thời trang nam</a></li>
                        <li><a href="#">Thời trang nữ</a></li> 
                        <li><a href="#">Đồ chơi trẻ em</a></li>
                        <li><a href="#">Thú cưng</a></li>
                        <li><a href="#">Dọn dẹp</a></li> 
                    </ul>
                </aside>

                {/* Main Shop Section */}
                <section className={styles.shopSection}>
                    <div className={styles.banner}></div>
                </section>
            </div>
            <section className={styles.shopSection}>
                {/* Product Grid for "Hàng mới về" */}
                <div className={styles.productSection}>
                    <h2>Hàng mới về</h2>
                    <div className={styles.productGrid}>
                        {products.map(product => (
                            <div className={styles.productItem} key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <div className={styles.price}>
                                    <span className={styles.currentPrice}>${product.price}</span>
                                    <span className={styles.oldPrice}>${product.originalPrice}</span>
                                </div>
                                <button onClick={() => handleAddToCart(product)}>thêm vào giỏ hàng</button>
                                <Link to={`/product-detail`} state={{ product }}>
                                    <button>chi tiết sản phẩm</button>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
