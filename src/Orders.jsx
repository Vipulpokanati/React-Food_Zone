import{ useEffect, useState } from 'react';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="orders-container">
      <h1>📦 Your Past Orders</h1>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        orders.map(order => (
          <div className="order-card" key={order.id}>
            <h2>Order ID: {order.id}</h2>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Payment Method:</strong> {order.paymentMethod}</p>

            <div className="order-items">
              {order.items.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                    <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <p><strong>Tax:</strong> ₹{order.tax}</p>
             <p><strong>Shipping:</strong> ₹{order.shipping}</p>
            <h3>Total Paid: ₹{order.total}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
