import React from 'react';
import { norton, clarifionLogo, mcAfee } from '../../assets';

const HeaderBottom = () => (
  <div className="flex py-5 justify-between px-[5%] ">
    <div>
      <img className="w/9 h/9 object-contain" src={clarifionLogo} alt="clarifion logo" />
    </div>
    <div className="flex gap-4 items-center">
      <img className="w/9 h/9 object-contain" src={mcAfee} alt="mcAfee logo" />
      <img className="w/9 h/9 object-contain" src={norton} alt="norton logo" />
    </div>
  </div>
);

export default HeaderBottom;
