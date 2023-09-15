import React, { useState } from 'react'; // Import useState from React
import { productSmallImage, stars } from '../../assets';

const ProductDescription = () => {
  const [isChecked, setIsChecked] = useState(true); // Define isChecked and toggleCheckbox

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex gap-5 w-full">
      <img src={productSmallImage} alt="clarifion product" className="h-full w-1/3 object-fill" />
      <div className="flex flex-col justify-between gap-2 w-full">
        <div className="flex justify-between w-full">
          <p className="font-semibold text-[20px]">Clarifion Air Ionizer</p>
          <div className="flex gap-2">
            <p className="text-gray line-through">$180</p>
            <p className="text-blue"> $84</p>
          </div>
        </div>
        <img src={stars} alt="number of stars" className="w-1/3 object-fill" />
        <div className="flex gap-5 items-center">
          <label htmlFor="myCheckbox" className="flex items-center">
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
        <p>
          Simply plug a Clarifion into any standard outlet and replace bulky, expensive air
          purifiers with a simple.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
