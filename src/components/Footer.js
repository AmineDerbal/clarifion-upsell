import React from 'react';
import { whiteLock } from '../assets';

const Footer = () => (
  <footer className="w-full bg-header text-white px-[5%] py-5 flex justify-between items-center">
    <div className="flex gap-2 items-center">
      <p>Copyright (c) 2023</p>
      <p className="text-[24px]"> | </p>
      <p>Clarifionsupport@clarifion.com</p>
    </div>
    <div className="flex gap-2 items-center">
      <img src={whiteLock} alt="white lock" className="w-5 h-5 object-contain" />
      <p>Secure 256-bit SSL encryption.</p>
    </div>
  </footer>
);

export default Footer;
