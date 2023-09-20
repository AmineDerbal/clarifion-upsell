import React from 'react';
import { useSelector } from 'react-redux';
import { norton, clarifionLogo, mcAfee } from '../../assets';

const LogoSection = () => (
  <>
    <div className="flex items-center">
      <img
        className="w-3/5 h-3/5 object-contain"
        src={clarifionLogo}
        alt="clarifion logo"
      />
    </div>
    <div className="flex gap-1 items-center">
      <img
        className="w-3/5 h-3/5 object-contain"
        src={mcAfee}
        alt="mcAfee logo"
      />
      <img
        className="w-3/5 h-3/5 object-contain"
        src={norton}
        alt="norton logo"
      />
    </div>
  </>
);

const HeaderBottom = () => {
  const { screenWidth } = useSelector((state) => state.screen);

  return (
    <div className="flex py-5 justify-between px-[5%] ">
      {screenWidth === 'sm' || screenWidth === 'md' ? (
        <LogoSection />
      ) : (
        <>
          <div>
            <img
              className="object-contain"
              src={clarifionLogo}
              alt="clarifion logo"
            />
          </div>
          <div className="flex gap-4 items-center">
            <img
              className="object-contain"
              src={mcAfee}
              alt="mcAfee logo"
            />
            <img
              className="object-contain"
              src={norton}
              alt="norton logo"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderBottom;
