import React from 'react';
import { productImage } from '../../assets';
import { customerData } from '../../constants';

const ProductPreview = () => (
  <div className="w-1/2 flex flex-1 flex-col justify-between gap-10">
    <img src={productImage} alt="clarifion product" className="object-fill h-full" />
    <div className="p-1 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <img src={customerData.image} alt={customerData.name} />
        <div>
          <img src={customerData.stars} alt="number of stars" />
          <div className="flex gap-2 items-center">
            <p className="font-semibold">{customerData.name}</p>
            <img src={customerData.verifiedImage} alt="verified customer" />
            <p className="text-lightgreen">{customerData.verifiedText}</p>
          </div>
        </div>
      </div>
      <p>{customerData.comment}</p>
    </div>
  </div>
);

export default ProductPreview;
