import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./ProductGrid.css";
import { addToCart } from './Store';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
const dispatch = useDispatch();
  const query = useQuery();
  const searchTerm = query.get("q") || "";

  // Get all products in one array from all categories
  const allProducts = useSelector((state) => {
    const categories = state.products.items;
    return Object.values(categories).flat();
  });
const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  // Filter by name includes search term (case-insensitive)
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="middle">
      <h2 style={{ textAlign: "center" }}>Search Results for "{searchTerm}"</h2>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <div className="no-products">No products found.</div>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
