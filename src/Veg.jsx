import { useSelector} from 'react-redux';
import PaginatedProducts from './pagination';

function Veg() {
  const vegProducts = useSelector((state) => state.products.items.Veg);

  return (
  
  <PaginatedProducts products={vegProducts} title='🥕Veg-Dishes'/>

  );
}

export default Veg;
