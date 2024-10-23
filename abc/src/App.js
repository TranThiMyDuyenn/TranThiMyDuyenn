import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail'; // Nếu có trang chi tiết sản phẩm
import Header from './components/Header/Header'; // Import Header
import Footer from './components/Footer/Footer'; // Import Footer
import { CartProvider } from './CartContext';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header /> {/* Thêm Header ở đây */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product-detail" element={<ProductDetail />} />
                </Routes>
                <Footer /> {/* Thêm Footer ở đây */}
            </Router>
        </CartProvider>
    );
};

export default App;
