import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './Store';
import './ProductGrid.css';
import { toast } from 'react-toastify';

const PaginatedProducts = ({ products, itemsPerPage = 10, title = '' }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [filterPriceRange, setFilterPriceRange] = useState('');

  // Reset to page 1 when filter/sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortOption, filterPriceRange]);

  // Filtering
  let filteredProducts = [...products];
  if (filterPriceRange === 'low') {
    filteredProducts = filteredProducts.filter(p => p.price <=100);
  } 
  
  else if (filterPriceRange === 'between ₹101-₹200') {
    filteredProducts = filteredProducts.filter(p => p.price >=101 && p.price<=200);
  }
  else if (filterPriceRange === 'between ₹201-₹300') {
    filteredProducts = filteredProducts.filter(p => p.price >=201 && p.price<=300);
  }
  else if (filterPriceRange === 'between ₹301-₹400') {
    filteredProducts = filteredProducts.filter(p => p.price >=301 && p.price<=400);
  }
  else if (filterPriceRange === 'between ₹401-₹500') {
    filteredProducts = filteredProducts.filter(p => p.price >=401 && p.price<=500);
  }
  else if (filterPriceRange === 'high') {
    filteredProducts = filteredProducts.filter(p => p.price >=501 );
  }

  // Sorting
  if (sortOption === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
     toast.success(`${product.name} added to cart!`, {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
});
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div  className="hamburger-menu">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰ </button>
        <div onClick={() => setIsMenuOpen(isMenuOpen&&false)} className='name'>
      {title && <h2 >{title}</h2>}
    </div>
        {isMenuOpen && (
          <div className="menu-content">
            <div>
              <label>Sort by Price:</label>
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="">None</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
            <div>
              <label>Filter by Price:</label>
              <select value={filterPriceRange} onChange={(e) => setFilterPriceRange(e.target.value)}>
                <option value="">All</option>
                <option value="low">Below ₹100</option>
                <option value="between ₹101-₹200">₹101 to ₹200</option>
                <option value="between ₹201-₹300">₹201 to ₹300</option>
                <option value="between ₹301-₹400">₹301 to ₹400</option>
                <option value="between ₹401-₹500">₹401 to ₹500</option>
                <option value="high">₹501 and above</option>
              </select>
            </div>
            <div className="clear-filters">
              <button onClick={() => {
                setSortOption('');
                setFilterPriceRange('');
              }}>
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>

      <div onClick={() => setIsMenuOpen(isMenuOpen&&false)} className="product-grid">
        {currentItems.length === 0 ? (
          <div className="no-products">🚫 No products found.</div>
        ) : (
          currentItems.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>

      <div onClick={() => setIsMenuOpen(isMenuOpen&&false)} className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={pageNum === currentPage ? 'active' : ''}
          >
            {pageNum}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
      
    </>
  );
};

export default PaginatedProducts;



