import { useSelector} from 'react-redux';
import PaginatedProducts from './pagination';

function IceCreams() {
  const iceCreamProducts = useSelector((state) => state.products.items.IceCreams);

  return (
  
  <PaginatedProducts products={iceCreamProducts} title='🍨 IceCreams'/>

  );
}

export default IceCreams;