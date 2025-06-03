import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart
} from './Store.js';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import QRCode from 'react-qr-code';
import { toast } from 'react-toastify';
function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponName, setCouponName] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('QR');
  const Authenticated = useSelector((state) => state.Users.isAuthenticated);

  const couponRef = useRef();
  const emailRef = useRef();

  const handleApplyCoupon = () => {
    const code = couponRef.current.value.trim().toUpperCase();
    setCouponName(code);
    switch (code) {
      case 'DIWALI10':
        setCouponDiscount(10);
        break;
      case 'NEWYEAR15':
        setCouponDiscount(15);
        break;
      case 'SUPER25':
        setCouponDiscount(25);
        break;
      default:
        alert('Invalid Coupon Code');
        setCouponDiscount(0);
        setCouponName('');
    }
  };

  const calculatingAmount = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discountAmount = (totalPrice * discountPercentage) / 100;
    const couponAmount = (totalPrice * couponDiscount) / 100;
    const priceAfterDiscount = totalPrice - discountAmount - couponAmount;
    const tax = priceAfterDiscount * 0.05;
    const shipping=50;
    const finalPrice = priceAfterDiscount + tax+shipping;

    return {
      totalPrice,
      discountAmount,
      couponAmount,
      tax,
      finalPrice,
      shipping
    };
  };

  const { totalPrice, discountAmount, couponAmount, tax, finalPrice,shipping } = calculatingAmount();

  const handlePurchase = () => 
    {
    
  const emailInput = emailRef.current;
  // ✅ Validate email input
  if (!emailInput || !emailInput.checkValidity()) {
    emailInput.reportValidity(); // Shows the default browser error
    return;
  }
  const orderId = 'ORD-' + Date.now();
  const date = new Date().toLocaleString();
toast.success("Order placed!", {
  position: "top-center", // ✅ this is correct
  autoClose: 2000,
  pauseOnHover: true,
  className: "custom-toast-center"
});

  const orderData = {
    id: orderId,
    date,
    items: cartItems,
    total: finalPrice.toFixed(2),
    tax: tax.toFixed(2),
    shipping:shipping.toFixed(2),
    email,
    paymentMethod
  };

  // Save order in localStorage
  const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
  localStorage.setItem('orders', JSON.stringify([orderData, ...existingOrders]));
  
  // Send email
  const templateParams = {
    order_id: orderId,
    orders: cartItems.map(item => ({
      image_url: item.image,
      name: item.name,
      price: (item.price * item.quantity).toFixed(2),
      units: item.quantity
    })),
    cost: {
      shipping: shipping.toFixed(2),
      tax: tax.toFixed(2),
      total: finalPrice.toFixed(2)
    },
    email: email
  };

  emailjs
    .send('service_3vv7rgm', 'template_swfu2wr', templateParams, 'MjuqnA9kYySUFbId7')
    .then(() => console.log('✅ Email sent'))
    .catch(err => console.error('❌ Email failed', err));

  dispatch(clearCart());
  setThankYouMessage(true);
  setTimeout(() => navigate('/Orders'), 5000);
};


  const renderCartItems = () =>
    cartItems.map(item => (
      <div key={item.id} className="cart-item">
        <div className="cart-details">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
          </div>
        </div>
        <div className="cart-actions">
          <button className="decrement" onClick={() => {dispatch(decrementQuantity(item.id)),toast.info(`Qunatity Removed`);}}>-</button>
          <p>{item.quantity}</p>
          <button className="increment" onClick={() => {dispatch(incrementQuantity(item.id)),toast.info(`Qunatity Added`);}}>+</button>
         <button
          className="remove"
          onClick={() => {
            dispatch(removeFromCart(item.id));
            toast.warn(`${item.name} removed from cart`);
          }}
        >
          Remove
        </button>

        </div>
      </div>
    ));
  
// Save cart items to localStorage whenever cart changes
useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>

      {thankYouMessage ? (
        <div className="thank-you-message">
          <h3>🎉 Thank you for your purchase!</h3>
          <p>Your order has been placed and a confirmation email has been sent.</p>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty 🛒</div>
      ) : (
        <>
          <div className="cart-card-grid">{renderCartItems()}</div>

          <div className="cart-summary">
            <h2>Total Price: ₹{totalPrice.toFixed(2)}</h2>
            <div className="discount-buttons">
              <button onClick={() => setDiscountPercentage(10)}>Apply 10% Discount</button>
              <button onClick={() => setDiscountPercentage(15)}>Apply 15% Discount</button>
              <button onClick={() => setDiscountPercentage(25)}>Apply 25% Discount</button>
            </div>

            <div className="checkout-container">
              <input type="text" ref={couponRef} placeholder="Enter Coupon Code" />
              <button onClick={handleApplyCoupon}>Apply Coupon</button>

              <p>Discount Amount ({discountPercentage}%): ₹{discountAmount.toFixed(2)}</p>
              <p>Coupon Discount ({couponName || 'N/A'}): ₹{couponAmount.toFixed(2)}</p>
              <p>Tax (5%): ₹{tax.toFixed(2)}</p>
              <h3>Final Price: ₹{finalPrice.toFixed(2)}</h3>

              <label>Enter your email:</label>
              <input
              type="email"
              ref={emailRef}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />


              <div className="payment-method">
                <h3>Select Payment Method:</h3>
                <button onClick={() => setPaymentMethod('QR')}>QR Code</button>
                <button onClick={() => setPaymentMethod('card')}>Card</button>
              </div>

              {paymentMethod === 'QR' && (
                <div className="qr-section">
                  <h4>Scan to pay ₹{finalPrice.toFixed(2)}</h4>
                  <QRCode value={`upi://pay?pa=6302543439@axl&pn=VipulStore&am=${finalPrice.toFixed(2)}&cu=INR`} />
                  <p>UPI ID: 6302543439@axl</p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="card-section">
                  <label>
                    Card Number:
                    <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" />
                  </label>
                  <label>
                    Cardholder Name:
                    <input type="text" placeholder="John Doe" maxLength="20" />
                  </label>
                  <label>
                    Expiry Date:
                    <input type="text" placeholder="MM/YY" maxLength="5" />
                  </label>
                  <label>
                    CVV:
                    <input type="password" placeholder="123" maxLength="3" />
                  </label>
                </div>
              )}

              <div className="cart-buttons">
                <button
                  onClick={() => {
                    dispatch(clearCart());
                    toast.error("🛒 Cart has been cleared!");
                  }}
                >
                  Clear Cart
                  
                </button>
                
                <button
                  onClick={() => {
                    if (Authenticated) {
                      handlePurchase();
                    } else {
                      alert("Please log in to continue.");
                      navigate("/SignUp"); // or redirect to login page
                    }
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

