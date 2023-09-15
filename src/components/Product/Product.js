import ProductSOrder from './ProductSOrder';
import OrderProgress from './OrderProgress';
import ProductView from './ProductView';

const Product = () => (
  <div className="px-[5%]">
    <ProductSOrder />
    <OrderProgress />
    <ProductView />
  </div>
);

export default Product;
