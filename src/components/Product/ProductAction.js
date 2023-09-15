import React from 'react';
import { lineVector, lock, creditCards } from '../../assets';

const ProductAction = () => (
  <div className="flex flex-col gap-2">
    <button
      type="button"
      className="w-full py-5 bg-green rounded-[50px] flex gap-5 items-center justify-center"
    >
      <p className="text-white font-bold text-[20px]">Yes - Claim my discount</p>
      <img src={lineVector} alt="line vector" className="w-6 h-6 object-contain" />
    </button>
    <div className="w-full border-lightGray text-[12px] border-2 rounded-[4px] p-2 flex justify-between items-center">
      <p>Free shipping</p>
      <p className="text-lightGray text-[16px]"> |</p>
      <div className="flex items-center gap-1">
        <img src={lock} alt="lock" className="w-5 h-5 object-contain" />
        <p>Secure 256-bit SSL encryption.</p>
      </div>
      <p className="text-lightGray text-[16px]"> |</p>
      <div>
        <img src={creditCards} alt="credit cards" className="w-full h-full object-contain" />
      </div>
    </div>
    <div className="flex justify-center">
      <button type="button" className="cursor-pointer underline text-red">
        NO THANKS, I DON’T WANT THIS.
      </button>
    </div>
  </div>
);

export default ProductAction;
