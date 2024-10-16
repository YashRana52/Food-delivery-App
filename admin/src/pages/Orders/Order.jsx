import React, { useState } from 'react';
import './Order.css';

function Orders() {
    // Pre-defined fake orders with images
    const [orders] = useState([
        {
            id: 'O001',
            date: '2024-10-10',
            items: ['Salad', 'Rolls'],
            price: 220,
            status: 'Delivered',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBnyfofMcDqs5Nm7P_GI0k1nk0rwIPCvsCA&s'
        },
        {
            id: 'O002',
            date: '2024-10-11',
            items: ['Cake'],
            price: 350,
            status: 'Shipped',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHtOCQt829nySykSKUGsnKNsBq2AEHCq8og&s"
        },
        {
            id: 'O003',
            date: '2024-10-12',
            items: ['Sandwich'],
            price: 150,
            status: 'Processing',
            image: 'https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg'
        }
    ]);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="order-list">
                {orders.map((order) => (
                    <div key={order.id} className="order-card">
                        <img src={order.image} alt={order.items.join(', ')} className="order-image" />
                        <h2>Order ID: {order.id}</h2>
                        <p>Date: {order.date}</p>
                        <p>Items: {order.items.join(', ')}</p>
                        <p>Total Price: ₹{order.price}</p>
                        <p>Status: {order.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;
