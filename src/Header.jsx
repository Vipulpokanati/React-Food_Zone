import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Veg from "./Veg";
import Drinks from "./Drinks";
import IceCreams from "./IceCreams";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Home from "./Home";
import Orders from "./Orders";
import SearchResults from "./SearchResults"; // Import SearchResults component
import "./Header.css";
import Footer from "./Footer";
import { logout } from './Store';
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import PageNotFound from "./PageNotFount";
import axios from "axios";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

const Authenticated = useSelector((state) => state.Users.isAuthenticated);
const current = useSelector((state) => state.Users.currentUser);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setMenuOpen(false);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const [quote, setQuote] = useState("");
const [quotesList, setQuotesList] = useState([]);
const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

// Fetch quotes from JSON file
const fetchQuotes = async () => {
  try {
    const response = await axios.get("https://vipulpokanati.github.io/food-quotes/food-quotes.json");
    if (response.data?.quotes?.length > 0) {
      const quotes = response.data.quotes;
      setQuotesList(quotes);
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
};

// Handle resize for mobile view
useEffect(() => {
  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// Fetch quotes on component mount
useEffect(() => {
  fetchQuotes();
}, []);

// Change quote every 10 seconds
useEffect(() => {
  if (quotesList.length === 0) return;
  const interval = setInterval(() => {
    const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
    setQuote(randomQuote);
  }, 5000);
  return () => clearInterval(interval);
}, [quotesList]);
  

  return (
    <>
      <div className="header-container">
        <div className="top-bar">
          <div className="top-left">
            <img src="./images/logo2.png" alt="Logo" className="logo" onClick={()=>{navigate('/AboutUs')}} />
            <div className="brand-text">
            <span onClick={()=>{navigate('/AboutUs')}} className="site-name">FoodZone</span>
             <span className="tagline">Delicious food delivered to your door!</span>
            </div>
          </div>
          {!isMobileView && (
              <div className="quote-bar">
                <span className="food-quote">🍽️ {quote || "One cannot think well, love well, sleep well, if one has not dined well."}</span>
              </div>
            )}


          <div className="top-right">
            <input
              type="text"
              placeholder="🔍︎ Search..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              ☰
            </button>
          </div>
        </div>

        <div className={`navbar ${menuOpen ? "open" : ""}`}>
          <Link  to="/Home" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/Veg" onClick={() => setMenuOpen(false)}>
            Veg
          </Link>
          <Link to="/NonVeg" onClick={() => setMenuOpen(false)}>
            Non-Veg
          </Link>
          <Link to="/Drinks" onClick={() => setMenuOpen(false)}>
            Drinks
          </Link>
          <Link to="/IceCreams" onClick={() => setMenuOpen(false)}>
            Ice-Creams
          </Link>
          <Link to="/Cart" className="cart-link" onClick={() => setMenuOpen(false)}>
            Cart <span role="img" aria-label="cart">
              🛒
            </span>
            {total > 0 && <span className="cart-badge">{total}</span>}
          </Link>
          <Link to="/Orders" onClick={() => setMenuOpen(false)}>
            Orders
          </Link>
          <Link to="/ContactUs" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
                 {Authenticated ? (
            <div>
              
              <button onClick={() => {dispatch(logout());setMenuOpen(false)}}>Logout</button>
              <span>Welcome, {current?.username}</span>
            </div>
          ) : (
            <Link to="/SignUp" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          )}
        </div>
        </div>

      <div className="content">
        <Routes>
          <Route path="/Veg" element={<Veg />} />
          <Route path="/NonVeg" element={<NonVeg />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Drinks" element={<Drinks />} />
          <Route path="/IceCreams" element={<IceCreams />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/*" element={<PageNotFound />} />
          {/* Add a default route or redirect if needed */}
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default function HeaderWrapper() {
  return (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  );
}
