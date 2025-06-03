import { useSelector} from 'react-redux';
import PaginatedProducts from './pagination';

function NonVeg() {
  const nonVegProducts = useSelector((state) => state.products.items.NonVeg);
  return<PaginatedProducts products={nonVegProducts} title='🍗Non-Veg Dishes'/>;
}

export default NonVeg;