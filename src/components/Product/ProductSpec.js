import React from 'react';
import { tickCircle } from '../../assets';

const ProductSpec = () => (
  <div>
    <div className="flex gap-3">
      <img src={tickCircle} alt="Check Circle" className="w-8 h-8 object-contain" />
      <p>
        Negative Ion Technology may
        {' '}
        <span className="font-bold">help with allergens</span>
        {' '}
      </p>
    </div>
    <div className="flex gap-3">
      <img src={tickCircle} alt="Check Circle" className="w-8 h-8 object-contain" />
      <p>
        Designed for
        {' '}
        <span className="font-bold">air rejuvenation</span>
      </p>
    </div>
    <div className="flex gap-3">
      <img src={tickCircle} alt="Check Circle" className="w-8 h-8 object-contain" />
      <p>
        <span className="font-bold">Perfect for every room</span>
        {' '}
        in all types of places.
      </p>
    </div>
  </div>
);

export default ProductSpec;
