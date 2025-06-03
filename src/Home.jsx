import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to FoodZone</h1>
        <p>Your favorite destination for delicious, fresh, and fast food!</p>
      </header>

      <section className="image-gallery">
        <div className="gallery-row">
          
          <img onClick={() => navigate('/Veg')} src="./images/veg.jpg" alt="Veg" />
          <img onClick={() => navigate('/nonVeg')}src="./images/nonVeg.webp" alt="Non-Veg" />
          <img onClick={() => navigate('/Drinks')}src="./images/drinks.jpg" alt="Drinks" />
          <img onClick={() => navigate('/IceCreams')}src="./images/icecreams.jpg" alt="Ice-Creams" />
        </div>
      </section>

      <section className="about">
        <h2>About FoodZone</h2>
        <p>
          At FoodZone, we bring flavors from around the world to your plate. Whether you're craving creamy ice creams, delicious vegetarian and non-vegetarian dishes, or refreshing drinks — we’ve got it all. Our chefs use only the freshest ingredients to make sure every bite is perfect.


        </p>
        <p>
          We offer dine-in, takeaway, and quick delivery options to make your experience convenient and satisfying. Join us today
          and discover your new favorite meal!
        </p>
      </section>

      <section className="cta">
        <h3>Order Now and Taste the Difference!</h3>
        <button onClick={() => navigate('/veg')}>Explore Menu</button>
      </section>
    </div>
  );
};

export default Home;
