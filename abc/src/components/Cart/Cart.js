import React, { useContext } from 'react';
// Đường dẫn import chính xác
import { CartContext } from '../../CartContext'; // Cập nhật đường dẫn


const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h1>Giỏ Hàng</h1>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Giá: ${item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
