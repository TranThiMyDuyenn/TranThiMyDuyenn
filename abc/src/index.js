import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Đảm bảo đường dẫn này là chính xác
import './index.css'; // Nếu bạn có file CSS này

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
