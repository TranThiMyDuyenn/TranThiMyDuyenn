import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <header className={styles.header}>
            <div className={styles.promoHeader}>
                <div className={styles.promoMessage}>Về Chúng Tôi</div>
                <div className={styles.promoMessage}>Tài Khoản Của Tôi</div>
                <div className={styles.promoMessage}>Danh Sách Mong Muốn</div>
                <div className={styles.promoMessage}>Trở Thành Người Bán</div>
                <div className={styles.promoMessage}>Hỗ Trợ</div>
            </div>
            <div className={styles.topBar}>
                <div className={styles.logo}>
                    <img src='../img/logo192.jpg' alt="ADSmart" />
                </div>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Tìm kiếm sản phẩm" />
                    <button className={styles.searchButton}>Tìm kiếm</button>
                </div>
                <div className={styles.accountInfo}>
                    <a href="#" className={styles.account}>Tài Khoản</a>
                    <a href="#" className={styles.wishlist}>Thông báo</a>
                    <a onClick={handleCartClick} className={styles.cart} style={{ cursor: 'pointer' }}>
                        Giỏ hàng
                    </a>
                </div>
            </div>
            <nav className={styles.navBar}>
                <ul>
                    <li><a onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Trang Chủ</a></li>
                    <li><a href="#">Cửa Hàng</a></li>
                    <li><a href="#">Thời Trang</a></li>
                    <li><a href="#">Đồ Điện Tử</a></li>
                    <li><a href="#">Mã Giảm Giá</a></li>
                    <li><a href="#">Liên Hệ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
