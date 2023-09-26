import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { productSmallImage, stars } from '../../assets';
import { productDescription } from '../../constants';

const ProductDescription = () => {
  const [isChecked, setIsChecked] = useState(true); // Define isChecked and toggleCheckbox

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const { screenWidth } = useSelector((store) => store.screen);

  return (
    <>
      <div className="flex gap-5 w-full">
        <img
          src={productSmallImage}
          alt="clarifion product"
          className={
            screenWidth === 'sm' || screenWidth === 'md'
              ? 'w-3/5 h-4/5 object-contain'
              : 'h-full w-1/3 object-fill'
          }
        />
        <div
          className={
            screenWidth === 'sm' || screenWidth === 'md'
              ? 'flex flex-col gap-2 w-full'
              : 'flex flex-col justify-between gap-2 w-full'
          }
        >
          <div className="flex justify-between w-full">
            <p className="font-semibold text-[20px]">Clarifion Air Ionizer</p>
            <div className="flex gap-2">
              <p className="text-gray line-through">$180</p>
              <p className="text-blue"> $84</p>
            </div>
          </div>
          <img
            src={stars}
            alt="number of stars"
            className="w-1/3 object-fill"
          />
          <div className="flex gap-5 items-center">
            <label
              htmlFor="myCheckbox"
              className="flex items-center"
            >
              <input
                type="checkbox"
                id="myCheckbox"
                className="hidden"
                checked={isChecked}
                onChange={toggleCheckbox}
              />
              <div
                className={`w-6 h-6 flex items-center justify-center border-4 border-bgray rounded-full transition duration-300 ${
                  isChecked ? 'bg-blue' : 'bg-white'
                }`}
              />
            </label>

            <p className="text-small">12 left in Stock</p>
          </div>
          {screenWidth === 'sm' || screenWidth === 'md' ? null : (
            <p>{productDescription}</p>
          )}
        </div>
      </div>
      {screenWidth === 'sm' || screenWidth === 'md' ? (
        <p className="-mt-6 text-sm">{productDescription}</p>
      ) : null}
    </>
  );
};

export default ProductDescription;
