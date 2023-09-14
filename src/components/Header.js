import React from 'react';
import Claim from './Claim';
import claims from '../constants';
import { norton, clarifionLogo, mcAfee } from '../assets';

const Header = () => (
  <header className=" w-full">
    <div className="flex align-center justify-around gap-5 bg-header py-3">
      {claims.map((claim) => (
        <Claim key={claim.id} claim={claim.claim} logo={claim.logo} />
      ))}
    </div>
    <div className="flex px-[60px] py-5 justify-between ">
      <div>
        <img className="w/9 h/9 object-contain" src={clarifionLogo} alt="clarifion logo" />
      </div>
      <div className="flex gap-4 items-center">
        <img className="w/9 h/9 object-contain" src={mcAfee} alt="mcAfee logo" />
        <img className="w/9 h/9 object-contain" src={norton} alt="norton logo" />
      </div>
    </div>
  </header>
);

export default Header;
