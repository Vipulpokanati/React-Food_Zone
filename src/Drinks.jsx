import { useSelector} from 'react-redux';
import PaginatedProducts from './pagination';

function Drinks() {
  const drinkProducts = useSelector((state) => state.products.items.Drinks);

  return (
  
  <PaginatedProducts products={drinkProducts} title='🍹 Drinks' />

  );
}

export default Drinks;