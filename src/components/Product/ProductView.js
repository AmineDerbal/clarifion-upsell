import React from 'react';
import { useSelector } from 'react-redux';
import ProductPreview from './ProductPreview';
import ProductData from './ProductData';

const ProductView = () => {
  const { screenWidth } = useSelector((state) => state.screen);

  return (
    <div className="p-[5%] flex mt-5 gap-10">
      {screenWidth === 'sm' || screenWidth === 'md' ? null : <ProductPreview />}
      <ProductData />
    </div>
  );
};

export default ProductView;
