import React from 'react';
import ProductPreview from './ProductPreview';
import ProductData from './ProductData';
// import { customerData } from '../constants';

const ProductView = () => (
  <div className="p-[5%] flex mt-5 gap-10">
    <ProductPreview />
    <ProductData />
  </div>
);

export default ProductView;
