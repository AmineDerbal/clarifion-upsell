import React from 'react';
import { useSelector } from 'react-redux';
import { whiteLock } from '../assets';

const Footer = () => {
  const { screenWidth } = useSelector((store) => store.screen);

  return (
    <footer className="w-full bg-header text-white mt-2 px-[5%] py-5 ">
      <div
        className={
          screenWidth === 'sm' || screenWidth === 'md'
            ? 'flex flex-col gap-2 justify-center items-center text-[14px]'
            : 'flex justify-between items-center'
        }
      >
        <div className="flex gap-2 items-center">
          <p>Copyright (c) 2023</p>
          <p className="text-[24px]"> | </p>
          <p>Clarifionsupport@clarifion.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={whiteLock}
            alt="white lock"
            className="w-5 h-5 object-contain"
          />
          <p>Secure 256-bit SSL encryption.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
